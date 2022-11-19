<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Http\Requests\StoreReviewRequest;
use App\Http\Requests\UpdateReviewRequest;

class ReviewController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth', ['except' => ['index', 'show']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reviews = Review::all();
        return response()->json([
            'status' => 200,
            'reviews' => $reviews,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreReviewRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreReviewRequest $request)
    {
        $review = Review::create($request->all());
        return response()->json(['status' => 200, "message" => "Inserted successfully", "review" => $review]);
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $Review = Review::find($id);
        if (!$Review)
            return response()->json(['status' => 404, 'message' => 'Review not found']);

        return response()->json(['Review' => $Review]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function edit(Review $review)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateReviewRequest  $request
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateReviewRequest $request, $id)
    {
        $review = Review::find($id);
        if (!$review) {
            return response()->json(['status' => 404, 'message' => 'Review not found']);
        }

        $review->update($request->all());
        return response()->json(['status' => 200, 'message' => 'Updated successfully', 'review' => $review]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $review = Review::find($id);
        if (!$review) {
            return response()->json(['status' => 404, 'message' => 'Review not found']);
        }
        $review->delete();
        return response()->json([
            'status' => 200, 'message' => 'Deleted successfully'
        ]);
    }
}
