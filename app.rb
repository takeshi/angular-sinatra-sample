# encoding: utf-8
require 'multi_json'
require 'sinatra'

class First < Sinatra::Application
  enable :sessions

  configure :development do
    set :logging, true
    set :dump_errors, true
    set :public_folder, Proc.new { File.join(root, "public") }
    require "sinatra/reloader"
    register Sinatra::Reloader 
  end

  configure :production do
    set :public_folder, Proc.new { File.join(root, "dist") }
  end
end

require_relative 'helpers/init'
require_relative 'models/init'
require_relative 'routes/init'
