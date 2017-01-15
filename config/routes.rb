Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:create, :update, :show, :index, :destroy] do
      resources :comments, only: [:create, :update, :destroy]
    end
  end

end
