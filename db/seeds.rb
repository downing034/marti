paul = Person.create!(
  first_name: 'Paul',
  last_name: 'Downing',
  notes: 'prefers to be contacted via email',
  is_agent: false,
  is_buyer: true,
  is_seller: true,
  phone_one_label: 'mobile',
  phone_one: '555-444-3333',
  phone_two_label: 'work',
  phone_two: '999-888-7777',
  primary_email: 'downing034+wide-receiver@gmail.com',
  secondary_email: 'charlie@home.edu'
)

bad_weather = Address.create!(
  address: '414 7th St. W',
  city: 'Saint Paul',
  state: 'MN',
  zip_code: '55102',
  country: 'US',
  people: [paul]
)

stanleys = Address.create!(
  address: '2500 University Ave NE',
  city: 'Minneapolis',
  state: 'MN',
  zip_code: '55418',
  country: 'US'
)

cds_wings = Address.create!(
  address: '7685 W 88th Ave',
  city: 'Westminster',
  state: 'CO',
  zip_code: '80005',
  country: 'US'
)

supatra = Address.create!(
  address: '967 7th St. W',
  city: 'Saint Paul',
  state: 'MN',
  zip_code: '55102',
  country: 'US',
  deleted_entity: 'address'
)

day_by_day = Address.create!(
  address: '477 7th St. W',
  city: 'Saint Paul',
  state: 'MN',
  zip_code: '55102',
  country: 'US',
  completed: true
)

potato = Person.create!(
  first_name: 'Potato',
  last_name: 'Dog',
  notes: 'prefers to be contacted via treats',
  is_agent: true,
  is_buyer: true,
  is_seller: false,
  addresses: [ stanleys, cds_wings],
  phone_one_label: 'mobile',
  phone_one: '777-444-2222',
  phone_two_label: 'work',
  phone_two: '333-666-8888',
  primary_email: 'dog@work.edu',
  secondary_email: 'dog@home.edu'
)

chuck = Person.create!(
  first_name: 'Chuck',
  last_name: 'Norris',
  notes: 'contacts you',
  is_agent: true,
  is_buyer: false,
  is_seller: false,
  deleted_entity: 'person'
)
