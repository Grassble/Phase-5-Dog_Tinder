class FostersController < ApplicationController

    def index
        render json: Foster.all, status: :ok
    end

    def create
        foster = Foster.create!(foster_params)
        render json: foster, status: :created
    end

    private

    def foster_params
        params.permit(:name, :address)
    end

end
