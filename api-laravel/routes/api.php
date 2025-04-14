<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ItemController;
use Illuminate\Support\Facades\Route;

Route::get("/teste", function(){
    return ['teste' => true];
});

//ROTAS USUARIO
Route::post("/auth/login", [AuthController::class, 'login']);
Route::post("/auth/logout", [AuthController::class, 'logout']);
Route::post("/auth/refresh", [AuthController::class, 'refresh']);
Route::post("/user", [AuthController::class, 'create']);
Route::get("/user", [UserController::class, 'read']);
//ROTAS ITEM
Route::resource('/item', ItemController::class);

