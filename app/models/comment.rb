class Comment < ApplicationRecord

  validates :body, :user, :video, presence: true

  belongs_to :user
  belongs_to :video

end
