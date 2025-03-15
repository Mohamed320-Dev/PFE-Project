<?php 
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client; 
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function loginClient(Request $request)
    {

        $userData = $request->only(["email", "password"]);
        
        if (!$token = JWTAuth::attempt($userData)) {
            return response()->json(['message' => 'Invalid email or password'], 401);
        }


        return response()->json([
            'message' => 'Login successful',
            'token' => $token
        ]);
    }
}

?>