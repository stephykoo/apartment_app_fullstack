class ApartmentsController < ApplicationController
  def index
    # apartments = Apartment.all
    # render json: apartments
    @apartments = Apartment.all
  end

  def create
    apartment = Apartment.create(apartment_params)
    if apartment.valid?
      render json:apartment
    else
      render json: apartment.errors, status: :unprocessable_entity
    end
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
      :contact_hours,
      :avatar_base)
  end
end
