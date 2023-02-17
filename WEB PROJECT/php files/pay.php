<?php
include 'connection.php';
if(isset($_POST['checkout'])){
  $cardnumber=$_POST['cardnumber'];
  $cardholder=$_POST['cardholder'];
  $expirymonth=$_POST['expirymonth'];
  $expiryyear=$_POST['expiryyear'];
  $cvc=$_POST['cvc'];
  if(!empty($cardnumber) && !empty($cardholder) && !empty($expirymonth)&& !empty($expiryyear) && !empty($cvc)){
      $query = "INSERT INTO payment(cardnumber,cardholder,expirymonth,expiryyear,cvc) VALUES('$cardnumber','$cardholder','$expirymonth','$expiryyear','$cvc')";
      $result = mysqli_query($conn,$query);
      if($result){
        header("Location: Closure.html");
        }
    }
  }

?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Payment|SmartHome</title>
  </head>
  <body>
    <style media="screen">

body{
  background-color: lightgrey;
}
      #pm-box{
        width:100%;
        min-height:100vh;
        <!-- background:#3498DB; -->
        font-size:1.2rem;
        display:flex;
        justify-content:center;
        align-items:center;
      }

      .container{
        background:lightgrey;
        max-width:880px;
        height:430px;
        display:flex;
        justify-content:space-between;
        align-items:flex-start;
        padding:0.5rem 1.5rem;
      }
      .left{
        flex-basis:50%;
        opacity:0.9;
      }
      img{
        height:430px;
        width:280px;
        margin-left:160px;
      }
      #lft{
        color:white;
        margin-top:-370px;
        margin-left:180px;
        font-size:28px;
      }
      p{
        color:white;
        margin-left:180px;
      }
      #rgt{
        margin-left:20px;
      }

      .right{
        flex-basis:50%;
        border-radius:10px;
        background-color:white;
        height:330px;
        width:430px;
        margin-top:50px;
      }
      form{
        padding:1rem;
      }

      form input{
        width:70%;
        padding:0.5rem 0.7rem;
        margin:0.5rem 0;
        outline:none;
        appearance:none;
	      border: none;
	      border-bottom: 1.5px solid #ccc;
	       position: relative;
      }
      .right form #date-val select {
	       width: 35%;
	       justify-content: space-between;
         appearance:none;
         outline:none;
         border: none;
         border-bottom: 1.5px solid #ccc;
         margin-left:30px;
}

input[type="submit"]{
  width:100%;
  padding:0.7rem 1.5rem;
  background:#3498DB;
  color:white;
  border: none;
	border-radius: 50px;
  outline:none;
  margin-top:1rem;
  cursor:pointer;
}
    </style>


    <section id="pm-box">
      <div class="container">
        <div class="left">
          <img src="pexels.png" alt="">
          <h1 id="lft">Life has great moments</h1>
			<p>Enjoy with smart home!</p>
        </div>

        <div class="right">
          <h1 id="rgt">Purchase</h1>
		<form method="post" action="#">

				<label for="cc-number">Card number:</label>
				<input type="number" name="cardnumber" maxlength="19" placeholder="1111 2222 3333 4444" required>

        <label for="">Card Holder:</label>
        <input type="text" name="cardholder" maxlength="19" placeholder="e.g Maxwell" required>

        <label for="expiry-month">Expiry date:</label>
      <div id="date-val">
        <select type="number" id="expiry-month" name="expirymonth" required>
                            <option value="" default="default" selected="selected">Month</option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                            <option value="6">06</option>
                            <option value="7">07</option>
                            <option value="8">08</option>
                            <option value="9">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
        <select type="number" id="expiry-year" name="expiryyear" required>
                            <option value="" default="" selected="selected">Year</option>
                        <option value="2018">18</option>
                        <option value="2019">19</option>
                        <option value="2020">20</option>
                        <option value="2021">21</option>
                        <option value="2022">22</option>
                        <option value="2023">23</option>
                        <option value="2024">24</option>
                        <option value="2025">25</option>
                        <option value="2026">26</option>
                        <option value="2027">27</option>
                        <option value="2028">28</option>
                        <option value="2029">29</option>
                        <option value="2030">30</option></select>
      </div>
      <label for="">CVC:</label>
        <input type="number" name="cvc" maxlength="19" placeholder="11122" required>
        <input type="submit" name="checkout" value="Proceed to checkout">
        </form>
			</div>
        </div>
    </section>
  </body>
</html>
