require 'rails_helper'

RSpec.describe Apartment, type: :model do
  it { should validate_presence_of(:street_1) }
  it { should validate_presence_of(:city) }
  it { should validate_presence_of(:state) }
  it { should validate_presence_of(:postal_code) }
  it { should validate_presence_of(:country) }
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:phone_number) }
  it { should validate_presence_of(:contact_hours) }
end

# this is testing the apartment model
