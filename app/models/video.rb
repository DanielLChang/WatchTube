class Video < ApplicationRecord

  validates :title, :user, :video_url, :description, presence: true

  belongs_to :user

end
