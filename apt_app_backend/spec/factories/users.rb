FactoryBot.define do
  factory :user do
    email Faker::Internet.email
    name  Faker::Name.name

    sequence :password do |n|
      "password#{n}"
    end

    sequence :password_confirmation do |n|
      "password#{n}"
    end
    # maintenance
  end
end
