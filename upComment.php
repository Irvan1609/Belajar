<?php

include("config.php");

// cek apakah tombol daftar sudah diklik atau blum?
if (isset($_POST['submit'])) {

  // ambil data dari formulir
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // buat query
  $sqlIns = "INSERT INTO comments(name,email,message)VALUES('$name','$email','$message')";
  $query = $db->query($sqlIns);
}
header('Location: index.php#comment');
