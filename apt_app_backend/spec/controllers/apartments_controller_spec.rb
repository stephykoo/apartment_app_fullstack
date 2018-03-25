require 'rails_helper'

RSpec.describe ApartmentsController, type: :controller do
  it { should route(:get, '/apartments').to('apartments#index', format: :json) }
  it {
    should route(:post, '/apartments')
      .to('apartments#create', format: :json)
  }
end

#anything in here is testing the ApartmentsController
