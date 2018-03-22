class Apartment < ApplicationRecord
  validates :street_1, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :postal_code, presence: true
  validates :country, presence: true
  validates :name, presence: true
  validates :phone_number, presence: true
  validates :contact_hours, presence: true

  has_attached_file :avatar, styles: { large: "200x200" }
  validates_attachment :avatar, presence: true,
    content_type: { content_type: ["image/jpg", "image/jpeg", "image/png", "image/gif"] },
    size: { in: 0..10.megabytes }

  attr_accessor :avatar_base
  before_validation :parse_avatar_base

  private
  def parse_avatar_base
    if avatar_base
      image = Paperclip.io_adapters.for(avatar_base)
      image.original_filename = "file.#{image.content_type.split("/")[1]}"
      self.avatar = image
    end
  end
end
