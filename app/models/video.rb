class Video < ApplicationRecord

  validates :title, :user, :description, presence: true

  # has_attached_file :thumbnail, default_url: "default-thumbnail.jpg"
  # validates_attachment_content_type :thumbnail, content_type: /\Aimage\/.*\z/
  #
  # has_attached_file :video, processors: [:transcoder]
  # validates_attachment_content_type :video, content_type: /\Avideo\/.*\Z/

  belongs_to :user
  has_many :comments

end
