class Foster < ApplicationRecord
    has_many :dogs 
    has_many :employees, through: :dogs
end
