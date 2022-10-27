class ActivitiesController < ApplicationController

    def index
        render json: Activity.all, status: :ok
    end
end
