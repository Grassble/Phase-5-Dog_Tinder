class EmployeesController < ApplicationController

    def index
        render json: Employee.all, status: :ok
    end

    def create
        employee = Employee.create!(employee_params)
        render json: employee, status: :created
    end

    private

    def employee_params
        params.permit(:name, :job)
    end

end
