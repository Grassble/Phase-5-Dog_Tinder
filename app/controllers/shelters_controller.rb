class SheltersController < ApplicationController

    def index
        render json: Shelter.all, status: :ok
    end

    def create
        shelter = Shelter.create!(shelter_params)
        render json: shelter, status: :created
    end

    private

    def shelter_params
        params.permit(:name, :address)
    end

end
