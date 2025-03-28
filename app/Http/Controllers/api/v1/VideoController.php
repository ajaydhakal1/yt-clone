<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Video;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Fetch all videos with the uploader's information (user)
        $videos = Video::with('user')->get();

        // Map the videos and include uploader info
        $videoData = $videos->map(function ($video) {
            return [
                'video' => $video,
                'uploader' => $video->user->name // Assuming the 'user' relationship is defined on the Video model
            ];
        });

        // Return the videos along with uploader info
        return response()->json($videoData);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $video = Video::create([
            'user_id' => '1',
            'title' => $request->title,
            'description' => $request->description,
            'url' => $request->url,
            'thumbnail' => 'Random',
            'video_url' => 'hbdsndafb'
        ]);

        $user = User::find($video->user_id);

        return response()->json([
            "video" => $video,
            "uploader" => $user->name,
            201
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $video = Video::find($id);

        if (!$video) {
            return response()->json(['error' => 'Video not found'], 404);
        }

        $user = User::find($video->user_id);

        return response()->json([
            "video" => $video,
            "uploader" => $video->user->name,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
