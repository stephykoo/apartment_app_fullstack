require 'rails_helper'

RSpec.describe Apartment, type: :model do
  it 'should validate street_1' do
    apartment = Apartment.create
    expect(apartment.errors[:street_1]).to_not be_empty
  end

  it 'should validate city' do
    apartment = Apartment.create
    expect(apartment.errors[:city]).to_not be_empty
  end

  it 'should validate state' do
    apartment = Apartment.create
    expect(apartment.errors[:state]).to_not be_empty
  end

  it 'should validate postal_code' do
    apartment = Apartment.create
    expect(apartment.errors[:postal_code]).to_not be_empty
  end

  it 'should validate country' do
    apartment = Apartment.create
    expect(apartment.errors[:country]).to_not be_empty
  end

  it 'should validate name' do
    apartment = Apartment.create
    expect(apartment.errors[:name]).to_not be_empty
  end

  it 'should validate phone_number' do
    apartment = Apartment.create
    expect(apartment.errors[:phone_number]).to_not be_empty
  end

  it 'should validate contact_hours' do
    apartment = Apartment.create
    expect(apartment.errors[:contact_hours]).to_not be_empty
  end
end

# this is testing the apartment model
