require 'rails_helper'

RSpec.describe User, type: :model do
  context 'valid user' do
    let(:user) { User.new }

    before do
      user.email = 'test_user@test.com'
      user.name = 'Test'
      user.password = 'password'
      user.password_confirmation = 'password'
    end

    it 'is valid with valid attributes' do
      expect(user.save).to eq true
    end
  end

  context 'invalid user' do
    let(:user) { build(:user) }

    it 'fails when no password' do
      user.password = nil
      expect(user.save).to eq false
    end

    it 'fails when password is less than 7 characters' do

    end

    it 'fails when no password_confirmation' do

    end

    it 'fails when password does not equal password confirmation' do
      user.password_confirmation = 'BadPassword'
      expect(user.save).to be false
    end
  end
end
