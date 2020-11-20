class ProductsController < ApplicationController

  def index
    
  end

  def all_categories
    @categories = Category.all

    render json: @categories
  end    

  def all_products
    products = nil
    if (params[:category])
      products = Product.where("category = #{(params[:category])}")
    else (params[:name])  
      products = Product.where('name LIKE ?', "%#{params[:name]}%")
    end  
    render json: products.to_json
  end  

end
