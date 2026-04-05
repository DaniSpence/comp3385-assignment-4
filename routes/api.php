<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\AuthController;

Route::get('/v1/movies', [MovieController::class, 'index'])->middleware('auth:api');
Route::post('/v1/movies', [MovieController::class, 'store'])->middleware('auth:api');

Route::post('/v1/login', [AuthController::class, 'login']);
Route::post('/v1/logout', [AuthController::class, 'logout']) -> middleware('auth:api');