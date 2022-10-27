class Dog < ApplicationRecord
    belongs_to :breed
    belongs_to :employee
    belongs_to :foster
    belongs_to :shelter

    validates :name, uniqueness: true
    # validates :name, :breed_id. :foster_id, :shelter_id, :image, :employee_id, presence: true
end
