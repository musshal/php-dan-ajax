<?php
  require_once('./db_login.php');

  $title = $_GET['book'];

  //Asign a query
  $query = "SELECT * FROM books WHERE title='" . $title . "'";
  $result = $db->query( $query );

  if (!$result) {
    die ("Could not query the database: <br />" . $db->error);
  }

  // Fetch and display the results
  if (mysqli_num_rows($result)) {
    while ($row = $result->fetch_object()) {
      echo 'ISBN: ' . $row->isbn . '<br />';
      echo 'Author: ' . $row->author . '<br />';
      echo 'Title: ' . $row->title . '<br />';
      echo 'Price: $' . $row->price . '<br />';
    }
  } else {
    echo "Data buku tidak ditemukan!";
  }

  $result->free();
  $db->close();
?>
