<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SvgController;
use App\Http\Controllers\landingController;

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

Route::resource('svg',SvgController::class);
Route::resource('/',LandingController::class);
