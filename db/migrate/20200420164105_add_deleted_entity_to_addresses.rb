class AddDeletedEntityToAddresses < ActiveRecord::Migration[5.2]
  def change
    add_column :addresses, :deleted_entity, :string
    add_column :addresses, :completed, :boolean, default: false
  end
end
