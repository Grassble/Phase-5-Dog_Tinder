class FosterSerializer < ActiveModel::Serializer
  attributes :id, :name, :address

  has_many :dogs
end
