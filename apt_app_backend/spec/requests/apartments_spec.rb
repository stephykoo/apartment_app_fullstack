require 'rails_helper'
#this is testing the request in routing relating to apartment.

describe 'Apartments API' do
  it 'gets a list of apartments' do
    Apartment.create(
      street_1: '19806 NW Dorchester Way',
      city: 'Hillsboro',
      state: 'OR',
      postal_code: '12345',
      country: 'USA',
      name: 'Jim Bob',
      phone_number: '610-555-5555',
      contact_hours: 'Mon-Fri 9am-5pm')

    get '/apartments'

    json = JSON.parse(response.body)

    expect(response).to be_success

    expect(json.length).to eq 1
  end

  it 'creates an apartment' do
    apartment_params = {
      apartment: {
        street_1: '22244 twentyfour street',
        city: 'Gnight',
        state: 'CA',
        postal_code: '12345',
        country: 'USA',
        name: 'Stephy',
        phone_number: '123-456-7890',
        contact_hours: 'Monday 5pm'
      }
    }
    post '/apartments', params: apartment_params

    expect(response).to be_success

    new_apartment = Apartment.first

    expect(new_apartment.name).to eq('Stephy')
  end

  it "doesn't create a apartment without street_1" do
    apartment_params = {
      apartment: {
        street_2: 'Unit 211',
        city: 'A City',
        state: 'CA',
        postal_code: '12345',
        country: 'USA',
        name: 'Stephy',
        phone_number: '111-111-1111',
        contact_hours: 'Monday 12pm'
      }
    }
    post '/apartments', params: apartment_params

    expect(response.status).to eq 422

    json = JSON.parse(response.body)

    expect(json['street_1']).to include "can't be blank"
  end

  it "doesn't create a apartment without city" do
    apartment_params = {
      apartment: {
        street_1: '211 Street',
        state: 'CA',
        postal_code: '12345',
        country: 'USA',
        name: 'Stephy',
        phone_number: '111-111-1111',
        contact_hours: 'Monday 12pm'
      }
    }
    post '/apartments', params: apartment_params

    expect(response.status).to eq 422

    json = JSON.parse(response.body)

    expect(json['city']).to include "can't be blank"
  end

  it "doesn't create a apartment without state" do
    apartment_params = {
      apartment: {
        street_1: '211 Street',
        city: 'City',
        postal_code: '12345',
        country: 'USA',
        name: 'Stephy',
        phone_number: '111-111-1111',
        contact_hours: 'Monday 12pm'
      }
    }
    post '/apartments', params: apartment_params

    expect(response.status).to eq 422

    json = JSON.parse(response.body)

    expect(json['state']).to include "can't be blank"
  end

  it "doesn't create a apartment without postal_code" do
    apartment_params = {
      apartment: {
        street_1: '211 Street',
        city: 'City',
        state: 'State',
        country: 'USA',
        name: 'Stephy',
        phone_number: '111-111-1111',
        contact_hours: 'Monday 12pm'
      }
    }
    post '/apartments', params: apartment_params

    expect(response.status).to eq 422

    json = JSON.parse(response.body)

    expect(json['postal_code']).to include "can't be blank"
  end

  it "doesn't create a apartment without country" do
    apartment_params = {
      apartment: {
        street_1: '211 Street',
        city: 'City',
        state: 'CA',
        postal_code: '12345',
        name: 'Stephy',
        phone_number: '111-111-1111',
        contact_hours: 'Monday 12pm'
      }
    }
    post '/apartments', params: apartment_params

    expect(response.status).to eq 422

    json = JSON.parse(response.body)

    expect(json['country']).to include "can't be blank"
  end

  it "doesn't create a apartment without a name" do
    apartment_params = {
      apartment: {
        street_1: 'A street',
        city: 'A City',
        state: 'CA',
        postal_code: '12345',
        country: 'USA',
        phone_number: '111-111-1111',
        contact_hours: 'Monday 12pm'
      }
    }
    post '/apartments', params: apartment_params

    expect(response.status).to eq 422

    json = JSON.parse(response.body)

    expect(json['name']).to include "can't be blank"
  end

  it "doesn't create a apartment without phone number" do
    apartment_params = {
      apartment: {
        street_1: '211 Street',
        city: 'City',
        state: 'CA',
        postal_code: '12345',
        country: 'USA',
        name: 'Stephy',
        contact_hours: 'Monday 12pm'
      }
    }
    post '/apartments', params: apartment_params

    expect(response.status).to eq 422

    json = JSON.parse(response.body)

    expect(json['phone_number']).to include "can't be blank"
  end

  it "doesn't create a apartment without contact_hours" do
    apartment_params = {
      apartment: {
        street_1: '211 Street',
        city: 'City',
        state: 'CA',
        postal_code: '12345',
        country: 'USA',
        name: 'Stephy',
        phone_number: '111-111-1111'
      }
    }
    post '/apartments', params: apartment_params

    expect(response.status).to eq 422

    json = JSON.parse(response.body)

    expect(json['contact_hours']).to include "can't be blank"
  end
end
