class AddContactInfoToPeople < ActiveRecord::Migration[5.2]
  def change
    add_column :people, :primary_email, :string
    add_column :people, :secondary_email, :string
    add_column :people, :phone_one_label, :string
    add_column :people, :phone_one, :string
    add_column :people, :phone_two_label, :string
    add_column :people, :phone_two, :string
  end
end
