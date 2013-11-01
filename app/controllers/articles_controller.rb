class ArticlesController < ApplicationController
	def index
		render json: Article.all.to_json
	end
end
