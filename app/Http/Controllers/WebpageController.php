<?php

namespace App\Http\Controllers;

use Inertia\Response;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WebpageController extends Controller
{
   public function index(): Response
   {
      return Inertia::render('Main', [
         'title' => 'Home',
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
