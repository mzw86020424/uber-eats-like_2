class LineFood < ApplicationRecord
  belongs_to :food
  belongs_to :restaurant
  belongs_to :order, optional: true

  validates :count, numericality: { greater_than: 0 }

  # activeがtrueのデータを拾う ex)LineFood.active
  scope :active, -> { where(active: true) }
  # picked_restaurant_idで指定したレストラン以外のレストランを拾う ex) LineFood.other_restaurant(1)
  scope :other_restaurant, -> (picked_restaurant_id) { where.not(restaurant_id: picked_restaurant_id) }

  def total_amount # 合計金額
    food.price*count
  end
end