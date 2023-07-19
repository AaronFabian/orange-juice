<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   /**
    * Run the migrations.
    */
   public function up(): void
   {
      Schema::create('favorite_animes', function (Blueprint $table) {
         $table->string('anime_id')->primary();
         $table->string('user_email');
         $table->string('title');
         $table->string('poster');
         $table->string('season');
         $table->string('last_episode');
         $table->timestamps();
      });
   }

   /**
    * Reverse the migrations.
    */
   public function down(): void
   {
      Schema::dropIfExists('favorite_animes');
   }
};
