class CreateSaves < ActiveRecord::Migration[7.0]
  def change
    create_table :saves do |t|
      t.string :name
      t.string :image
      t.integer :breed_id
      t.integer :shelter_id
      t.integer :employee_id
      t.integer :foster_id

      t.timestamps
    end
  end
end
