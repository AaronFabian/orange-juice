<?php

namespace App\Http\Controllers;

use App\Models\FavoriteAnime;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FavoriteAnimeController extends Controller
{
   /**
    * Display a listing of the resource.
    */
   public function index()
   {
      $favoriteAnimes = FavoriteAnime::where('user_email', '=', auth()->user()->email)->get();

      return Inertia::render('Main', [
         'title' => 'Favorite',
         'favoriteAnimes' => $favoriteAnimes,
      ]);
   }

   /**
    * Store a newly created resource in storage.
    */
   public function store(Request $request)
   {
      $isDeleted = false;
      $body = json_decode($request->all()['body']);
      $user = auth()->user();

      $toggle = FavoriteAnime::where('user_email', '=', $user->email)->where('anime_id', '=', $body->anime_id);

      if ($toggle->first()) :
         $toggle->delete();
         $isDeleted = true;
      else :
         FavoriteAnime::create([
            'anime_id' => $body->anime_id,
            'user_email' => $user->email,
            'title' => $body->title,
            'poster' => $body->poster,
            'season' => $body->season,
            'last_episode' => $body->last_episode,
         ]);
      endif;

      return response()->json([
         'response' => 'error',
         'error' => 'Email or Password not correct.',
         'isDeleted' => $isDeleted
      ]);
   }

   /**
    * Display the specified resource.
    */
   public function show(FavoriteAnime $favoriteAnime)
   {
      //
   }

   /**
    * Update the specified resource in storage.
    */
   public function update(Request $request, FavoriteAnime $favoriteAnime)
   {
      //
   }

   /**
    * Remove the specified resource from storage.
    */
   public function destroy(Request $request, FavoriteAnime $favoriteAnime)
   {
      $body = json_decode($request->all()['body']);
      $user = auth()->user();

      try {
         $favoriteAnime::where('user_email', '=', $user->email)->where('anime_id', '=', $body->id)->delete();

         return response()->json([
            'response' => 'ok',
            'status' => true,
         ], status: 204);
      } catch (\Throwable $th) {
         return response()->json(status: 400, data: ['status' => false, 'message' => 'something gone wrong :(', 'error' => $th]);
      }
   }
}
