class Api::VideosController < ApplicationController

  def index
  end

  def create
  end

  def show
  end

  def update
  end

  def destroy
  end

  private

  def video_params
    params.require(:video).permit(:title, :description)
  end

end
