class CreateContactInfos < ActiveRecord::Migration[5.2]
  def change
    create_table :contact_infos do |t|
      t.references :person, foreign_key: true
      t.string :phone_one_label
      t.string :phone_one
      t.string :phone_two_label
      t.string :phone_two
      t.string :primary_email
      t.string :secondary_email

      t.timestamps
    end
  end
end
