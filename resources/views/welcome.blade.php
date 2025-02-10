<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Miro Clone</title>
    </head>
    <body>
        <div id="app"></div>

        @vite(['resources/js/app.ts', 'resources/css/app.css'])
    </body>
</html>
