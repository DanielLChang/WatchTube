class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token
    session[:session_token] = nil
    @current_user = nil
  end

  def prevent_if_logged_in
    render json: { errors: ['You already have an account!'] }, status: 403 if logged_in?
  end

  def require_logged_in
    render json: { errors: ['Need to be logged in for that!'] }, status: 403 unless logged_in?
  end

end
