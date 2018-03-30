# This factory creates fake Users for testing
FactoryBot.define do
  factory :user do
    email Faker::Internet.email
    name  Faker::Name.name
    # For each new fake user, set "password#{n}" as its password
    sequence :password do |n|
      "password#{n}"
    end

    sequence :password_confirmation do |n|
      "password#{n}"
    end
    # maintenance
  end
end
