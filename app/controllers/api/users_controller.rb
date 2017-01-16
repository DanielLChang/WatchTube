class Api::UsersController < ApplicationController

  before_action :require_logged_in, only: :update

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :create
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by_id(params[:id])

    if @user.update(user_params)
      render :update
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def show
    @user = User.find_by_id(params[:id])

    if @user
      render :show
    else
      render json: {}, status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :avatar)
  end

end
