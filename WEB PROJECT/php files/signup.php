<?php

include 'connection.php';

error_reporting(0);

session_start();

if (isset($_SESSION['name'])) {
    header("Location: login.php");
}

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
  $address = $_POST['address'];
	$password = md5($_POST['password']);
	$cpassword = md5($_POST['cpassword']);

	if ($password == $cpassword) {
		$sql = "SELECT * FROM signup WHERE email='$email'";
		$result = mysqli_query($conn, $sql);
		if (!$result->num_rows > 0) {
			$sql = "INSERT INTO signup (name, email, address, password)
					VALUES ('$name', '$email', '$address', '$password')";
			$result = mysqli_query($conn, $sql);
			if ($result) {
			  header("Location: login.php");
				$name = "";
				$email = "";
        $address = "";
				$_POST['password'] = "";
				$_POST['cpassword'] = "";
			} else {
				echo "<script>alert('Something Wrong.')</script>";
			}
		} else {
			echo "<script>alert('Please Enter Another Email.')</script>";
		}

	} else {
		echo "<script>alert('Enter Same Password')</script>";
	}
}

?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
  <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" rel="stylesheet">

  </head>
  <body>
    <style media="screen">
      .navbar .navbar-nav .nav-link {
          color: white;
          font-size: 1.1em;
          padding: .5em 1em;
          height: 80px;
          margin-top: 30px;
      }

      .navbar .navbar-nav .nav-link:hover{
          color: #808080;
      }
      .navbar-logo-centered .navbar-nav .nav-link{
          padding: .5em 1em;
      }
      .navbar-brand{
        margin-right: 0px;
      }


      *{
        box-sizing: border-box;
      }
      body{
        font-family: poppins;
        font-size: 16px;
        color: #fff;
      }
      .wrapper{
        background-color: rgba(0,0,0,0.5);
        margin: auto;
        padding: 40px;
        border-radius: 5px;
        box-shadow: 0 0 10px #000;
        position: absolute;
        top: 150px;
        bottom: 20px;
        left: 0;
        right: 0;
        width: 500px;
        height: 600px;
      }
      .wrapper:before{
        background-image: url(Gradient.jpg);
        width: 100%;
        height: 100%;
        -webkit-background-size:cover;
        background-size: cover;
        content: '';
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index:-1;
        display: block;
        filter: blur(6px);
      }
      .wrapper .header-text{
        font-size: 32px;
        font-weight: 600;
        padding-bottom: 30px;
        text-align: center;
      }
      .wrapper input{
        margin: 10px 0;
        border: none;
        padding: 10px;
        border-radius: 5px;
        width: 100%;
        font-size: 16px;
        font-family: poppins;
      }
      .wrapper input[type=checkbox]{
        display: none;
      }

     button{
       background-color:#3498DB;
       color: #fff;
       border: none;
       border-radius: 5px;
       cursor: pointer;
       width: 100%;
       font-size: 18px;
       padding: 10px;
       margin: 20px 0 ;
     }
     .wrapper a{
       color: #ddd;
     }

     @media screen and (min-width:800px) {
       .wrapper{
         margin-top: 130px;
       }
     }

    </style>


    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #3498DB;">
    <a class="navbar-brand d-lg-none" href="Home.html"><img src="Shome2.jpg"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbarToggler7"
        aria-controls="myNavbarToggler7" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="myNavbarToggler7">
        <ul class="navbar-nav mx-auto">
            <li class="nav-item">
                <a class="nav-link" href="Home.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="lights.html">Lightning</a>
            </li>
            <a class="d-none d-lg-block" href="Home.html"><img src="Shome2.jpg"></a>
            <li class="nav-item">
                <a class="nav-link" href="Security.html">Security</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="Appliances.html">Appliances</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="Entertainment.html">Entertainment</a>
            </li>
            <li class="cart">
                <a class="nav-link" href="cart.html">
                  <ion-icon name="basket"><ion-icon>Cart<span>0</span>
                  </a>
            </li>
        </ul>
    </div>
</nav>





<div class="wrapper">
  <div class="header-text">SignUp Here</div>
  <form class="login" action="" method="post">
    <input type="text" name="name" placeholder="Enter Name" value="<?php echo $name; ?>">
    <input type="email" name="email" placeholder="Enter Email" value="<?php echo $email; ?>">
    <input type="text" name="address" placeholder="Enter Address" value="<?php echo $address; ?>">
    <input type="password" name="password" placeholder="Enter Password" value="<?php echo $password ?>">
    <input type="password" name="cpassword" value="" placeholder="Enter confirm Password" value="<?php echo $cpassword?>">
    <button type="submit" name="submit" value="Register">Register</button>
  </form>

</div>

<script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
  </body>
</html>
