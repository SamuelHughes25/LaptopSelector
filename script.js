document.addEventListener("DOMContentLoaded", function () {
  // Function to create the pop-ups for the buy button
  function handleBuyButtonClick(event, buyButton, links) {
    const existingPopUp = document.querySelector(".price-popup");
    if (existingPopUp) {
      existingPopUp.remove();
    } else {
      const popUp = createPopUp(buyButton, links);
      document.body.appendChild(popUp);
    }
  }

  function initializeBuyButtons() {
    const buyButtons = document.querySelectorAll(".buyButton");

    buyButtons.forEach((button) => {
      const buyButtonId = button.getAttribute("data-buy-button");
      // The text displayed on the buy button pop-ups
      let links = [];
      if (buyButtonId === "1") {
        links = [
          {
            href: "https://www.acer.com/gb-en/laptops/swift/swift-x-16",
            text: "ACER's Official Website - £ Customisable",
          },
          {
            href: "https://www.currys.co.uk/products/acer-swift-x-16-laptop-amd-ryzen-7-1-tb-ssd-grey-10251052.html",
            text: "Curry's Official Website - £1499",
          },
          {
            href: "https://www.amazon.co.uk/dp/B0C4FH7L99/ref=asc_df_B0C4FH7L991714905000000/?ascsubtag=6638e4f1750896324bf42dc8&tag=52402_hqsov_iceleads-21&creative=22374&creativeASIN=B0C4FH7L99&linkCode=df0",
            text: "ACER on Amazon.com - £1438",
          },
        ];
      } else if (buyButtonId === "2") {
        links = [
          {
            href: "https://www.acer.com/gb-en/laptops/aspire/aspire-5-intel",
            text: "ACER's Official Website - £ Customisable",
          },
          {
            href: "https://www.amazon.co.uk/Acer-Aspire-A515-57-15-6-inch-Laptop/dp/B0C4FGW1NP/ref=sr_1_1_sspa?dib=eyJ2IjoiMSJ9.PbNuIwpyOCz9vsAUdRSUJ-uE869gH0L6xBXdYSTOTrZ-J8oolkppZ2l72lbgjLwd0LSQzIbyUU-Gno6Dsyxp3mGT84Ow_lbw8aTOxmHTTSOHHGTfsNZCh3DqGq9YBsKhn1tPHrrOzCbOFjuJ9suC5B0xnFsW1276UH2-18GWn7UwaxDKrmCyasIGo4e2Max4A0-9HN1YczP9qEfpYY-oVArlljnMhI0qIEKfwuT64QA.Sf5aX4cnm_RzZk7jghbFLOgHI8gdZlTALWT7EoHR6hI&dib_tag=se&keywords=acer+aspire+5&qid=1715012945&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.d7e5a2de-8759-4da3-993c-d11b6e3d217f&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
            text: "ACER on Amazon.com - £627",
          },
          {
            href: "https://www.currys.co.uk/products/acer-aspire-5-14-laptop-intel-core-i5-512-gb-ssd-grey-10238885.html",
            text: "Curry's Official Website - £649",
          },
        ];
      } else if (buyButtonId === "3") {
        links = [
          {
            href: "https://www.tekshop.co.uk/acer-aspire-1-a114-33-14-laptop-intel-celeron-4gb-ram-128gb-emmc",
            text: "TekShop's Official Website - £239",
          },
          {
            href: "https://www.argos.co.uk/product/9623756",
            text: "Argos's Official Website - £169",
          },
          {
            href: "https://www.currys.co.uk/products/acer-aspire-1-14-laptop-intel-celeron-128-gb-emmc-silver-10226581.html",
            text: "Curry's Official Website - £189",
          },
        ];
      } else if (buyButtonId === "4") {
        links = [
          {
            href: "https://www.hp.com/gb-en/shop/product.aspx?id=8J272EA&opt=ABU&sel=NTB&source=google&channel=cpc&adcampaign=OLS-UK-PS-Lap-Goo-SEM-DSA&addisttype=g&kw=&adid=641438164013&infinity=ict2~net~gaw~cmp~OLS-UK-PS-Lap-Goo-SEM-DSA~ag~HP-GSC-DSA-Laptops-Feeds~ar~641438164013~kw~~mt~&gad_source=1&gclid=Cj0KCQjw_-GxBhC1ARIsADGgDju8j87ICexq_XlEIdGMR_h1NxB6GR7YEvIr1vSPef8N_QMFgzndQD0aAuONEALw_wcB&gclsrc=aw.ds",
            text: "HP's Official Website - £1029",
          },
          {
            href: "https://www.tekshop.co.uk/7z874ea-hp-envy-17-cw0500sa-17-3-laptop-171175-c",
            text: "TekShop's Official Website - £899",
          },
          {
            href: "https://www.currys.co.uk/products/hp-envy-17cw0500na-17.3-laptop-intel-core-i7-512-gb-ssd-silver-10249258.html",
            text: "Curry's Official Website - £1099",
          },
        ];
      } else if (buyButtonId === "5") {
        links = [
          {
            href: "https://www.hp.com/gb-en/shop/product.aspx?id=8U795EA&opt=ABU&sel=NTB",
            text: "HP's Official Website - £609",
          },
          {
            href: "https://www.tekshop.co.uk/8a6m0ea-hp-15s-fq4577sa-fhd-laptop-intel-i7-171360-c",
            text: "TekShop's Official Website - £459",
          },
          {
            href: "https://www.currys.co.uk/products/hp-15sfq5505sa-15.6-laptop-intel-core-i7-512-gb-ssd-silver-10254499.html",
            text: "Curry's Official Website - £729",
          },
        ];
      } else if (buyButtonId === "6") {
        links = [
          {
            href: "https://www.hp.com/gb-en/shop/product.aspx?id=6T9P9EA&opt=ABU&sel=NTB",
            text: "HP's Official Website - £159",
          },
          {
            href: "https://www.amazon.co.uk/HP-11-ak0028sa-Microsoft-Personal-Included/dp/B09P3YLHDH/ref=sr_1_3_mod_primary_new?dib=eyJ2IjoiMSJ9.Lsy-lk_rwbeqoAElBeNuoz63vTGtd8H1Aek2hQzq7SL_hFdfUJ416QYn96P2Xhm70znMv6jBE9wqBCn08rz5NepVJZsv-yXhW52f7D9gZGBrr51qM4ruOQL8Bjmti3EjYMqjJJ3jrqK8E28PXEFP4oUkC5i7XUqx8wx46YgNr_81T_3eLhB9Z_c7hlorRDZ8CPRHo5O3FdsU0MEm5q0g_Hi8OnxIYvALznbgqGLbACw.wbSeXRPsQijw0vFAQXkOuOsjFfkN8wvQKkEt6ijXzZI&dib_tag=se&keywords=hp+stream+11&qid=1715026533&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=8-3",
            text: "HP on Amazon.com - £164",
          },
          {
            href: "https://www.currys.co.uk/products/hp-stream-11ak0515sa-11-laptop-intel-celeron-64-gb-emmc-white-10235996.html",
            text: "Curry's Official Website - £169",
          },
        ];
      } else if (buyButtonId === "7") {
        links = [
          {
            href: "https://www.microsoft.com/en-gb/d/surface-laptop-studio-2/8rqr54krf1dz",
            text: "Microsoft's Official Website - £ Customisable",
          },
          {
            href: "https://www.amazon.co.uk/Microsoft-Surface-Touchscreen-Platinum-Windows/dp/B0CF21L7LZ/ref=sr_1_3?crid=1JOITMICN4L6X&dib=eyJ2IjoiMSJ9.eVVg7T0kn7yNXvu4XElJmZeGb0sV4DVxWX_EUu5hpbJTuycE1a1D_HNX_5CwwpLhWvd3KRB7a-ek7b0EOyDkE6BuKODbRe669i-vklSQkO587a2v1mE3vjvaeG4am4wVhut92pJZRYOrL2C8Bpro3eR3k6d6BJk4dwMla-kwY0OlTyY2BXr3ieCuag6P-pNJ7kmjSPnSIN2S6i80njZDs0pJThD7ryH4dB_OzzmAN-k.NsUZX1hYc9M5h2eAZx-XZ2hfJSuDvvciVsFc2JoiufI&dib_tag=se&keywords=MICROSOFT+14.4%22+Surface+Laptop+Studio+2&qid=1715188713&sprefix=microsoft+14.4+surface+laptop+studio+2%2Caps%2C108&sr=8-3",
            text: "Amazon's Official Website - £2149",
          },
          {
            href: "https://www.currys.co.uk/products/microsoft-14.4-surface-laptop-studio-2-intel-core-i7-512-gb-ssd-platinum-10254572.html",
            text: "Curry's Official Website - £2069",
          },
        ];
      } else if (buyButtonId === "8") {
        links = [
          {
            href: "https://www.microsoft.com/en-gb/d/surface-laptop-5/8xn49v61s1bn?activetab=pivot:overviewtab",
            text: "Microsoft's Official Website - £ Customisable",
          },
          {
            href: "https://www.amazon.co.uk/dp/B0B9NZ4KMK/ref=twister_B0C6YQ2XJQ?_encoding=UTF8&psc=1",
            text: "Microsoft on Amazon.com - £949",
          },
          {
            href: "https://www.currys.co.uk/products/microsoft-13.5-surface-laptop-5-intel-core-i5-256-gb-ssd-platinum-10242788.html",
            text: "Curry's Official Website - £799",
          },
        ];
      } else if (buyButtonId === "9") {
        links = [
          {
            href: "https://www.microsoft.com/en-gb/d/surface-laptop-go-3/8p0wwgj6c6l2",
            text: "Microsoft's Official Website - £ Customisable",
          },
          {
            href: "https://www.amazon.co.uk/Microsoft-Surface-Ultra-Thin-Touchscreen-Platinum/dp/B0CF25J5LS?ref_=ast_sto_dp&th=1&psc=1",
            text: "Microsoft on Amazon.com - £749",
          },
          {
            href: "https://www.currys.co.uk/products/microsoft-12.4-surface-laptop-go-3-intel-core-i5-256-gb-ssd-sandstone-10254576.html",
            text: "Curry's Official Website - £799",
          },
        ];
      } else if (buyButtonId === "10") {
        links = [
          {
            href: "https://www.samsung.com/uk/computers/galaxy-book/galaxy-book4-ultra-16-inch-i9-32gb-1tb-np960xgl-xg3uk/",
            text: "Samsung's Official Website - £3549",
          },
          {
            href: "https://www.amazon.co.uk/Samsung-Galaxy-Book4-Laptop-Moonstone/dp/B0CS6P4QC8/ref=pd_lpo_sccl_1/260-4233173-6356028?pd_rd_w=oOIPy&content-id=amzn1.sym.448aab69-6fff-42b9-9d7a-f6325052a6f6&pf_rd_p=448aab69-6fff-42b9-9d7a-f6325052a6f6&pf_rd_r=12WG2RGZ40M0QY5XSQ50&pd_rd_wg=6UKtK&pd_rd_r=df383599-283e-4188-bb9a-0edcd78ffafa&pd_rd_i=B0CS6P4QC8&psc=1",
            text: "Samsung on Amazon.com - £3149",
          },
          {
            href: "https://www.currys.co.uk/products/samsung-galaxy-book4-ultra-16-laptop-intel-core-ultra-9-1-tb-ssd-grey-10260000.html",
            text: "Curry's Official Website - £3149",
          },
        ];
      } else if (buyButtonId === "11") {
        links = [
          {
            href: "https://www.samsung.com/uk/computers/galaxy-book/galaxy-book4-15-6-inch-i7-8gb-512gb-np750xgk-kg1uk/",
            text: "Samsung's Official Website - £949",
          },
          {
            href: "https://www.amazon.co.uk/Samsung-Galaxy-Book4-Laptop-Intel/dp/B0CS6PZ25L",
            text: "Samsung on Amazon.com - £1191",
          },
          {
            href: "https://www.currys.co.uk/products/samsung-galaxy-book4-360-15.6-2-in-1-laptop-intel-core-7-512-gb-ssd-grey-10260224.html",
            text: "Curry's Official Website - £1499",
          },
        ];
      } else if (buyButtonId === "12") {
        links = [
          {
            href: "https://www.argos.co.uk/product/3363555",
            text: "Argos's Official Website - £399",
          },
          {
            href: "https://www.amazon.co.uk/Samsung-Galaxy-Snapdragon-Storage-Windows/dp/B0BSLL2TL9",
            text: "Samsung on Amazon.com - £337",
          },
          {
            href: "https://www.currys.co.uk/products/samsung-galaxy-book-2-go-14-laptop-snapdragon-7c-gen-3-128-gb-ssd-silver-10251773.html",
            text: "Curry's Official Website - £479",
          },
        ];
      }

      // Buy button event listeners
      button.addEventListener("click", function (event) {
        handleBuyButtonClick(event, button, links);
      });
    });
  }
  initializeBuyButtons();

  // Side Nav event listener for closing all pop-ups after being clicked
  const sidenav = document.querySelector(".sidenav");
  if (sidenav) {
    sidenav.addEventListener("click", function (event) {
      closeAllPopUps();
    });
  }
  // Function to close all pop-ups
  function closeAllPopUps() {
    const popUps = document.querySelectorAll(".price-popup");
    popUps.forEach(function (popUp) {
      popUp.remove();
    });
  }
});

