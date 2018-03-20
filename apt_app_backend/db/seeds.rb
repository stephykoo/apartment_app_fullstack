# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
apartment_attributes = [
  {
    street_1: '7538 Maple Drive',
    city: 'Birmingham',
    state: 'UT',
    postal_code: '73953',
    country: 'US',
    name: 'Jane Doe',
    phone_number: '245-625-6526',
    contact_hours: 'Mondays 2pm-5pm'
  },
  {
    street_1: '4811 Syrup Drive',
    street_2: 'Apt 3B',
    city: 'Birmingham',
    state: 'UT',
    postal_code: '73951',
    country: 'US',
    name: 'John Doe',
    phone_number: '245-625-1103',
    contact_hours: 'Weekends 2pm-5pm'
  },
  {
    street_1: '9133 Pancake Road',
    city: 'Breakfast',
    state: 'CA',
    postal_code: '92001',
    country: 'US',
    name: 'Millie Doe',
    phone_number: '722-691-4673',
    contact_hours: 'None'
  }
]

apartment_attributes.each do |attributes|
  Apartment.create(attributes)
end
