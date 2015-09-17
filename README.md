# Readable

Readable is a small jQuery plugin to help you make your paragraphs, well, more readable. It injects styling between the 45th and 75th character of every `<p>` tag on your page.

This gives you a visual reference to tell you if tweaks are needed on your font-size or content width, etc.

Read why the 45-75 rule is important and [view the demo here](http://mds.sh/readable).

## Implementation
There are 3 files required to get **Readable** working on your site.

1. readable.css
2. readable.js
3. jQuery ( https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js )


Put **readable.css** before your closing `</head>` and **jQuery** and **readable.js** just before your closing `</body>`

```html
<html>
  <head>
    <title>Your Website</title>
    <!-- styles -->
    <link rel=“stylesheet” href=“readable/readable.css”>
  </head>
  <body>
    <!-- your website here -->
    <!-- scripts -->
    <script src=“https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js”></script>
    <script type=“text/javascript” src=“readable/readable.js”></script>
  </body>
</html>
```
