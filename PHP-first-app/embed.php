<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Loops</title>
  </head>
  <body>

    <form action="embed.php" method="post">
      <input type="text" name="username" placeholder="Username">
      <input type="password" name="password" placeholder="Password">
      <input type="submit" name="submit">

    </form>
    <?php
    if (isset($_POST['submit'])) {
      $name = ["Freddy", "Haley", "Cory", "Jocelyn"];

      $minimum_Characters = 6;
      $maximum_Characters = 12;

      $username = $_POST['username'];
      $password = $_POST['passord'];

      if(!$username  === $name) {
        echo "Your are not an admin user. Try again";
      } else {
        echo "Welcome " . $username;
      }
        if(!strlen($password) > $minimum_Characters) {
          echo "Your password is too short try again";
        };

    }




    ?>


  </body>
</html>
