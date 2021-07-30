class PagesController < ApplicationController
  def home
    thing = Array.new(3) { Array.new(3) { { visited?: false, walls: 'NW' } } }
    raise
  end
end
