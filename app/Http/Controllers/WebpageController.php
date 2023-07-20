<?php

namespace App\Http\Controllers;

use App\Models\FavoriteAnime;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class WebpageController extends Controller
{
   public function index(): Response
   {
      if (Auth::check()) {
         // get all user favorite anime
         $favoriteAnimes = FavoriteAnime::where('user_email', '=', Auth::user()->email)->get();

         return Inertia::render('Main', [
            'title' => 'Home',
            'isAuth' => true,
            'favoriteAnimes' => $favoriteAnimes,
         ]);
      }

      return Inertia::render('Main', [
         'title' => 'Home',
      ]);
   }

   public function community(): Response
   {
      return Inertia::render('Main', [
         'title' => 'Community',
      ]);
   }

   public function favorite(): Response
   {
      return Inertia::render('Main', [
         'title' => 'Favorite',
      ]);
   }

   public function history(): Response
   {
      return Inertia::render('Main', [
         'title' => 'History',
      ]);
   }

   public function explore(): Response
   {
      // In this page we can stream anime
      return Inertia::render('Main', [
         'title' => 'Explore'
      ]);
   }

   public function error()
   {
      return Inertia::render('Main', [
         'title' => 'Page not found :('
      ]);
   }
}
