class User < ApplicationRecord
  rolify
  has_secure_password
  has_many :maintenances

  after_create :assign_role

  validates :name, length: { minimum: 2 }
  validates :password, length: { in: 6..20 }
  validates :email, :password, :password_confirmation, :name, presence: true
  validates :name, uniqueness: true

  def assign_role
    add_role(:nontenant)
  end
end
