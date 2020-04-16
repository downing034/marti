class Person < ApplicationRecord
  has_many :contact_infos
  belongs_to :address
end
