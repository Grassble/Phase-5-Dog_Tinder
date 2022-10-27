class CreateActivities < ActiveRecord::Migration[7.0]
  def change
    create_table :activities do |t|
      t.integer :active
      t.string :name

      t.timestamps
    end
  end
end
