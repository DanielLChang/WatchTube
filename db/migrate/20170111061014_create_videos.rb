class CreateVideos < ActiveRecord::Migration[5.0]
  def change
    create_table :videos do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.integer :views, default: 0
      t.text :description, null: false

      t.string :thumbnail_file_name
      t.string :thumbnail_content_type
      t.integer :thumbail_file_size
      t.datetime :thumbnail_updated_time

      t.string :video_file_name
      t.string :video_content_type
      t.integer :video_file_size
      t.datetime :video_updated_time

      t.timestamps null: false
    end

    add_index :videos, :user_id
  end
end
