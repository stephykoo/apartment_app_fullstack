require 'rails_helper'

RSpec.describe ApartmentsController, type: :controller do
  it { should route(:get, '/apartments').to('apartments#index', format: :json) }
end

#anything in here is testing the ApartmentsController
