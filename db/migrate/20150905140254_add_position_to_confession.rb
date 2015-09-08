class AddPositionToConfession < ActiveRecord::Migration
  def change
    add_column :confessions, :coordinateX, :integer
    add_column :confessions, :coordinateY, :integer
    add_column :confessions, :width, :integer
    add_column :confessions, :height, :integer
  end
end
