class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render :login
    else
      render json: { errors: ["Invalid username or password"] }
    end
  end

  def destroy
    logout
    render json: {}
  end

end
