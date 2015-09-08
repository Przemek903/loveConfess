class ConfessionsController < ApplicationController
  def new
    @confession = Confession.new
  end

  def create
    @confession = Confession.new(confession_params)
    if @confession.save
      redirect_to root_path
    else
      render new
    end
  end

  def show
    @confession = Confession.find(params[:id])
  end

  def edit
    @confession = Confession.find(params[:id])
  end

  def update
    @confession = Confession.find(params[:id])
    if @confession.update_attributes(confession_params)
      redirect_to root_path
    else 
      render edit
    end
  end

  private

    def confession_params
      params.require(:confession).permit(:author, :receiver, :description, :pixelPhoto,
                                         :coordinateX, :coordinateY, :width, :height, :status)
    end
end
