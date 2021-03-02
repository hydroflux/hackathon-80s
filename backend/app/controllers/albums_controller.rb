class AlbumsController < ApplicationController

    def index
        @albums = Album.all
        render json: @albums
    end

    def show
        @album = Album.find(params[:id])
        render json: @album
    end

    def create
        @album = Album.create(
            album_name: params[:album_name],
            artist_name: params[:artist_name],
            cover_image: params[:cover_image],
            release_date: params[:release_date]
        )
        render json: @album
    end

    def destroy
        @album = Album.find(params[:id])
        @album.destroy 
        render json: @album, status: :no_content
    end
end
