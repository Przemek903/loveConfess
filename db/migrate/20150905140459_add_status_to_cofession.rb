class AddStatusToCofession < ActiveRecord::Migration
  def change
    add_column :confessions, :status, :string
  end
end
