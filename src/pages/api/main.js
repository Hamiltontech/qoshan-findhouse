const fs = require('fs');
const xmlrpc = require('xmlrpc');

export default async function handler(req, res) {


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
  
    const fields = [
      'x_name',
      'x_studio_sale_price',
      'x_studio_many2one_field_YbLip',
      'x_studio_featured_url',
      'x_studio_property_id',
      'x_studio_property_area',
      'x_studio_land_area',
      'x_studio_beedrooms_count',
      'x_studio_bathrooms_count',
      'x_studio_garages_count',
      'x_studio_status',
      'x_studio_price_prefix',
      'x_studio_property_information',
      'x_studio_featured_property',
      'x_studio_view_on_slider',
      'x_studio_property_type',
      'x_studio_year_built_1',
      'x_studio_property_images',
      'x_studio_create_date_wp',
      'x_studio_tags',
      'x_studio_many2many_field_Tzhpw',
      'x_studio_many2many_field_HdeKZ'
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
        const wrapUrlsWithQuotationMarks = (entry) => {
          let urls = entry.x_studio_property_images;
          if (typeof urls !== 'string') {
            return '';
          }
          urls = urls
            .replace(/\\/g, '')
            .split(',')
            .map((url) => `"${url.trim()}"`)
            .join(', ');
        
          return urls;
        };
        
        const fetchMany2ManyNames = (entry, fieldName) => {
          const relatedm2mRecords = entry[fieldName];
          if (relatedm2mRecords && relatedm2mRecords.length > 0) {
            const relatedm2mRecordNames = relatedm2mRecords.map(record => record.x_name);
            return relatedm2mRecords;
          }
          return '';
        };
        
        
        
        const modifiedEntries = entries.map((entry) => ({
          ...entry,
          x_cities: fetchMany2OneName(entry, 'x_studio_many2one_field_YbLip'),
          x_property_type: fetchMany2OneName(entry, 'x_studio_property_type'),
          x_studio_property_images: wrapUrlsWithQuotationMarks(entry),
          x_studio_tags: fetchMany2ManyNames(entry, 'x_studio_tags'), 
        }));
  
        const jsonData =  JSON.stringify(modifiedEntries, null, 2);
  
        // client.methodCall('logout', [db, username, password], (error) => {
        //   if (error) {
        //     console.error('Logout Error:', error);
        //   }
        // });
     
        return jsonData
      }
      );

});


  
}