<?php
// This is a really basic server side example, this would all depend on how your own website's code is written or on the CMS you are using...

// First we need to GET the search query.
if(!isset($_GET['term'])) {
// Do something else if no search query has been send
  header( "Location: /404.php", true, 404 ); // Let's output a 404 file not found error
  exit();
};

// If isset, time to validate and sanitize user input!
// $_GET['term'] would be the part in the url /search.php?term=YOURQUERY (this could also be q=YOURQUERY etc)
$term = preg_replace('/[^a-z\d ]/i', '', ($_GET['term'])); 
// This will also remove all non alphabetic characters. Numbers are removed as well, since names usually don't have any digits in them ;)
$term = trim($term); 
// Trim any spaces at the start or end of the user input 

// You can also catch the source parameter, by adding source to the url. Example: search.php?q=YOURSEARCHQUERY&source=YOURSOURCE
$source = strip_tags($_GET['source']);
if ($source == "FirefoxApp") {
    // Do something
};
// Etc etc
