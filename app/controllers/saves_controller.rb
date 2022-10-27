class SavesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :not_found
rescue_from ActiveRecord::RecordInvalid, with: :invalid

    def index
        render json: Save.all, status: :ok
    end

    def show
        save = Save.find(params[:id])
        render json: save, status: :ok
    end

    def create
        save = Save.create!(save_params)
        render json: save, status: :created
    end

    def update
        save = Save.find(params[:id])
        Save.update!(save_params)
        render json: save, status: :ok
    end

    def destroy
        save = Save.find(params[:id])
        save.destroy
        render json: {}, status: :ok
    end

    private

    def not_found
        render json: {"error": "Dog not found"}, status: :not_found
    end

    def invalid (invalid)
        render json: {errors: invalid.record.errors.full_message }, status: 422
    end

    def save_params
        params.permit(:name, :image, :breed_id, :shelter_id, :employee_id, :foster_id)
    end

end
