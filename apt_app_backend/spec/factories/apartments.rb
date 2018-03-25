FactoryBot.define do
  factory :apartment do
    street_1      Faker::Address.street_address
    street_2      Faker::Address.secondary_address
    city          Faker::Address.city
    state         Faker::Address.state_abbr
    postal_code   Faker::Address.zip
    country       'US'
    name          Faker::Name.name
    phone_number  Faker::PhoneNumber.phone_number
    contact_hours 'Monday thru Friday 9am-5pm'

    avatar { File.new("#{Rails.root}/spec/support/fixtures/sample-img.jpg") }

    user
  end
end
