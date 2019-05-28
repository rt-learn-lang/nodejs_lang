console.log(JSON.stringify(
{
  order:
   { event_type: 'aen:order:completed',
     event_type_version: '1.0.0',
     event_id: 'e21f8e22-4130-4b42-9416-94be84c827d8',
     correlation_id: '6fb9eb76-6048-4cd6-9086-48cac0d24b78',
     schema_url: '',
     source: { source_type: 'order', source_id: '05' },
     payload:
      { id: '9a0dfae7-78f1-4dab-b78a-2cdae07b8fd4',
        idp: { id: '', existing: false },
        title: 'Mr',
        first_name: 'John',
        last_name: 'doe',
        dob: '1965-04-07',
        contact_number: '+61 411 111 111',
        email: 'new-user-12349000030@amaysim.com.au',
        order:
         [ { sku: 'product_123',
             vertical: 'energy',
             options:
              { service_address:
                 { sub_premise: 'Level 2',
                   street_number: '17-19',
                   street_name: 'Bridge',
                   street_type: 'St',
                   suburb: 'SYDNEY',
                   state: 'NSW',
                   postcode: '2000' },
                concessions: true,
                life_support: true },
             state: 'VIC' },
           { sku: 'product_456',
             vertical: 'mobile',
             options:
              { service_address:
                 { sub_premise: 'Level 2',
                   street_number: '17-19',
                   street_name: 'Bridge',
                   street_type: 'St',
                   suburb: 'SYDNEY',
                   state: 'NSW',
                   postcode: '2000' },
                concessions: true,
                life_support: true },
             state: 'VIC' } ],
        addresses:
         [ { address_type: 'residential',
             sub_premise: 'Level 2',
             street_number: '17-19',
             street_name: 'Bridge',
             street_type: 'St',
             suburb: 'SYDNEY',
             state: 'NSW',
             postcode: '2000' },
           { address_type: 'billing',
             sub_premise: 'Level 2',
             street_number: '17-19',
             street_name: 'Bridge',
             street_type: 'St',
             suburb: 'SYDNEY',
             state: 'NSW',
             postcode: '2000' } ] } },
  idp_uuid: '866f6228-b3b9-4059-865e-b5e733aef0c6'
}
)
)
