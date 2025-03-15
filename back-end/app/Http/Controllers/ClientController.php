<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\User;
use Illuminate\Http\Request;

class ClientController extends Controller
{

    public function index()
    {
        //
    }



    public function store(Request $request)
{
    $request->validate([
        'name' => 'required|string',
        'email' => 'required|string|email|unique:clients,email',
        'password' => 'required|string|min:6',
    ]);

    $post = User::create([
        'name' => $request->name, // Fixed field name
        'email' => $request->email,
        'password' => bcrypt($request->password), // Hash password
    ]);

    return response()->json([
        'message' => 'User created successfully',
        'post' => $post,
    ], 201);
}

    




    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
