class Video < ApplicationRecord

  validates :title, :user, :description, presence: true

  # has_attached_file :thumbnail, default_url: "default-thumbnail.jpg"
  # validates_attachment_content_type :thumbnail, content_type: /\Aimage\/.*\z/
  #
  # has_attached_file :video, processors: [:transcoder]
  # validates_attachment_content_type :video, content_type: /\Avideo\/.*\Z/

  belongs_to :user
  has_many :comments

  def self.getFilteredVideos(search)
    sort_dir = search[:dir] ? search[:dir] : "asc"
    if search[:query]
      search_strings = search[:query].split(" ").map { |string| "%#{string}%" }
      where_string = ""
      search_string_array = []

      while !search_strings.empty?
        where_string = where_string + " OR " if !where_string.empty?
        string = search_strings.pop
        where_string = where_string + "UPPER(title) LIKE UPPER(?) OR UPPER(description) LIKE UPPER(?)"
        search_string_array << string
        search_string_array << string
      end

      query = Video.where(where_string, *search_string_array).includes(:user)

    elsif search[:sort]
      query = Video.all.includes(:user).order(search[:sort] => sort_dir)
    else
      query = Video.all
    end

    query = query.limit(search[:limit].to_i) if search[:limit]

    query
  end

end
