<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:4',
        ]);

        if ($validator->fails()) {
            return response(['status' => 422, 'errors' => $validator->errors()->all()]);
        }

        $credentials = $request->only('email', 'password');

        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 401,
                'message' => 'Unauthorized',
            ]);
        }

        $user = Auth::user();

        return $this->respondWithToken($token);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'fname' => 'required|String|max:255',
            'lname' => 'required|String|max:255',
            'phone' => 'required|String|max:12',
            'email' => 'required|String|email|max:255|unique:users',
            'password' => 'required|String|min:4|confirmed',

        ]);

        if ($validator->fails()) {
            return response(['status' => 422, 'errors' => $validator->errors()->all()]);
        }

        $user = User::create([
            'fname' => $request->fname,
            'lname' => $request->lname,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
        ]);

        $token = Auth::login($user);

        return $this->respondWithToken($token);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    public function me()
    {
        return response()->json([
            'status' => 'success',
            'user' => Auth::user(),
        ]);
    }

    public function refresh()
    {
        $token = Auth::refresh();
        return $this->respondWithToken($token);
    }

    public function respondWithToken($token)
    {
        return response()->json([
            'status' => 'success',
            'user' => Auth::user(),
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
                'expires_in' => Auth::factory()->getTTL() * 60,
            ]
        ]);
    }
}
