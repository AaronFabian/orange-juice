<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">

   <link rel="icon" href="/img/orange_juice_logo_icon.png">
   <title inertia>{{ config('app.name', 'Laravel') }}</title>

   <!-- Fonts -->
   <link rel="preconnect" href="https://fonts.bunny.net">
   <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
   {{-- <link rel="stylesheet" href="build/assets/app-c16d918b.css"> --}}

   <!-- Scripts -->
   {{-- @routes --}}
   @viteReactRefresh
   @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
   {{-- <script src="build/assets/app-20b3de94.js" type="module"></script> --}}
   @inertiaHead
</head>

<body class="font-sans antialiased">
   @inertia

</body>

</html>
