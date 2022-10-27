class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed_id, :shelter_id, :employee_id, :foster_id, :image

  belongs_to :foster
  belongs_to :employee
end
