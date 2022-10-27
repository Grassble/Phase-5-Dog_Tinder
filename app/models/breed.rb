class Breed < ApplicationRecord
    has_one :activity
    has_many :dogs 
    has_many :shelters, through: :dogs
end
