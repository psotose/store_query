class Product < ApplicationRecord
  self.table_name = "product"
  belongs_to :category
end
