class CreateMenus < ActiveRecord::Migration[5.0]
  def change
    create_table :menus do |t|
      t.integer :parent_id
      t.string :name
      t.string :url
      t.references :parent, index:true
      t.timestamps
    end
  end
end
