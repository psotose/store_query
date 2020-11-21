class ProductsController < ApplicationController

  def index
    @products = Product.all
  end

  def all_categories
    @categories = Category.all

    render json: @categories
  end    

  def all_products
    products = nil
    if  (product_params[:category] && product_params[:category] != '' && product_params[:name] && product_params[:name] != '')
      products = Product.where("category = #{(product_params[:category])} and name LIKE ?","%#{product_params[:name]}%")
    elsif  (product_params[:category] && product_params[:category] != '')
      products = Product.where("category = #{(product_params[:category])}")
    elsif (product_params[:name] && product_params[:name] != '')  
      products = Product.where('name LIKE ?', "%#{product_params[:name]}%").order(:category)
    else    
      products = Product.all.order(:category)
    end  
    render json: products.to_json
  end  

  private

  def product_params
    params.permit(:category, :name)
  end  

end
