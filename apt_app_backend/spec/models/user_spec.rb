require 'rails_helper'

RSpec.describe User, type: :model do
  let!(:user) { create(:user) }

  it 'is valid with valid attributes' do
    expect(user).to be_valid
  end
  # it 'should have secure password' do
  #   user = User.create(name: 'Bob', password: 'secret')
  #   expect(user.save).to be true
  #   expect(user.authenticate('not-secret')).to be false
  # end
  #
  # it "should fail on bad password confirmation" do
  #   user = User.create(
  #     name: 'Jill',
  #     password: 'secret',
  #     password_confirmation: 'something else'
  #   )
  #   expect(user.save).to be false
  # end
  #
  # it "should succeed on good password confirmation" do
  #   user = User.create(
  #     name: 'Jill',
  #     password: 'secret',
  #     password_confirmation: 'secret'
  #   )
  #   expect(user.save).to be true
  # end
end
