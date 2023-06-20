<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SvgController extends Controller
{
    //text in profile picture
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    static $text_color = "F9F9F9";
    static $bg_color = "ff4081";

    public function index()
    {
        $text_color = isset($_GET['color']) ? $_GET['color'] : self::$text_color;
        $bg_color = isset($_GET['bg']) ? $_GET['bg'] : self::$bg_color;

        $name = isset($_GET['name']) ? $_GET['name'] : '01';
        if (strlen($name) <= 2 && strlen($name) > 0) {
            $name = strtoupper($name);
        } else {

            $name = explode(' ', $name);
            $name = strtoupper(substr($name[0], 0, 1) . '' . substr(@$name[1], 0, 1));
        }
        $name = empty($name) ? '01' : $name;

        return response()
            ->view('svg.show', [
                'text_color' => $text_color,
                'bg_color' => $bg_color,
                'text' => $name,
            ], 200)
            ->header('Content-Type', 'image/svg+xml');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
