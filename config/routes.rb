Rails.application.routes.draw do
  get 'products/index'
  get 'products/all_categories'
  get 'products/all_products'

  root 'products#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
