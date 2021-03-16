class CreateLineFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :line_foods do |t|
      t.references :food, null: false, foreign_key: true               # food_idが生成される
      t.references :restaurant, null: false, foreign_key: true   # restaurant_idが生成される
      t.references :order, foreign_key: true                          # order_idが生成される
      t.integer :count, null: false, default: 0
      t.boolean :active, null: false, default: false

      t.timestamps
    end
  end
end
