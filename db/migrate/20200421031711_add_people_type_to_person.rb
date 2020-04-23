class AddPeopleTypeToPerson < ActiveRecord::Migration[5.2]
  def change
    add_column :people, :is_buyer, :boolean
    add_column :people, :is_seller, :boolean
    add_column :people, :deleted_entity, :string
    remove_column :people, :address_id
  end
end
