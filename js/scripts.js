const projectName = 'portfolio';

function clear() {
  while (divResult.firstChild)
    divResult.removeChild(divResult.firstChild)
}
async function getRepos() {
  clear();
  const url = "https://api.github.com/users/rgcienfuegos/repos"
  const response = await fetch(url)
  const result = await response.json()
  let counter = 0;

  result.forEach(i => {
    if (!i.name.includes("rgcienfuegos")&& i.description && !i.description.includes("freeCodeCamp")  && !i.fork && !i.private) {
      counter = counter + 1;
      let repoHTML = `
     <h2 id='nameRepo` + counter + `'></h2>
     <p id='descRepo` + counter + `'></p>
    
     <p class="project-title">
       <a id='butRepoDem` + counter + `' class="btn " href="https://rgcienfuegos.github.io/` + i.name + `//" role="button">Link &raquo;</a>
     </p>
     `
      let div = document.createElement("div");

      div.innerHTML = repoHTML;
      div.className = "project";

      divResult.appendChild(div)
      let nameRepo = document.getElementById("nameRepo" + counter);
      nameRepo.href = i.html_url;
      nameRepo.textContent = i.name;
      let desRepo = document.getElementById("descRepo" + counter);
      desRepo.textContent = i.description;
    }
  })
}

// ---------Responsive-navbar-active-animation-----------
function test() {
  let tabsNewAnim = $('#navbarSupportedContent');
  let selectorNewAnim = $('#navbarSupportedContent').find('li').length;
  let activeItemNewAnim = tabsNewAnim.find('.active');
  let activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
  let activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  let itemPosNewAnimTop = activeItemNewAnim.position();
  let itemPosNewAnimLeft = activeItemNewAnim.position();
  let itemText = $(this).first().text();
  let itemColor;
  if (itemText.includes("Proyectos") || itemText.includes("Referencias")) {
    itemColor = "var(--main-gray2)";
  } else {
    itemColor = "var(--main-gray)";
  }


  $(".hori-selector").css({
    "top": itemPosNewAnimTop.top + "px",
    "left": itemPosNewAnimLeft.left + "px",
    "height": activeWidthNewAnimHeight + "px",
    "width": activeWidthNewAnimWidth + "px",
    "background-color": itemColor
  });


  $(".hori-selector .right").css({
    "background-color": itemColor
  });
  $(".hori-selector .left").css({
    "background-color": itemColor
  });

  $("#navbarSupportedContent").on("click", "li", function (e) {
    $('#navbarSupportedContent ul li').removeClass("active");
    $(this).addClass('active');
    let activeWidthNewAnimHeight = $(this).innerHeight();
    let activeWidthNewAnimWidth = $(this).innerWidth();
    let itemPosNewAnimTop = $(this).position();
    let itemPosNewAnimLeft = $(this).position();
    let itemText = $(this).first().text();
    let itemColor;
    if (itemText.includes("Proyectos") || itemText.includes("Referencias")) {
      itemColor = "var(--main-gray2)";
    } else {
      itemColor = "var(--main-gray)";
    }

    $(".hori-selector").css({
      "top": itemPosNewAnimTop.top + "px",
      "left": itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px",
      "background-color": itemColor

    });

    $(".hori-selector .right").css({
      "background-color": itemColor
    });
    $(".hori-selector .left").css({
      "background-color": itemColor
    });


  });
}
$(document).ready(function () {
  setTimeout(function () {
    test();
  });
  getRepos();
});
$(window).on('resize', function () {
  setTimeout(function () {
    test();
  }, 500);
});
$(".navbar-toggler").click(function () {
  setTimeout(function () {
    test();
  });
});