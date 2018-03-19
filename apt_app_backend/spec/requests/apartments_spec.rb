require 'rails_helper'
#this is testing the request in routing relating to apartment.

describe 'Apartments API' do
  it 'gets a list of apartments' do
    Apartment.create(
      street_1: '19806 NW Dorchester Way',
      city: 'Hillsboro',
      state: 'OR',
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

  it "doesn't create a apartment without a name" do
    apartment_params = {
      apartment: {
        street_1: 'A street',
        city: 'A City',
        state: 'CA',
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
end
