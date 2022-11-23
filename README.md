# ElectronicStore

#To run project
1. Put data.json in /backed/storage/app/json
2. Delete all table in database
3. php artisan migrate
4. php artisan db:seed 

#paypal client test account
username: sb-diqnp19982275@personal.example.com
password: 12345678

#Install library cloudinary
composer require jrm2k6/cloudder:0.4.*
composer require cloudinary-labs/cloudinary-laravel
php artisan vendor:publish --provider="JD\Cloudder\CloudderServiceProvider"
