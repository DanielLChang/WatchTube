class Api::VideosController < ApplicationController

  def index
    @videos = Video.all
  end

  def create
    if video_params[:thumbnail] === 'null'
      render json: ["Thumbnail can't be blank"], status: 422
    end

    # debugger

    @video = Video.new(video_params)

    if @video.save
      render :create
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def show
    @video = Video.find(params[:id])

    debugger

    if @video
      #increment views by 1 and save
      @video.views += 1
      @video.save
      render :show
    else
      render nil, status: 404
    end
  end

  def update
    @video = Video.find(params[:id])

    if @video.update(video_params)
      render :update
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def destroy
    @video = Video.find(params[:id])
    @video.destroy
    render :destroy
  end

  private

  def video_params
    params.require(:video).permit(
      :title,
      :description,
      :thumbnail,
      :video,
      :user_id,
    )
  end

end
