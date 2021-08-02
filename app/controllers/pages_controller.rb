class PagesController < ApplicationController
  def home
    @grid = []
    @current_recursion = 0
    @deepest_recursion = { count: 0, deepest_x_position: 0, deepest_y_position: 0 }
    (0..9).each do |index_y|
      x_ary = []
      (0..9).each do |index_x|
        x_ary << { x: index_x, y: index_y, visited?: false, walls: 'NW' }
      end
      @grid << x_ary
    end
    @grid[0][0][:visited?] = true
    create_maze(0, 0, @grid)
  end

  def create_maze(y_position, x_position, grid)
    directions = ['N', 'S', 'E', 'W'].shuffle
    @current_recursion += 1
    if @deepest_recursion[:count] < @current_recursion
      @deepest_recursion = { count: @current_recursion, deepest_x_position: x_position, deepest_y_position: y_position }
    end
    directions.each do |direction|
      case direction
      when 'N'
        if (y_position - 1).between?(0, @grid.length - 1) && @grid[y_position - 1][x_position][:visited?] == false
          @grid[y_position][x_position][:walls] = @grid[y_position][x_position][:walls].tr('N', '')
          y_position -= 1
          @grid[y_position][x_position][:visited?] = true
          create_maze(y_position, x_position, @grid)
        end
      when 'S'
        if (y_position + 1).between?(0, @grid.length - 1) && @grid[y_position + 1][x_position][:visited?] == false
          y_position += 1
          @grid[y_position][x_position][:walls] = @grid[y_position][x_position][:walls].tr('N', '')
          @grid[y_position][x_position][:visited?] = true
          create_maze(y_position, x_position, @grid)
        end
      when 'E'
        if (x_position + 1).between?(0, @grid.length - 1) && @grid[y_position][x_position + 1][:visited?] == false
          x_position += 1
          @grid[y_position][x_position][:walls] = @grid[y_position][x_position][:walls].tr('W', '')
          @grid[y_position][x_position][:visited?] = true
          create_maze(y_position, x_position, @grid)
        end
      when 'W'
        if (x_position - 1).between?(0, @grid.length - 1) && @grid[y_position][x_position - 1][:visited?] == false
          @grid[y_position][x_position][:walls] = @grid[y_position][x_position][:walls].tr('W', '')
          x_position -= 1
          @grid[y_position][x_position][:visited?] = true
          create_maze(y_position, x_position, @grid)
        end
      end
    end
    @current_recursion -= 1
  end
end

  # [
  # [{:visited?=>false, :walls=>"NW"}, {:visited?=>false, :walls=>"NW"}, {:visited?=>false, :walls=>"NW"}],
  # [{:visited?=>false, :walls=>"NW"}, {:visited?=>false, :walls=>"NW"}, {:visited?=>false, :walls=>"NW"}],
  # [{:visited?=>false, :walls=>"NW"}, {:visited?=>false, :walls=>"NW"}, {:visited?=>false, :walls=>"NW"}]
  # ]

  # ary [0, 1] == y=0, x=1
