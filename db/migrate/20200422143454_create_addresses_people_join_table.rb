class CreateAddressesPeopleJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_table :addresses_people, id: false do |t|
      t.integer :address_id
      t.integer :person_id
    end
  end
end
