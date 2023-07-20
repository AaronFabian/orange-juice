<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class FavoriteAnime extends Model
{
   use HasFactory;

   // protected $guarded = [
   //    'anime_id',
   // ];

   protected $fillable = [
      'anime_id',
      'user_email',
      'title',
      'poster',
      'season',
      'last_episode'
   ];

   protected $hidden = [
      'user_email',
      'updated_at',
      'created_at',
   ];

   public $incrementing = false;

   public function user(): BelongsTo
   {
      return $this->belongsTo(User::class);
   }
}
