Rails.application.routes.draw do
  resources :saves, only: [:index, :show, :create, :update, :destroy]
  resources :activities, only: [:index]
  resources :fosters, only: [:index, :create]
  resources :employees, only: [:index, :create]
  resources :shelters, only: [:index, :create]
  resources :breeds, only: [:index]
  resources :dogs, only: [:index, :show, :create, :update, :destroy]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"

  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end
