# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')

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
