class Video < ApplicationRecord

  validates :title, :user, :description, presence: true

  # has_attached_file :thumbnail, default_url: "default-thumbnail.jpg"
  # validates_attachment_content_type :thumbnail, content_type: /\Aimage\/.*\z/
  #
  # has_attached_file :video, processors: [:transcoder]
  # validates_attachment_content_type :video, content_type: /\Avideo\/.*\Z/

  belongs_to :user
  has_many :comments

  def self.search_videos(search)

    if search[:query]

      search_strings = search[:query].split(" ").map do |string|
        "%#{string}%"
      end
      where_string = ""
      search_string_array = []

      until search_strings.empty?
        where_string = where_string + " OR " unless where_string.empty?
        string = search_strings.pop
        where_string = where_string + "UPPER(title) LIKE UPPER(?) OR UPPER(description) LIKE UPPER(?)"
        search_string_array << string
        search_string_array << string
      end

      query = Video.where(where_string, *search_string_array)

    else
      query = Video.all
    end

    # query = query.limit(search[:limit].to_i) if search[:limit]

    query
  end

end
