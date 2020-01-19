<?php
if (isset($_POST['submit'])) {
    $file = $_Files['file'];

    $fileName = $_Files['file']['name'];
    $fileTmp = $_Files['file']['tmp_name'];
    $fileSize = $_Files['file']['size'];
    $fileError = $_Files['file']['error'];
    $fileType = $_Files['file']['type'];

    $fileExt = explode('.', $fileName);
    $fileActualExt = strtolower(end($fileExt));

    $allowed = array('jpg', 'jpeg', 'png', 'pdf');

    if (in_array($fileActualExt, $allowed)) {
        if ($fileError === 0) {
            if ($fileSize < 1000000) {
              $fileNameNew = uniqid('', true).".".$fileActualExt;
              $fileDestination = 'uploads/'.$fileNameNew;
              move_uploaded_file($fileTmpName, $fileDestination);
              header("Location: index.html?uploadsuccess"); 
            } else {
              echo "File is too big!";
        } else {
          echo "there is an error uploading!";
        }
    } else {
      echo "Cannot upload this file!";
}
