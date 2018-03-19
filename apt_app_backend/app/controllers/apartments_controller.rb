class ApartmentsController < ApplicationController
  def index
    apartments = Apartment.all
    render json: apartments
  end

  def create
    apartment = Apartment.create(apartment_params)

    render json:apartment
  end

  def apartment_params
    params.require(:apartment).permit(
      :street_1,
      :street_2,
      :city,
      :postal_code,
      :state,
      :country,
      :name,
      :phone_number,
      :contact_hours)
  end
end
