<?php

use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('chinh-sach-rieng-tu', function () {
    return '<h1>CSRT</h1>';
});

Route::get('auth/facebook/callback', function () {
    $user = Socialite::driver('facebook')->user();
    echo $user->getEmail() . '</br>';
    echo $user->getName() . '</br>';
    echo $user->getAvatar();
});

Route::get('auth/facebook', function () {
    return Socialite::driver('facebook')->redirect();
})->name('auth.facebook');
