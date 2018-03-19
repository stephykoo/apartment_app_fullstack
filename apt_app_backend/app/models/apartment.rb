class Apartment < ApplicationRecord
  validates :street_1, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :postal_code, presence: true
  validates :country, presence: true
  validates :name, presence: true
  validates :phone_number, presence: true
  validates :contact_hours, presence: true
end
