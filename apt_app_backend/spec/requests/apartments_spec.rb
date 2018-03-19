require 'rails_helper'

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
end
