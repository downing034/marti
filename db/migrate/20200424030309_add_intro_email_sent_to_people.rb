class AddIntroEmailSentToPeople < ActiveRecord::Migration[5.2]
  def change
    add_column :people, :intro_email_sent, :boolean, default: false
  end
end
