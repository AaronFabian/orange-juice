<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
   /**
    * Display the login view.
    */
   public function create(): Response
   {
      // return Inertia::render('Auth/Login', [
      //    'canResetPassword' => Route::has('password.request'),
      //    'status' => session('status'),
      // ]);


      return Inertia::render('Main', [
         "title" => "Login"
      ]);
   }

   /**
    * Handle an incoming authentication request.
    */
   public function store(LoginRequest $request): RedirectResponse
   {
      // $request->authenticate();

      // $request->session()->regenerate();

      // return redirect()->intended(RouteServiceProvider::HOME);

      $credentials = $request->validate([
         'email' => ['required', 'email'],
         'password' => ['required'],
      ]);

      if (Auth::attempt($credentials)) {
         $request->session()->regenerate();
         return redirect()->intended(RouteServiceProvider::HOME)->with('message',  'Welcome back !');
      }

      return back()->withErrors([
         'email' => 'The provided credentials do not match our records.',
      ])->onlyInput('email');
   }

   /**
    * Destroy an authenticated session.
    */
   public function destroy(Request $request): RedirectResponse
   {
      Auth::guard('web')->logout();

      $request->session()->invalidate();

      $request->session()->regenerateToken();

      return redirect('/');
   }
}
