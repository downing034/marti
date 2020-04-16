Rails.application.routes.draw do
  scope '/api' do
    resources :people
    resources :addresses
  end
end
