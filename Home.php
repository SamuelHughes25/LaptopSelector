<?php
session_start();

// Never Finished
if (isset($_SESSION['username'])) {
  $welcomeMessage = "Welcome back, " . $_SESSION['username'] . "!";
  echo "<script>document.getElementById('welcomeMessage').textContent = '$welcomeMessage';</script>";
  echo "<script>document.getElementById('welcomePopup').style.display = 'block';</script>";
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto+Condensed&display=swap" rel="stylesheet" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta charset="UTF-8" />
  <link rel="stylesheet" href="stylesheet.css" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>LaptopSelector</title>
</head>

<body>
  <h1>
    <img class="websiteLogo" src="images/WebsiteLogo.png" alt="..." />
    <p class="banner">
      LAPTOP SELECTOR<sup><b>™</b></sup>
    </p>
  </h1>

  <nav class="navbar">
    <ol class="nbol">
      <a href="Home.php">Home</a>
      <a href="Laptops.php">Laptops</a>
      <a class="login" href="#" onclick="toggleLoginForm()">Login</a>
    </ol>
  </nav>

  <div id="loginFormWrapper" style="display: none">
    <div id="loginForm">
      <button class="closeButton" onclick="toggleLoginForm()">X</button>
      <h2>Login</h2>
      <form id="loginFormContent" onsubmit="return validateLoginForm()" action="login.php" method="post">
        <input class="logininput" type="text" name="username" id="username" placeholder="Username" required />
        <input class="logininput" type="password" name="password" id="password" placeholder="Password" required />
        <a href="#" class="createAcc" onclick="showCreateAccountForm()">Create Account</a>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>

  <div id="createAccountForm" style="display: none">
    <div id="createAccountFormContent">
      <button class="closeButton" onclick="toggleCreateAccountForm()">
        X
      </button>
      <h2>Create Account</h2>
      <form onsubmit="return validateCreateAccountForm()" action="create_account.php" method="post">
        <input class="logininput" type="email" name="new_email" id="new_email" placeholder="Email" required />
        <input class="logininput" type="text" name="new_username" id="new_username" placeholder="New Username"
          required />
        <input class="logininput" type="password" name="new_password" id="new_password" placeholder="New Password"
          required />
        <button type="submit">Create Account</button>
      </form>
    </div>
  </div>

  <p class="subnav">
    <img src="images/people.png" alt="..." class="icon" onclick="showUserDetails()" />
  </p>
  <div id="userDetailsPopup" class="popup" style="display: none;">
    <div class="popup-content">
      <span class="close" onclick="closeUserDetailsPopup()">&times;</span>
      <h2>User Details</h2>
      <p><strong>Username:</strong> <span
          id="username"><?php echo isset($_SESSION['username']) ? $_SESSION['username'] : '' ?></span></p>
      <p><strong>Email:</strong> <span
          id="email"><?php echo isset($_SESSION['email']) ? $_SESSION['email'] : '' ?></span></p>
      <button onclick="logout()">Logout</button>
    </div>
  </div>

  <script>
    function showUserDetails() {
      document.getElementById("userDetailsPopup").style.display = "block";
    }
    function closeUserDetailsPopup() {
      document.getElementById("userDetailsPopup").style.display = "none";
    }
    function logout() {
      window.location.href = 'logout.php';
    }
  </script>

  <div class="mainbody">
    <p class="title">
      <u> <b>Welcome to Laptop Selector</b>!</u>
    </p>
    <p class="intro">
      We are your ultimate destination for everything related to laptops.
      Whether you are a dedicated gaming enthusiast seeking the latest in
      performance and graphics, a professional in need of cutting-edge
      hardware for demanding tasks, or someone simply searching for a
      dependable device to tackle everyday activities, we have exactly what
      you're looking for.
      <br /><br />
      Explore our vast and varied selection of premium laptops from renowned
      brands, each meticulously curated to cater to an array of diverse needs
      and personal preferences. Our offerings encompass a wide spectrum of
      styles and specifications, ensuring that every customer can find the
      perfect fit for their unique requirements.
    </p>
    <h4>What we offer</h4>
    <h5>Our Services:</h5>
    <p class="intro">
      Looking for the perfect laptop tailored to your needs? Try our
      <button class="laptopbutton" onclick="openModal()">
        <b><u>Laptop Advisor Bot</u></b>
      </button>
      designed to guide you through a personalized set of questions and
      recommendations, ensuring you find the ideal device for your lifestyle
      and budget.
    </p>
    <h5>Our Range:</h5>
    <p class="intro">
      Each laptop brand brings its own unique strengths to the table, catering
      to a variety of needs from everyday computing to high-performance tasks.
      <br /><br />

      <b>ACER</b> has mastered the art of blending powerful performance with
      affordability. The Swift X is a dream for anyone who needs a powerful
      laptop that's also easy to carry around—perfect for professionals who
      are always on the move. At the other end, the Aspire series is easy on
      the wallet, making it an ideal choice for students or casual users who
      need a dependable machine for day-to-day tasks. <br /><br />
      <b>HP</b> or Hewlett-Packard's range is impressively versatile. The ENVY
      series is there for those who need a laptop that can keep up with
      intense workloads and downtime streaming alike. If you're
      budget-conscious, the HP Stream offers essential features without the
      frills, while the HP 15s is a solid performer at a more accessible price
      point. <br /><br />
      <b>Microsoft</b> really shines with its Surface line, known for its
      innovative convertible designs that can switch from a traditional laptop
      to a tablet in a snap. This flexibility is a hit with professionals who
      value a seamless blend of productivity and creativity, all while staying
      tightly integrated with Microsoft’s software ecosystem. <br /><br />
      <b>Samsung</b> leverages its expertise in high-end display and
      connectivity technologies, bringing features typically seen in
      smartphones to the laptop arena. The Galaxy Book series is perfect for
      users who crave top-notch multimedia experiences and love staying
      connected across all their Samsung devices. <br /><br />
      Overall, whether you’re looking for a straightforward laptop for
      everyday use, a budget-friendly option, or a state-of-the-art
      powerhouse, these brands offer a wide array of choices from a wide
      variety of suppliers meaning you will never leave this site without a
      satisfactory laptop. <br />
    </p>
    <h5>Other Services</h5>
    <p class="intro">
      Stay connected with our exclusive monthly news emails, bringing you the
      latest trends, tech news, and special offers right to your inbox. Sign
      in or create an account to receive personalized recommendations and be
      the first to know about our new arrivals and much more!
      <br /><br /><br /><br />
    </p>

    <div id="overlay" class="overlay"></div>
    <div id="modal" class="modal">
      <h2>Laptop Bot</h2>
      <label for="usage">General Usage:</label>
      <select id="usage">
        <option value="">--Select an option--</option>
        <option value="working">Working Machine</option>
        <option value="gaming">Gaming Machine</option>
        <option value="watching">Watching Machine</option>
        <option value="dont mind/care">Don't mind/care</option>
      </select>
      <label for="brand">Preferred Brand:</label>
      <select id="brand">
        <option value="">--Select an option--</option>
        <option value="samsung">Samsung</option>
        <option value="microsoft">Microsoft</option>
        <option value="hp">HP</option>
        <option value="acer">Acer</option>
        <option value="dont mind/care">Don't mind/care</option>
      </select>
      <label for="priceRange">Price Range:</label>
      <select id="priceRange">
        <option value="">--Select an option--</option>
        <option value="0-499">£0-£499</option>
        <option value="500-999">£500-£999</option>
        <option value="1000-">£1000+</option>
        <option value="dont mind/care">Don't mind/care</option>
      </select>
      <button onclick="findPerfectLaptop()">Find My Perfect Laptop</button>
      <div id="result" class="result"></div>
      <button onclick="closeModal()">Close</button>
    </div>
  </div>
</body>
<!-- Never Finished -->
<div id="welcomePopup" class="popup" style="display: none">
  <div class="popup-content">
    <span class="close" onclick="closeWelcomePopup()">&times;</span>
    <h2>Welcome Back!</h2>
    <p id="welcomeMessage"></p>
  </div>
</div>
<footer>
  <div class="footer-content">
    <div>
      <h3>About Us</h3>
      <p>
        Laptop Selector<sup><b>™</b></sup> is dedicated to providing the best
        laptops and accessories. Contact us for any inquiries.
      </p>
      <p>
        Contact:
        <a href="mailto:info@yourwebsite.com" class="footer-link">info@yourwebsite.com</a>
      </p>
    </div>
    <div>Laptop Selector &copy; 2024. All rights reserved.</div>
  </div>
</footer>
<script src="script.js"></script>

</html>