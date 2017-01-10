class Api::UsersController < ApplicationController

  before_action :prevent_if_logged_in, only: :create
  before_action :prevent_if_existing_username, only: :create
  before_action :require_logged_in, only: :update

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :create
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end

  def update
    @user = User.find_by_id(params[:id])

    if @user.update(user_params)
      render :update
    else
      render json: { errors: @user.errors.full_messages }, status: 404
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
    params.require(:user).permit(:username, :email, :password)
  end

  def prevent_if_existing_username
    if User.exists?(username: params[:user][:username])
      render json: { errors: ['Username is not available'] }
      false
    end
  end

end
