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
        <p class="banner">LAPTOP SELECTOR<sup><b>™</b></sup></p>
    </h1>

    <nav class="navbar">
        <ol class="nbol">
            <a href="Home.php">Home</a>
            <a href="Laptops.php">Laptops</a>
            <a class="login" href="#" onclick="toggleLoginForm()">Login</a>
        </ol>
    </nav>
    <div id="loginFormWrapper" style="display: none;">
        <div id="loginForm">
            <button class="closeButton" onclick="toggleLoginForm()">X</button>
            <h2>Login</h2>
            <form id="loginFormContent" onsubmit="return validateLoginForm()" action="login.php" method="post">
                <input class="logininput" type="text" name="username" id="username" placeholder="Username" required />
                <input class="logininput" type="password" name="password" id="password" placeholder="Password"
                    required />
                <a href="#" class="createAcc" onclick="showCreateAccountForm()">Create Account</a>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>

    <div id="createAccountForm" style="display: none;">
        <div id="createAccountFormContent">
            <button class="closeButton" onclick="toggleCreateAccountForm()">X</button>
            <h2>Create Account</h2>
            <form onsubmit="return validateCreateAccountForm()" action="create_account.php" method="post">
                <input class="logininput" type="email" name="new_email" id="new_email" placeholder="Email" required />
                <input class="logininput" type="text" name="new_username" id="new_username" placeholder="New Username"
                    required />
                <input class="logininput" type="password" name="new_password" id="new_password"
                    placeholder="New Password" required />
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

    <div class="content-container">
        <div class="sidenav">
            <button class="dropdown-btn">Brands<i class="fa fa-caret-down"></i></button>
            <div class="dropdown-container">
                <a href="#" data-brand="Acer">Acer</a>
                <a href="#" data-brand="HP">HP</a>
                <a href="#" data-brand="Microsoft">Microsoft</a>
                <a href="#" data-brand="Samsung">Samsung</a>
            </div>

            <button class="dropdown-btn">Price<i class="fa fa-caret-down"></i></button>
            <div class="dropdown-container">
                <a href="#" data-sort-by="price" data-sort-direction="asc">Lowest - Highest</a>
                <a href="#" data-sort-by="price" data-sort-direction="desc">Highest - Lowest</a>
            </div>

            <button class="dropdown-btn">Ratings<i class="fa fa-caret-down"></i></button>
            <div class="dropdown-container">
                <a href="#" data-sort-by="rating" data-sort-direction="desc">Highest Rated</a>
                <a href="#" data-sort-by="reviews" data-sort-direction="desc">Most Popular</a>
            </div>
        </div>

        <div class="grid-container">
            <div class="grid-item">
                <img class="laptopimg" src="images/Laptopimg1.jpg" alt="..." />
                <h6 class="laptoptitle">ACER Swift X 16" Laptop &nbsp;&nbsp;<p class="ratings">&#9733;4.3</p>&nbsp;<p
                        class="reviews">(10)</p>
                </h6>
                <button class="buyButton" data-buy-button="1">
                    <span class="price">£1,499</span>
                    <span class="where-to-buy">Where to Buy</span>
                </button>
                <p class="laptoptxt">
                <ul class="laptoptxt">
                    <li>Powerful laptop wrapped in a slim aluminium body</li>
                    <li>7000 Series AMD Ryzen 7 processor</li>
                    <li>NVIDIA GeForce RTX 4050 GPU</li>
                    <li>3.2K OLED display 120Hz</li>
                </ul>
                </p>
            </div>
            <div class="grid-item">
                <img class="laptopimg" src="images/Laptopimg3.jpg" alt="..." />
                <h6 class="laptoptitle">ACER Aspire 5 14" Laptop &nbsp;&nbsp;<p class="ratings">&#9733;4.3</p>&nbsp;<p
                        class="reviews">(5)</p>
                </h6>
                <button class="buyButton" data-buy-button="2">
                    <span class="price">£637</span>
                    <span class="where-to-buy">Where to Buy</span></button>
                <p class="laptoptxt">
                <ul class="laptoptxt">
                    <li>Maximize productivity and multi-tasking with its performance capabilities</li>
                    <li> Intel® Core™ i5-1235U Processor</li>
                    <li>16 GB of DDR4</li>
                    <li>Full HD 1920 x 1080p</li>
                </ul>
                </p>
            </div>
            <div class="grid-item">
                <img class="laptopimg" src="images/Laptopimg2.jpg" alt="..." />
                <h6 class="laptoptitle">ACER Aspire 1 14" Laptop &nbsp;&nbsp;<p class="ratings">&#9733;4.1</p>&nbsp;<p
                        class="reviews">(12)</p>
                </h6>
                <button class="buyButton" data-buy-button="3">
                    <span class="price">£199</span>
                    <span class="where-to-buy">Where to Buy</span></button>
                <p class="laptoptxt">
                <ul class="laptoptxt">
                    <li>Sleek design, built for on-the-go weighing in at 1.45kg</li>
                    <li>Intel® Celeron® N4500 Processor</li>
                    <li>4 GB of DDR3 RAM</li>
                    <li>Full HD 1920 x 1080p</li>
                </ul>
                </p>
            </div>
            <div class="grid-item">
                <img class="laptopimg" src="images/Laptopimg4.jpg" alt="..." />
                <h6 class="laptoptitle">HP ENVY 17 17.3" Laptop &nbsp;&nbsp;<p class="ratings">&#9733;4.9</p>&nbsp;<p
                        class="reviews">(15)</p>
                </h6>
                <button class="buyButton" data-buy-button="4">
                    <span class="price">£1,000</span>
                    <span class="where-to-buy">Where to Buy</span></button>
                <p class="laptoptxt">
                <ul class="laptoptxt">
                    <li>Competent machine which can handle some serious workloads</li>
                    <li>Intel® Core™ i7-1355U Processor</li>
                    <li> 16 GB of DDR4 RAM</li>
                    <li>Full Touchscreen HD 1920 x 1080p</li>
                </ul>
                </p>
            </div>
            <div class="grid-item">
                <img class="laptopimg" src="images/Laptopimg5.jpg" alt="..." />
                <h6 class="laptoptitle">HP 15s 15.6" Laptop &nbsp;&nbsp;<p class="ratings">&#9733;3.8</p>&nbsp;<p
                        class="reviews">(8)</p>
                </h6>
                <button class="buyButton" data-buy-button="5">
                    <span class="price">£599</span>
                    <span class="where-to-buy">Where to Buy</span></button>
                <p class="laptoptxt">
                <ul class="laptoptxt">
                    <li>All round performer from gaming to spreadsheets</li>
                    <li>Intel® Core™ i7-1255U Processor</li>
                    <li> 8 GB of DDR4 RAM</li>
                    <li>Full HD 1920 x 1080p</li>
                </ul>
                </p>
            </div>
            <div class="grid-item">
                <img class="laptopimg" src="images/Laptopimg6.jpg" alt="..." />
                <h6 class="laptoptitle">HP Stream 11 11" Laptop &nbsp;&nbsp;<p class="ratings">&#9733;4.0</p>&nbsp;<p
                        class="reviews">(3)</p>
                </h6>
                <button class="buyButton" data-buy-button="6">
                    <span class="price">£164</span>
                    <span class="where-to-buy">Where to Buy</span></button>
                <p class="laptoptxt">
                <ul class="laptoptxt">
                    <li>A budget laptop that is able to handle your everyday online routine</li>
                    <li>Intel® Celeron® N4020 Processor</li>
                    <li> 4 GB of DDR3 RAM</li>
                    <li>HD Ready 1366 x 768p</li>
                </ul>
                </p>
            </div>
            <div class="grid-item">
                <img class="laptopimg" src="images/Laptopimg9.jpg" alt="..." />
                <h6 class="laptoptitle">MICROSOFT 14.4" Surface Laptop Studio 2 &nbsp;&nbsp;<p class="ratings">
                        &#9733;4.8</p>&nbsp;<p class="reviews">(6)</p>
                </h6>
                <button class="buyButton" data-buy-button="7">
                    <span class="price">£2,109</span>
                    <span class="where-to-buy">Where to Buy</span></button>
                <p class="laptoptxt">
                <ul class="laptoptxt">
                    <li>Laptop, Staged and Hinged display offers a variety of usage with potent hardware </li>
                    <li>Intel® Core™ i7-13700H Processor</li>
                    <li> 32 GB of DDR4 RAM</li>
                    <li>Quad HD touchscreen 120 Hz</li>
                </ul>
                </p>
            </div>
            <div class="grid-item">
                <img class="laptopimg" src="images/Laptopimg7.jpg" alt="..." />
                <h6 class="laptoptitle">MICROSOFT 13.5" Surface Laptop 5 &nbsp;&nbsp;<p class="ratings">&#9733;4.6</p>
                    &nbsp;<p class="reviews">(10)</p>
                </h6>
                <button class="buyButton" data-buy-button="8">
                    <span class="price">£849</span>
                    <span class="where-to-buy">Where to Buy</span></button>
                <p class="laptoptxt">
                <ul class="laptoptxt">
                    <li>Plenty of power below the hood for your everyday tasks</li>
                    <li>Intel® Core™ i7-1255U Processor</li>
                    <li> 16 GB of DDR4 RAM</li>
                    <li>Quad HD 2256 x 1504p</li>
                </ul>
                </p>
            </div>
            <div class="grid-item">
                <img class="laptopimg" src="images/Laptopimg10.jpg" alt="..." />
                <h6 class="laptoptitle">MICROSOFT 12.4" Surface Laptop Go 3 &nbsp;&nbsp;<p class="ratings">&#9733;4.5
                    </p>&nbsp;<p class="reviews">(13)</p>
                </h6>
                <button class="buyButton" data-buy-button="9">
                    <span class="price">£769</span>
                    <span class="where-to-buy">Where to Buy</span></button>
                <p class="laptoptxt">
                <ul class="laptoptxt">
                    <li>Formidable machine with its internal hardware and its light weight</li>
                    <li>Intel® Core™ i5-1235U Processor</li>
                    <li> 8 GB of LPDDR5 RAM</li>
                    <li>HD+ 1536 x 1024p</li>
                </ul>
                </p>
            </div>
            <div class="grid-item">
                <img class="laptopimg" src="images/Laptopimg11.jpg" alt="..." />
                <h6 class="laptoptitle">SAMSUNG Galaxy Book 4 Ultra 16" Laptop &nbsp;&nbsp;<p class="ratings">&#9733;5.0
                    </p>&nbsp;<p class="reviews">(7)</p>
                </h6>
                <button class="buyButton" data-buy-button="10">
                    <span class="price">£3,282</span>
                    <span class="where-to-buy">Where to Buy</span></button>
                <p class="laptoptxt">
                <ul class="laptoptxt">
                    <li>Uncompromising on hardware gives strong performance</li>
                    <li>Intel® Core™ Ultra 9 185H Processor</li>
                    <li> 32 GB of DDR5 RAM</li>
                    <li>3K AMOLED touchscreen 120 Hz</li>
                </ul>
                </p>
            </div>
            <div class="grid-item">
                <img class="laptopimg" src="images/Laptopimg13.jpg" alt="..." />
                <h6 class="laptoptitle">SAMSUNG Galaxy Book 4 15.6" Laptop &nbsp;&nbsp;<p class="ratings">&#9733;4.9</p>
                    &nbsp;<p class="reviews">(21)</p>
                </h6>
                <button class="buyButton" data-buy-button="11">
                    <span class="price">£1,213</span>
                    <span class="where-to-buy">Where to Buy</span></button>
                <p class="laptoptxt">
                <ul class="laptoptxt">
                    <li>Super thin but packs a punch to work, play and create</li>
                    <li>Intel® Core™ 7 150U Processor</li>
                    <li> 8 GB of DDR4 RAM</li>
                    <li>Full HD 1920 x 1080p</li>
                </ul>
                </p>
            </div>
            <div class="grid-item">
                <img class="laptopimg" src="images/Laptopimg12.jpg" alt="..." />
                <h6 class="laptoptitle">SAMSUNG Galaxy Book 2 Go 14" Laptop &nbsp;&nbsp;<p class="ratings">&#9733;3.8
                    </p>&nbsp;<p class="reviews">(7)</p>
                </h6>
                <button class="buyButton" data-buy-button="12">
                    <span class="price">£405</span>
                    <span class="where-to-buy">Where to Buy</span></button>
                <p class="laptoptxt">
                <ul class="laptoptxt">
                    <li>Powerful enough to handle your work spreadsheets and tasks</li>
                    <li>Qualcomm Snapdragon 7C+ Gen3 Processor</li>
                    <li> 4 GB of DDR4 RAM</li>
                    <li>Full HD 1920 x 1080p</li>
                </ul>
                </p>
            </div>

        </div>
    </div>
    <!-- Never Finished -->
    <div id="welcomePopup" class="popup" style="display: none;">
        <div class="popup-content">
            <span class="close" onclick="closeWelcomePopup()">&times;</span>
            <h2>Welcome Back!</h2>
            <p id="welcomeMessage"></p>
        </div>
    </div>
    <script src="script.js"></script>
</body>

</html>