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
if(!i.name.includes("rgcienfuegos") ){
    
    counter = counter + 1;

    let repoHTML = `
     <h2 id='nameRepo` + counter + `'></h2>
     <p id='descRepo` + counter + `'></p>
     <p>
       <a id='butRepoDet` + counter + `' class="btn btn-secondary" href="#" role="button">Mas info&raquo;</a>
       <a id='butRepoDem` + counter + `' class="btn btn-secondary" href="https://rgcienfuegos.github.io/` + i.name + `//" role="button">Link demo &raquo;</a>
     </p>
     `
         let div = document.createElement("div");

    div.innerHTML = repoHTML;
    div.className = "col-md-4";

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
function test(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();




    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
   
    });

    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }
  $(document).ready(function(){
    setTimeout(function(){ test(); });
  });
  $(window).on('resize', function(){
    setTimeout(function(){ test(); }, 500);
  });
  $(".navbar-toggler").click(function(){
    setTimeout(function(){ test(); });
  });

