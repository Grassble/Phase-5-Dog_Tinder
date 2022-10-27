class Save < ApplicationRecord
    belongs_to :breed
    belongs_to :employee
    belongs_to :foster
    belongs_to :shelter

    validates :name, uniqueness: true
end
