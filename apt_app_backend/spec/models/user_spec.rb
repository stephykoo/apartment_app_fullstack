require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { create(:user) }

  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password) }
  it { should validate_presence_of(:password_confirmation) }
  it { should validate_presence_of(:name) }

  it { should have_secure_password }

  it { should validate_length_of(:password).is_at_least(6) }
  it { should validate_length_of(:password).is_at_most(20) }
  it { should validate_length_of(:name).is_at_least(2) }

  it { should validate_uniqueness_of(:email) }

  it { should have_many(:maintenances) }

  it 'assigns nontenant role to new users' do
    expect(user).to have_role(:nontenant)
  end
end
