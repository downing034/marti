paul = Person.create(
  first_name: 'Paul',
  last_name: 'Downing',
  notes: 'prefers to be contacted via email',
  is_agent: false
)

paul.contact_infos.create(
  phone_one_label: 'mobile',
  phone_one: '555-444-3333',
  phone_two_label: 'work',
  phone_two: '999-888-7777',
  primary_email: 'charlie@work.edu',
  secondary_email: 'charlie@home.edu'
)
