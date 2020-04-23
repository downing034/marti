class DropContactInfos < ActiveRecord::Migration[5.2]
  def change
    drop_table(:contact_infos, if_exists: true)
  end
end
