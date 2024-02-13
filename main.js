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

  const model = 'x_crm';  

  const fields = [ 'x_studio_many2one_field_YbLip', 'x_studio_tags', 'x_studio_create_date_wp', 'x_studio_featured_url', 'x_studio_property_id', 'x_studio_propertyarea', 'x_studio_landarea', 'x_studio_beedrooms_count', 'x_studio_bathrooms_count', 'x_studio_garages_count', 'x_studio_status', 'x_studio_property_type', 'x_studio_price_prefix', 'x_studio_property_information', 'x_studio_featured_property', 'x_studio_view_on_slider', 'x_name', 'x_studio_property_images', 'x_url', 'x_studio_sales_price', 'x_studio_many2many_field_Tzhpw'];  

  models.methodCall('execute_kw', [db, uid, password, model, 'search_read', [[]], { fields: fields }], (error, entries) => {
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

    const fetchMany2ManyNames = (entry, fieldName) => {
      const relatedRecords = entry[fieldName];
      if (relatedRecords && relatedRecords.length > 0) {
        const relatedRecordNames = relatedRecords.map(record => record[1]?.x_name || 'Unknown');
        return relatedRecordNames;
      }
      return [];
    };

    const modifiedEntries = entries.map(entry => ({
      ...entry,
      x_cities: fetchMany2OneName(entry, 'x_studio_many2one_field_YbLip'), 
      x_features: fetchMany2ManyNames(entry, 'x_studio_many2many_field_Tzhpw'),  
    }));

    const jsData = `module.exports = ${JSON.stringify(modifiedEntries, null, 2)};`;

    fs.writeFile('data.json', jsData, 'utf8', (error) => {
      if (error) {
        console.error('Write File Error:', error);
      } else {
        console.log('Data has been saved to data.js');
      }

      client.methodCall('logout', [db, uid, password], (error) => {
        if (error) {
          console.error('Logout Error:', error);
        }
      });
    });
  });
});