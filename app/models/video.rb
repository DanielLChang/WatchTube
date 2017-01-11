class Video < ApplicationRecord

  validates :title, :user, :description, presence: true

  belongs_to :user

end
