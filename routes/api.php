<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MovieController;

Route::get('/v1/movies', [MovieController::class, 'index']);
Route::post('/v1/movies', [MovieController::class, 'store']);