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

  const model = 'x_locations_filter';

  const fields = [
    'x_name',
    'x_studio_image_url',
    'x_studio_active',
    'x_studio_image_card_size',
    'x_studio_sequence_1',
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
        
      const modifiedEntries = entries.map((entry) => ({
        ...entry, 
      }));

      const jsonData = JSON.stringify(modifiedEntries, null, 2);

      fs.writeFile('public/locationsFilter.js', jsonData, 'utf8', (error) => {
        if (error) {
          console.error('Write File Error:', error);
        } else {
          console.log('Data has been saved to locationsFilter.json');
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