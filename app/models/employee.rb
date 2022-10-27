class Employee < ApplicationRecord
    has_many :dogs 
    has_many :fosters, through: :dogs
end
