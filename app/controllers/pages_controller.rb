class PagesController < ApplicationController
  def home
    @grid = Array.new(3) { Array.new(3) { { visited?: false, walls: 'NW' } } }
    create_maze(0, 0, @grid)
    # raise
  end

  def create_maze(x_position, y_position, grid)
    directions = ['N', 'S', 'E', 'W'].shuffle
  end
end
