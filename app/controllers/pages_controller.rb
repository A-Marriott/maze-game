class PagesController < ApplicationController
  def home
    init_maze_size
    init_grid
    init_grid_direction_mapper
    deepest_maze_route_tracker

    create_maze(0, 0)
  end

  private

  def init_maze_size
    @maze_size = params["q"] ? params["q"].to_i : 10
    @css_grid_name = case @maze_size
                when 10
                  'grid-size-10'
                when 15
                  'grid-size-15'
                when 20
                  'grid-size-20'
                end
  end

  def init_grid
    @grid = []

    (0...@maze_size).each do |index_y|
      row = []
      (0...@maze_size).each do |index_x|
        row << { x: index_x, y: index_y, visited?: false, walls: 'NW' }
      end
      @grid << row
    end
    @grid[0][0][:visited?] = true
  end

  def init_grid_direction_mapper
    @x_movement = { 'E' => 1, 'W' => -1, 'N' => 0, 'S' => 0 }
    @y_movement = { 'E' => 0, 'W' => 0, 'N' => -1, 'S' => 1 }
  end

  def deepest_maze_route_tracker
    @current_recursion = 0
    @deepest_recursion = { count: 0, deepest_x_position: 0, deepest_y_position: 0 }
  end

  def create_maze(y_position, x_position)
    directions = ['N', 'S', 'E', 'W'].shuffle
    @current_recursion += 1
    if @deepest_recursion[:count] < @current_recursion
      @deepest_recursion = { count: @current_recursion, deepest_x_position: x_position, deepest_y_position: y_position }
    end

    directions.each do |direction|
      y_position += @y_movement[direction]
      x_position += @x_movement[direction]
      if y_position.between?(0, @grid.length - 1) && x_position.between?(0, @grid.length - 1) && @grid[y_position][x_position][:visited?] == false
        break_wall(y_position, x_position, direction)
        mark_square_visited(y_position, x_position)
        create_maze(y_position, x_position)
      else
        y_position -= @y_movement[direction]
        x_position -= @x_movement[direction]
      end
    end
    @current_recursion -= 1
  end

  def break_wall(y_position, x_position, direction)
    y_position += 1 if direction == 'N'
    x_position += 1 if direction == 'W'
    direction = 'N' if direction == 'S'
    direction = 'W' if direction == 'E'
    @grid[y_position][x_position][:walls].tr!(direction, '')
  end

  def mark_square_visited(y_position, x_position)
    @grid[y_position][x_position][:visited?] = true
  end
end
