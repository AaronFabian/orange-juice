<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(RouteServiceProvider::HOME)->with('message',  'Welcome back !');
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/')->with('message', 'You are logged out.');
    }

    /**
     * Unexpected behavior from authenticated user but already logout.
     */
    public function errorAuth(Request $request): RedirectResponse
    {
        return redirect()->intended(RouteServiceProvider::HOME)->with('message', 'Unexpected behavior');
    }
}
