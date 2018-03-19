class CreateApartments < ActiveRecord::Migration[5.1]
  def change
    create_table :apartments do |t|
      t.string :street_1
      t.string :street_2
      t.string :city
      t.string :postal_code
      t.string :state
      t.string :country
      t.string :name
      t.string :phone_number
      t.string :contact_hours

      t.timestamps
    end
  end
end
