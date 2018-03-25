require 'faker'

FactoryBot.define do
  factory :user do
    email Faker::Internet.email
    name  Faker::Name.name
    sequence(:password) { |n| "password#{n}" }
    sequence(:password_confirmation) { |n| "password#{n}" }
  end
end
