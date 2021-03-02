# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Album.destroy_all

Album.create(album_name: "The Game", artist_name: "Queen", cover_image: "https://images-na.ssl-images-amazon.com/images/I/51u%2BOEFXt9L.jpg", release_date: 1980)
Album.create(album_name: "Born in the USA", artist_name: "Bruce Springstein", cover_image: "https://greatalbumcovers.files.wordpress.com/2012/11/c402.jpg?w=584", release_date: 1984)
Album.create(album_name: "Like A Virgin", artist_name: "Madonna", cover_image: "https://webimg.secondhandapp.com/w-i-mgl/5c4e99541996136d0a9a8b93", release_date: 1984)
Album.create(album_name: "Shout At the Devil", artist_name: "Mötley Crüe", cover_image: "https://images-na.ssl-images-amazon.com/images/I/81GNOBE273L._SL1500_.jpg", release_date: 1983)