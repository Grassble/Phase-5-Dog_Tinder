class DogsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :not_found
rescue_from ActiveRecord::RecordInvalid, with: :invalid

    def index
        render json: Dog.all, status: :ok
    end

    def show
        dog = Dog.find(params[:id])
        render json: dog, status: :ok
    end

    def create
        dog = Dog.create!(dog_params)
        render json: dog, status: :created
    end

    def update
        dog = Dog.find(params[:id])
        dog.update!(dog_params)
        render json: dog, status: :ok
    end

    def destroy
        dog = Dog.find(params[:id])
        dog.destroy
        render json: {}, status: :ok
    end

    private

    def not_found
        render json: {"error": "Dog not found"}, status: :not_found
    end

    def invalid (invalid)
        render json: {errors: invalid.record.errors.full_message }, status: 422
    end

    def dog_params
        params.permit(:name, :image, :breed_id, :shelter_id, :employee_id, :foster_id)
    end

end
