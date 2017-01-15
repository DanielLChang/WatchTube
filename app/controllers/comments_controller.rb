class CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :create
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])

    if @comment.update(comment_params)
      render :update
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :video_id, :user_id)
  end

end
