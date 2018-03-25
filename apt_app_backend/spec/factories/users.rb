FactoryBot.define do
  factory :user do
    email Faker::Internet.email
    name  Faker::Name.name
    password_digest 'password'
    # maintenance
  end
end
