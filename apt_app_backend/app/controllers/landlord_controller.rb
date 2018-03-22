class LandlordController < ApplicationController
  before_action :authenticate_user!
  before_action :authorize

  def index
    @users = User.all
  end

  def update
  end

  private

  def authorize
    if !current_user.has_role? :landlord
      render status: 401
    end
  end

end
