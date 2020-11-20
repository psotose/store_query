class ProductsController < ApplicationController

  def index
    @products = Product.all
  end

  def categories
    @categories = Category.all

    render json: @categories
  end    
end
