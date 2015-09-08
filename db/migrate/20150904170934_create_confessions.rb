class CreateConfessions < ActiveRecord::Migration
  def change
    create_table :confessions do |t|
      t.string :author
      t.string :receiver
      t.text :description
      t.string :pixelPhoto

      t.timestamps null: false
    end
  end
end
