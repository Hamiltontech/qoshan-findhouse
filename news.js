const fs = require('fs');
const xmlrpc = require('xmlrpc');

const url = 'http://qoshan.odoo.com';
const db = 'qoshan';
const username = 'laith@hst.jo';
const password = '210@Carringtonrd';

const client = xmlrpc.createClient({ url: `${url}/xmlrpc/2/common` });

client.methodCall('authenticate', [db, username, password, {}], (error, uid) => {
  if (error) {
    console.error('Authentication Error:', error);
    return;
  }

  const models = xmlrpc.createClient({ url: `${url}/xmlrpc/2/object` });

  const model = 'x_news';

  const fields = [
    'x_name',
    'x_studio_many2one_field_doQAc',
    'x_studio_original_create_date',
    'x_studio_api_url',
    'x_studio_body',
    'create_date',
    'x_studio_featured_image'
  ];

  models.methodCall(
    'execute_kw',
    [db, uid, password, model, 'search_read', [[]], { fields: fields }],
    (error, entries) => {
      if (error) {
        console.error('Search Error:', error);
        return;
      }

      const fetchMany2OneName = (entry, fieldName) => {
        const relatedRecord = entry[fieldName];
        if (relatedRecord && relatedRecord[0]) {
          const relatedRecordId = relatedRecord[0];
          const relatedRecordName = relatedRecord[1].x_name;
          return relatedRecordName;
        }
        return '';
      };
      
      // const fetchMany2ManyFieldNames = (entry, fieldName) => {
      //   const relatedRecord = entry[fieldName];
      //   if (relatedRecord && relatedRecord[0]) {
      //     const relatedRecordId = relatedRecord[0];
      //     const relatedRecordName = entries.find((entry) => entry.id === relatedRecordId)?.x_name || '';
      //     console.log(relatedRecordName);

      //     return relatedRecordName;
      //   }
      //   return '';
      // };
      const fetchMany2ManyFieldNames = (entry, fieldName) => {
        const relatedRecords = entry[fieldName];
      
        if (relatedRecords && relatedRecords.length > 0) {
          if (fieldName === 'x_gallery') {
            return relatedRecords.map((record) => record.x_name).join(', ');
          }
      
          const relatedRecordNames = relatedRecords.map((recordValue) => {
            const relatedRecord = entries.find((entry) => entry.id === recordValue);
            return relatedRecord ? relatedRecord[fieldName][0].x_name : 'Unknown';
          });
          return relatedRecordNames.join(', ');
        }
      
        return '';
      };      
      
      const modifiedEntries = entries.map((entry) => ({
        ...entry,
        x_cities: fetchMany2OneName(entry, 'x_studio_many2one_field_doQAc'),
      }));

      const jsonData = JSON.stringify(modifiedEntries, null, 2);

      fs.writeFile('news.json', jsonData, 'utf8', (error) => {
        if (error) {
          console.error('Write File Error:', error);
        } else {
          console.log('Data has been saved to data.json');
        }

        client.methodCall('logout', [db, username, password], (error) => {
          if (error) {
            console.error('Logout Error:', error);
          }
        });
      });
    }
  );
});