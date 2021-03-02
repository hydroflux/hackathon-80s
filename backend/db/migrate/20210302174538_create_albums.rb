class CreateAlbums < ActiveRecord::Migration[6.1]
  def change
    create_table :albums do |t|
      t.string :album_name
      t.string :artist_name
      t.string :cover_image
      t.integer :release_date

      t.timestamps
    end
  end
end
