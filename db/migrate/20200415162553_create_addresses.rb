class CreateAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :addresses do |t|
      t.text :address
      t.string :city
      t.string :state
      t.string :zip_code
      t.string :country
      t.timestamps
    end

    add_column :people, :address_id, :integer
  end
end
