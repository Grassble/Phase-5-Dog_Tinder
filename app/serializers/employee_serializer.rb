class EmployeeSerializer < ActiveModel::Serializer
  attributes :id, :name, :job

  has_many :dogs
end
