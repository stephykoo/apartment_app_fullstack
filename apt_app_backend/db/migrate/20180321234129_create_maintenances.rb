class CreateMaintenances < ActiveRecord::Migration[5.1]
  def change
    create_table :maintenances do |t|
      t.string :content
      t.string :availability
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
