class AddCompletedToPeople < ActiveRecord::Migration[5.2]
  def change
    add_column :people, :completed, :boolean, default: false
  end
end
