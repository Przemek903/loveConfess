class StaticController < ApplicationController
  def home
  	@confessions = Confession.all
  end

  def contact
  end

  def about
  end
end
