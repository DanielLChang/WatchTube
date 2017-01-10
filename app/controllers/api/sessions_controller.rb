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
      render(
        json: ["Invalid username/password combination"],
        status: 401
      )
    end
  end

  def destroy
    @user = current_user

    if @user
      logout
      render json: {}
    else
      render json: ['No one logged in'], status: 404
    end
  end

end
