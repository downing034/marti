bad_weather = Address.create(
  address: '414 7th St. W',
  city: 'Saint Paul',
  state: 'MN',
  zip_code: '55102',
  country: 'United States'
)

stanleys = Address.create(
  address: '2500 University Ave NE',
  city: 'Minneapolis',
  state: 'MN',
  zip_code: '55418',
  country: 'United States'
)

cds_wings = Address.create(
  address: '7685 W 88th Ave',
  city: 'Westminster',
  state: 'CO',
  zip_code: '80005',
  country: 'United States'
)

paul = Person.create(
  first_name: 'Paul',
  last_name: 'Downing',
  notes: 'prefers to be contacted via email',
  is_agent: false,
  address: bad_weather
)

paul.contact_infos.create(
  phone_one_label: 'mobile',
  phone_one: '555-444-3333',
  phone_two_label: 'work',
  phone_two: '999-888-7777',
  primary_email: 'charlie@work.edu',
  secondary_email: 'charlie@home.edu'
)

potato = Person.create(
  first_name: 'Potato',
  last_name: 'Dog',
  notes: 'prefers to be contacted via treats',
  is_agent: false,
  address: bad_weather
)

potato.contact_infos.create(
  phone_one_label: 'mobile',
  phone_one: '777-444-2222',
  phone_two_label: 'work',
  phone_two: '333-666-8888',
  primary_email: 'dog@work.edu',
  secondary_email: 'dog@home.edu'
)
