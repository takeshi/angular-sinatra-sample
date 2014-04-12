# encoding: utf-8
class First < Sinatra::Application
  get '/first' do 
    # send_file File.join('public', 'index.html')
    erb :first
  end

  get '/first/home' do
  	erb :"first/home"
  end

end
