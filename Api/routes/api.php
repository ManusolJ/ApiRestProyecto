<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PokemonController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::controller(PokemonController::class)->group(function(){
    Route::get('/pokemon','index');
    Route::get('/pokemon/{id}','show');
    Route::post('/pokemon','store');
    Route::put('/pokemon/{id}','update');
    Route::delete('/pokemon/{id}','destroy');
});