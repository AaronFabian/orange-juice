<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($anime_id, $episode_id)
    {
        try {
            if (!$anime_id || !$episode_id)
                throw new Exception('Please check your URL');

            $comments = Comment::with(['user'])
                ->orderByDesc('created_at')
                ->where('anime_id', '=', $anime_id)
                ->where('episode_id', '=', $episode_id)
                ->paginate(10);

            return response()->json(
                status: 200,
                data: ['status' => 'success', 'data' => $comments]
            );
        } catch (\Throwable $th) {
            return response()->json(
                status: 404,
                data: ['status' => 'failed', 'error' => $th]
            );
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'comment' => 'required|min:2|max:500',
            'anime_id' => 'required',
            'episode_id' => 'required'
        ]);

        try {
            $comment = new Comment();
            $comment->anime_id = $request->anime_id;
            $comment->episode_id = $request->episode_id;
            $comment->content = $request->comment;
            $comment->user_email = auth()->user()->email;
            $comment->save();

            return response()->json(
                status: 200,
                data: ['message' => 'comment saved'],
            );
        } catch (\Throwable $th) {
            return response()->json(
                status: 404,
                data: [
                    'status' => 'failed', 'message' => $th
                ]
            );
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Comment $comment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comment)
    {
        //
    }
}
