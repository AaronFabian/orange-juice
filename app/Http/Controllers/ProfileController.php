<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Validation\Rules;
use Exception;


class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        //   return Inertia::render('Profile/Edit', [
        //       'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
        //       'status' => session('status'),
        //   ]);

        return Inertia::render('Main', [
            'title' => 'Profile',
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request)
    {
        // $request->user()->fill($request->validated());

        // if ($request->user()->isDirty('email')) {
        //     $request->user()->email_verified_at = null;
        // }

        // $request->user()->save();

        $request->validate([
            'name' => 'required|string|min:3|max:30',
            'password' => [
                'required', Rules\Password::defaults()
            ]
        ]);

        try {
            $user = User::find(auth()->user()->email);
            if (!Hash::check($request->password, $user->password))
                throw new Exception('Failed to edit. Unauthorized user !');

            // Begin updating
            $user->name = $request->name;

            if ($user->isClean())
                return response()->json(
                    status: 200,
                    data: [
                        'status' => 'success',
                        'message' => 'Nothing changed.',
                    ]
                );

            $user->save();

            return response()->json(
                status: 200,
                data: [
                    'status' => 'success',
                    'message' => 'Profile edited !',
                ]
            );
        } catch (\Throwable $th) {
            return response()->json(
                status: 400,
                data: [
                    'status' => 'failed',
                    'message' => $th->getMessage(),
                ]
            );
        }
        // return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request)
    {
        // $request->validate([
        //     'password' => ['required', 'current_password'],
        // ]);

        // $user = $request->user();

        // Auth::logout();

        // $user->delete();

        // $request->session()->invalidate();
        // $request->session()->regenerateToken();

        // return Redirect::to('/');
    }
}
