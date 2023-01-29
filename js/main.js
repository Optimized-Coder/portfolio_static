menuToggle = document.getElementById("menu-toggle");
mainNav = document.getElementById("main-nav");
socialNav = document.getElementById("social-nav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
  if (mainNav.classList.contains("active")) {
    mainNav.style.display = "flex";
    mainNav.style.flexDirection = "column"
    mainNav.style.width = "100vw";
    mainNav.style.textAlign = "center";
  } else {
    mainNav.style.display = "none";
  }
});
menuToggle.addEventListener("click", () => {
  socialNav.classList.toggle("active");
  if (socialNav.classList.contains("active")) {
    socialNav.style.display = "flex";
    socialNav.style.flexDirection = "column"
    socialNav.style.width = "100%";
    socialNav.style.textAlign = "center";
  } else {
    socialNav.style.display = "none";
  }
});

function openTab(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("default-open").click();

