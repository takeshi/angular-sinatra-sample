# encoding: utf-8
class First < Sinatra::Application
  get '/first' do 
    # send_file File.join('public', 'index.html')
    erb :test
  end

  get '/first/home' do
  	erb :home
  end
end