// Function to create the pop-up and position it relative to the button
function createPopUp(button, links) {
  const popUp = document.createElement("div");
  popUp.classList.add("price-popup");

  // Create the pop-up content with the injected hyperlinks
  let content = `
      <div class="popup-content">
          <p><u>Sold on these websites:<u/></p>
          <ul style="list-style: none; padding: 0; margin: 0;">`;

  links.forEach((link) => {
    content += `
              <li><a href="${link.href}" target="_blank">${link.text}</a></li>
      `;
  });
  content += `
          </ul>
      </div>
  `;
  popUp.innerHTML = content;
  const buttonRect = button.getBoundingClientRect();
  popUp.style.position = "absolute";
  document.body.appendChild(popUp);
  const popUpWidth = popUp.offsetWidth;
  popUp.style.top = `${buttonRect.top + window.scrollY}px`;
  let leftPosition = buttonRect.left + window.scrollX - popUpWidth;
  if (leftPosition < 0) {
    leftPosition = buttonRect.right + window.scrollX;
  }
  popUp.style.left = `${leftPosition}px`;

  popUp.addEventListener("click", function (event) {
    event.stopPropagation();
  });
  document.body.appendChild(popUp);
  return popUp;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LAPTOP HELPER BOT SCRIPTS
// Functions to open and close the modal and overlay
function openModal() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}
let currentLaptopIndex = 0;
let filteredLaptops = [];

// Function to find the recommended laptop based on user inputs
function findPerfectLaptop() {
  // Attributes of the laptops
  const laptops = [
    {
      name: 'ACER Swift X 16" Laptop',
      brand: "Acer",
      price: 1499,
      ram: 32,
      screenSize: 16,
      imageSrc: "images/Laptopimg1.jpg",
    },
    {
      name: 'ACER Aspire 5 14" Laptop',
      brand: "Acer",
      price: 699,
      ram: 16,
      screenSize: 14,
      imageSrc: "images/Laptopimg3.jpg",
    },
    {
      name: 'ACER Aspire 1 14" Laptop',
      brand: "Acer",
      price: 189,
      ram: 4,
      screenSize: 14,
      imageSrc: "images/Laptopimg2.jpg",
    },
    {
      name: 'HP ENVY 17 17.3" Laptop',
      brand: "HP",
      price: 1379,
      ram: 16,
      screenSize: 17.3,
      imageSrc: "images/Laptopimg4.jpg",
    },
    {
      name: 'HP 15s 15.6" Laptop',
      brand: "HP",
      price: 720,
      ram: 8,
      screenSize: 15.6,
      imageSrc: "images/Laptopimg5.jpg",
    },
    {
      name: 'HP Stream 11 11" Laptop',
      brand: "HP",
      price: 169,
      ram: 4,
      screenSize: 11,
      imageSrc: "images/Laptopimg6.jpg",
    },
    {
      name: 'MICROSOFT 14.4" Surface Laptop Studio 2',
      brand: "Microsoft",
      price: 3669,
      ram: 32,
      screenSize: 14.4,
      imageSrc: "images/Laptopimg9.jpg",
    },
    {
      name: 'MICROSOFT 13.5" Surface Laptop 5',
      brand: "Microsoft",
      price: 1279,
      ram: 16,
      screenSize: 13.5,
      imageSrc: "images/Laptopimg7.jpg",
    },
    {
      name: 'MICROSOFT 12.4" Surface Laptop Go 3',
      brand: "Microsoft",
      price: 799,
      ram: 8,
      screenSize: 12.4,
      imageSrc: "images/Laptopimg10.jpg",
    },
    {
      name: 'SAMSUNG Galaxy Book 4 Ultra 16" Laptop',
      brand: "Samsung",
      price: 3149,
      ram: 32,
      screenSize: 16,
      imageSrc: "images/Laptopimg11.jpg",
    },
    {
      name: 'SAMSUNG Galaxy Book 2 Go 14" Laptop',
      brand: "Samsung",
      price: 479,
      ram: 4,
      screenSize: 14,
      imageSrc: "images/Laptopimg12.jpg",
    },
    {
      name: 'SAMSUNG Galaxy Book 4 15.6" Laptop',
      brand: "Samsung",
      price: 849,
      ram: 8,
      screenSize: 15.6,
      imageSrc: "images/Laptopimg13.jpg",
    },
  ];

  const priceRange = document.getElementById("priceRange").value;
  const preferredBrand = document.getElementById("brand").value.toLowerCase();
  const usage = document.getElementById("usage").value.toLowerCase();

  // Function for filtering laptops by price
  filteredLaptops = laptops.filter((laptop) => {
    let matchesPrice = false;
    if (priceRange === "0-499") {
      matchesPrice = laptop.price <= 499;
    } else if (priceRange === "500-999") {
      matchesPrice = laptop.price >= 500 && laptop.price <= 999;
    } else if (priceRange === "1000+") {
      // Not working for unknown reason....
      matchesPrice = laptop.price >= 1000 && laptop.price <= 4000;
    } else if (priceRange === "dont mind/care") {
      matchesPrice = true;
    }

    let matchesBrand =
      laptop.brand.toLowerCase() === preferredBrand ||
      preferredBrand === "dont mind/care";
    // Function for filtering laptops by usage
    let matchesUsage = true;
    if (usage === "gaming") {
      matchesUsage = laptop.ram >= 8;
    } else if (usage === "working") {
      matchesUsage = laptop.price >= 400;
    } else if (usage === "watching") {
      matchesUsage = laptop.screenSize > 14.3;
    }

    return matchesPrice && matchesBrand && matchesUsage;
  });

  // Function for displaying the recommended laptop
  if (filteredLaptops.length > 0) {
    displayLaptop(currentLaptopIndex);
  } else {
    document.getElementById("result").innerHTML =
      "No specific recommendation available. Please adjust your selections.";
  }
}

// Function to display the recommended laptop at the given index
function displayLaptop(index) {
  const laptop = filteredLaptops[index];
  document.getElementById("result").innerHTML = `
    <div class="result-container">
      <strong class="result-title">Recommended Laptop:</strong>
      <span class="result-text">${laptop.name}</span>
      <br>
      <img class="result-img" src="${laptop.imageSrc}" alt="${laptop.name}">
    </div>
    <div class="navigation-buttons">
      <button onclick="nextLaptop()">Next</button>
    </div>
  `;
}
// Function to display the next laptop with button
function nextLaptop() {
  currentLaptopIndex++;
  if (currentLaptopIndex >= filteredLaptops.length) {
    currentLaptopIndex = 0;
  }
  displayLaptop(currentLaptopIndex);
}
//COMPLETED
// Function for Side Nav Dynamic dropdown
const dropdownButtons = document.getElementsByClassName("dropdown-btn");
for (let i = 0; i < dropdownButtons.length; i++) {
  dropdownButtons[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Function to position and adjust the sidenav
  function positionSidenav() {
    const sidenav = document.querySelector(".sidenav");
    const subnav = document.querySelector(".subnav");
    const gridContainer = document.querySelector(".grid-container");
    // Works by calculating the top of the Sub Nav and bottom of the Grid Container
    if (sidenav && subnav && gridContainer) {
      const subnavBottom =
        subnav.getBoundingClientRect().bottom + window.scrollY;
      const gridContainerBottom =
        gridContainer.getBoundingClientRect().bottom + window.scrollY;
      sidenav.style.position = "absolute";
      sidenav.style.top = `${subnavBottom}px`;
      const sidenavHeight = gridContainerBottom - subnavBottom;
      sidenav.style.height = `${sidenavHeight}px`;
    }
  }
  positionSidenav();
  window.addEventListener("resize", positionSidenav);
  window.addEventListener("scroll", positionSidenav);
});

//COMPLETED
// Function to filter Grid Container by brand
function handleBrandFilter(event) {
  event.preventDefault();
  const selectedBrand = event.target.dataset.brand.toLowerCase();
  const gridContainer = document.querySelector(".grid-container");
  const gridItems = Array.from(gridContainer.children);

  const matchingItems = [];
  const otherItems = [];

  gridItems.forEach((item) => {
    const laptopTitle = item
      .querySelector(".laptoptitle")
      .textContent.toLowerCase();
    if (laptopTitle.includes(selectedBrand)) {
      matchingItems.push(item);
    } else {
      otherItems.push(item);
    }
  });
  gridContainer.innerHTML = "";
  matchingItems.forEach((item) => gridContainer.appendChild(item));
  otherItems.forEach((item) => gridContainer.appendChild(item));
}

const brandOptions = document.querySelectorAll(
  ".dropdown-container a[data-brand]"
);
brandOptions.forEach((option) => {
  option.addEventListener("click", handleBrandFilter);
});

//COMPLETED
// Function to filter Grid Container by price
function sortByPrice(sortDirection) {
  const gridContainer = document.querySelector(".grid-container");
  const gridItems = Array.from(gridContainer.children);

  gridItems.sort((a, b) => {
    const buyButtonA = a.querySelector(".buyButton");
    const buyButtonB = b.querySelector(".buyButton");
    const priceA = parseFloat(buyButtonA.textContent.replace(/[^0-9.]/g, ""));
    const priceB = parseFloat(buyButtonB.textContent.replace(/[^0-9.]/g, ""));

    if (sortDirection === "desc") {
      return priceB - priceA;
    } else {
      return priceA - priceB;
    }
  });
  gridContainer.innerHTML = "";
  gridItems.forEach((item) => {
    gridContainer.appendChild(item);
  });
}
const sortOptions = document.querySelectorAll(
  '.dropdown-container a[data-sort-by="price"]'
);

sortOptions.forEach((option) => {
  option.addEventListener("click", function (event) {
    event.preventDefault();
    const sortDirection = this.dataset.sortDirection;
    sortByPrice(sortDirection);
  });
});

//RATINGS SCRIPT
// Function to filter Grid Container by rating
function sortByRatings() {
  const gridContainer = document.querySelector(".grid-container");
  const gridItems = Array.from(gridContainer.children);

  gridItems.sort((a, b) => {
    const ratingElementA = a.querySelector(".ratings");
    const ratingElementB = b.querySelector(".ratings");
    const ratingA = parseFloat(
      ratingElementA.textContent.replace(/[^\d.]/g, "")
    );
    const ratingB = parseFloat(
      ratingElementB.textContent.replace(/[^\d.]/g, "")
    );
    return ratingB - ratingA;
  });
  gridContainer.innerHTML = "";
  gridItems.forEach((item) => {
    gridContainer.appendChild(item);
  });
}
const ratingsButton = document.querySelector(
  'a[data-sort-by="rating"][data-sort-direction="desc"]'
);
ratingsButton.addEventListener("click", function (event) {
  event.preventDefault();
  sortByRatings();
});

//REVIEW SCRIPT
// Function to filter Grid Container by popularity
function sortByReviews() {
  const gridContainer = document.querySelector(".grid-container");
  const gridItems = Array.from(gridContainer.children);
  gridItems.sort((a, b) => {
    const reviewsA = parseInt(
      a.querySelector(".reviews").textContent.replace(/[^\d]/g, ""),
      10
    );
    const reviewsB = parseInt(
      b.querySelector(".reviews").textContent.replace(/[^\d]/g, ""),
      10
    );
    return reviewsB - reviewsA;
  });
  gridContainer.innerHTML = "";
  gridItems.forEach((item) => gridContainer.appendChild(item));
}
const reviewsOption = document.querySelector(
  '.dropdown-container a[data-sort-by="reviews"]'
);
if (reviewsOption) {
  reviewsOption.addEventListener("click", function (event) {
    event.preventDefault();
    sortByReviews();
  });
}

//LOG IN SCRIPTS
function toggleLoginForm() {
  var loginFormWrapper = document.getElementById("loginFormWrapper");
  if (loginFormWrapper.style.display === "block") {
    loginFormWrapper.style.display = "none";
  } else {
    loginFormWrapper.style.display = "block";
  }
}

function toggleCreateAccountForm() {
  var createAccountForm = document.getElementById("createAccountForm");
  if (createAccountForm.style.display === "block") {
    createAccountForm.style.display = "none";
  } else {
    createAccountForm.style.display = "block";
  }
}

function showCreateAccountForm() {
  toggleLoginForm(); //
  toggleCreateAccountForm();
}

function validateLoginForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  //Client-side validation for preventing SQL injection
  if (username.trim() === "" || password.trim() === "") {
    alert("Please enter both username and password.");
    return false;
  }

  return true;
}

// Never finished
// Function to display the welcome pop-up with the username when returning to site
function showWelcomePopup() {
  const username = getUsernameFromURL();
  if (username) {
    const welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.textContent = "Welcome back, " + username + "!";
    const welcomePopup = document.getElementById("welcomePopup");
    welcomePopup.style.display = "block";
  }
}
function closeWelcomePopup() {
  const welcomePopup = document.getElementById("welcomePopup");
  welcomePopup.style.display = "none";
}
