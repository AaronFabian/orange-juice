<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FavoriteAnimeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WebpageController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [WebpageController::class, 'index'])->name('home');

Route::get('manga', [WebpageController::class, 'index']);

Route::get('drama', [WebpageController::class, 'index']);

Route::get('news', [WebpageController::class, 'index']);

Route::get('community', [WebpageController::class, 'index']);

// Public Api TODO: should remove all API to API route folder !
Route::get('comment/{anime_id}/{episode_id}', [CommentController::class, 'index']);

Route::middleware('guest')->group(function () {

    Route::get('login', [AuthenticatedSessionController::class, 'create']);

    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    Route::get('register', [RegisteredUserController::class, 'create']);

    Route::post('register', [RegisteredUserController::class, 'store']);

    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])->name('password.request');

    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])->name('password.email');

    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])->name('password.reset');

    Route::post('reset-password', [NewPasswordController::class, 'store'])->name('password.store');
});

Route::middleware('auth')->group(function () {

    Route::get('favorite', [FavoriteAnimeController::class, 'index']);

    Route::get('history', [WebpageController::class, 'history']);

    Route::get('profile', [ProfileController::class, 'edit']);

    Route::patch('profile', [ProfileController::class, 'update']);

    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::get('logout', [AuthenticatedSessionController::class, 'destroy']);

    // API
    Route::post('favorite', [FavoriteAnimeController::class, 'store']);

    Route::delete('favorite', [FavoriteAnimeController::class, 'destroy']);

    Route::post('comment', [CommentController::class, 'store']);
});

Route::get('not-found', [WebpageController::class, 'error']);

// Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

// Route::get('verify-email', EmailVerificationPromptController::class)->name('verification.notice');

// Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])->name('password.confirm');

// Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
//     ->middleware(['signed', 'throttle:6,1'])
//     ->name('verification.verify');

// Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
//     ->middleware('throttle:6,1')
//     ->name('verification.send');

// require __DIR__ . '/auth.php';


// Route::get('/test', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });
