<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\FavoriteAnime;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
   /**
    * Seed the application's database.
    */
   public function run(): void
   {
      // \App\Models\User::factory(10)->create();

      \App\Models\User::factory()->create([
         'email' => 'master@gmail.com',
      ]);

      \App\Models\User::factory()->create([
         'email' => 'jesslyn@gmail.com',
      ]);

      // FavoriteAnime::factory()->create([
      //    'anime_id' => 'masamune-kun-no-revenge-r',
      //    'user_email' => 'aaron@example.com',
      //    'title' => 'Test title',
      //    'poster' => 'www.test.url',
      //    'season' => '1',
      //    'last_episode' => '1',
      // ]);
   }
}
