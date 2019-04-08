
let firstTime = true;
let currentFilterId = null;

var obj = {
    'projects': [{
            "title": "2048 A.I.",
            "type": "ai",
            "imgSrc": "./images/cseHubEx.png",
            "imgSrcList": ["./images/cseHubEx.png","./images/chris-synnott-profile.jpeg","./images/testPic.jpg"],
            "imgSrcListAttributes": ["text1","text2","text"],
            "description": "A 2048 pygame solver, using artificial intelligence (Monte Carlo Search) and other various heuristics (weighted corners etc..). Scoring high consistently, reaching 2048 tiles often and sometimes reaching 4096 tiles.",
            "languages": ["Python3"],
            "topics": ["Monte Carlo Search"],
            "url": "https://www.google.com/",
        }, {
            "title": "CSE HUB",
            "type": "web",
            "imgSrc": "./images/cseHubEx.png",
            "imgSrcList": ["./images/cseHubEx.png","./images/cseHubEx.png","./images/cseHubEx.png"],
            "imgSrcListAttributes": ["text1","text2","text"],
            "description": "A 2048 pygame solver, using artificial intelligence (Monte Carlo Search) and other various heuristics (weighted corners etc..). Scoring high consistently, reaching 2048 tiles often and sometimes reaching 4096 tiles.",
            "languages": ["Python3"],
            "topics": ["Monte Carlo Search"],
            "url": "https://www.google.com/",
        },{
            "title": "Gomoku A.I",
            "type": "ai",
            "imgSrc": "./images/cseHubEx.png",
            "imgSrcList": ["./images/cseHubEx.png","./images/cseHubEx.png","./images/cseHubEx.png"],
            "imgSrcListAttributes": ["text1","text2","text"],
            "description": "A 2048 pygame solver, using artificial intelligence (Monte Carlo Search) and other various heuristics (weighted corners etc..). Scoring high consistently, reaching 2048 tiles often and sometimes reaching 4096 tiles.",
            "languages": ["Python3"],
            "topics": ["Monte Carlo Search"],
            "url": "https://www.google.com/",
        },
    ]
};

//web array
var webArray = obj.projects.filter(function (pr) {
    return pr.type == 'web'
  });


var allArray = obj.projects.filter(function (pr) {
    return obj
  });


var osArray = obj.projects.filter(function (pr) {
    return pr.type == 'os'
  });


var aiArray = obj.projects.filter(function (pr) {
  return pr.type == 'ai'
});

window.onload = (function () {
    //set default filter to "All projects"
    currentFilterId = document.getElementById("showAllProjects");

   
    //Web Filter
    var webFilter = document.getElementById("showWebProjects");
    //add listener
    webFilter.addEventListener("click",function() {
        currentFilterId.classList.remove("currentFilter");
        webFilter.classList.add("currentFilter");
        currentFilterId = webFilter;
          displayProjects(webArray)
    });
    
    //A.I Fiter
    var aiFilter = document.getElementById("showAiProjects");
    //add listener
    aiFilter.addEventListener("click",function() {
        currentFilterId.classList.remove("currentFilter");
        aiFilter.classList.add("currentFilter");
        currentFilterId = aiFilter;
          displayProjects(aiArray)
    });

    //Operating Systems Filter
    var osFilter = document.getElementById("showOsProjects");
    //add listener
    osFilter.addEventListener("click",function() {
        currentFilterId.classList.remove("currentFilter");
        osFilter.classList.add("currentFilter");
        currentFilterId = osFilter;
    displayProjects(osArray)
    });

    //All Filter
    var allFilter = document.getElementById("showAllProjects");
    //add listener
    allFilter.addEventListener("click",function() {
        currentFilterId.classList.remove("currentFilter");
        allFilter.classList.add("currentFilter");
        currentFilterId = allFilter;
        displayProjects(allArray)
    });
displayProjects(allArray);


//thumbnails projects
document.body.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('modal-img-thumb')){
      console.log(evt.target.src);
      for(k = 0; k < evt.target.parentNode.children.length;k++){
        evt.target.parentNode.children[k].classList.remove("modal-active");
      } 
      evt.target.classList.add("modal-active");
      //get main modal img
      let mainModalImg = evt.target.parentNode.parentNode.parentNode.children[0].children[0].children[0];
      //update thumbnail image to main modal
      mainModalImg.src = evt.target.src;
      console.log(evt.target.parentNode.parentNode.parentNode.children[0].children[0].children[0]);
  }
}, false);



function displayProjects(array){
    console.log("Calling displayProjects")
    //topProject = `<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 mobile-no-padding"><a href="#"><div class="card"> <div class="card-header"><h2>`;
    //midProject = `</h2></div><div class="card-body"><p>`
    //botProject = `</p></div> <div class="card-bottom"><a href="#" rel="noopener">View</a></div></div> </a> </div>`
    code = ""
    modalCode = ""
    for (i = 0; i < array.length; i++){
        console.log(array[i])
        //newProject = topProject + array[i].project_title + midProject + array[i].description + botProject;
        newProject = `<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 mobile-no-padding">
        <a href="#project-${i}" data-toggle="modal" data-target="#project-${i}">
        <div class="card"> 
        <div class="card-header">
        <h2> ${array[i].title} </h2>
        </div><div class="card-body">
        <img class="card-img" src="${array[i].imgSrc}"></div> 
        <div class="card-bottom"><a href="#" rel="noopener">Learn More</a></div>
        </div> </a> </div>`

        console.log(array[i].imgSrcList.length)
        let thumbNailImgs = "";
        for(j =0; j < array[i].imgSrcList.length; j++){
            if (j ==0){
              thumbNailImgs += `<img class="modal-img-thumb modal-active" src="${array[i].imgSrcList[j]}"></img>`;
            }
            else{
            thumbNailImgs += `<img class="modal-img-thumb" src="${array[i].imgSrcList[j]}"></img>`;
            }
        }


        let algos = "";
        for(j=0; j < array[i].topics.length; j++){
            if(j == 0){
              algos += `<div class="modal-lists">Algorithms</div><ul>`; 
            }
            algos += `<li>${array[i].topics[j]}</li>`
        }
        if(algos != ""){
            algos += "</ul>";
        }


        let languagesTools = "";
        for(j=0; j < array[i].languages.length; j++){
            if(j == 0){
              languagesTools += `<div class="modal-lists">Languages/Tools</div><ul>`; 
            }
            languagesTools += `<li>${array[i].languages[j]}</li>`
        }
        if(algos != ""){
            languagesTools += "</ul>";
        }


        newModal = `<div class="modal fade" id="project-${i}" tabindex="-1" role="dialog" aria-labelledby="${array[i].title}" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
             
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <div class="row">
               <div class="col-7">

               <div class="row">
               <div class="col-12"><img class="modal-img" src="${array[i].imgSrc}"></div>
               </div>

               <div class="row">
               <div class="col-12">${thumbNailImgs}</div>
               </div>
               
               </div>
               <div class="col-5">
                   <div class="row">
                   <div class="col-12"><h3 class="modal-title">${array[i].title}</h3></div>
                   </div>

                   <div class="row">
                   <div class="col-12">${array[i].description}</div>
                   </div>

                   <div class="row">
                   <div class="col-6">${algos}</div>
                   <div class="col-6">${languagesTools}</div>
                   </div>

                   <div class="row">
                   <div class="col-12"><button type="button" class="btn btn-secondary" href="#contact" data-dismiss="modal">Contact</button></div>
                   </div>
                   
                </div>
             </div>
            </div>
          </div>
        </div>
      </div>`

        code += newProject;
        modalCode += newModal;
    }
    //document.getElementById("projects").innerHTML = ''; 
    document.getElementById("projects").innerHTML = code;
    document.getElementById("modals-section").innerHTML = modalCode;
}


//-------Contact Form------
//get name input element
var nameField = document.getElementById("validate-name");
//add listener
nameField.addEventListener("input",function() {
    console.log(this.value.length);
    if(this.value.length != 0){
       nameField.classList.remove("is-invalid");
       nameField.classList.add("is-valid");
       var correctName = document.getElementById('valid-name');
       correctName.innerHTML = this.value;
    }
    else{
      nameField.classList.remove("is-valid");
      nameField.classList.add("is-invalid"); 
    }

});


//get email input element
var emailField = document.getElementById("validate-email");
//add listener
emailField.addEventListener("input",function() {
    console.log(this.value.length);
    var atSymbol = this.value.includes("@");
    var dot = this.value.includes(".");

    if(this.value.length != 0 && atSymbol && dot){
       emailField.classList.remove("is-invalid");
       emailField.classList.add("is-valid");
    }
    else{
      emailField.classList.remove("is-valid");
      emailField.classList.add("is-invalid"); 
    }
});



//get message title input element
var titleField = document.getElementById("validate-title");
//add listener
titleField.addEventListener("input",function() {
    console.log(this.value.length);
    if(this.value.length != 0){
       titleField.classList.remove("is-invalid");
       titleField.classList.add("is-valid");
    }
    else{
      titleField.classList.remove("is-valid");
      titleField.classList.add("is-invalid"); 
    }
});


//get message body input element
var bodyField = document.getElementById("validate-body");
//add listener
bodyField.addEventListener("input",function() {
    console.log(this.value.length);
    if(this.value.length != 0){
       bodyField.classList.remove("is-invalid");
       bodyField.classList.add("is-valid");
    }
    else{
      bodyField.classList.remove("is-valid");
      bodyField.classList.add("is-invalid"); 
    }
});



});







//scroll navbar
window.onscroll = function() {
    console.log("In scroll")
    var nav = document.getElementById('nav-main');
    if(window.pageYOffset > 5 && firstTime == true){
        firstTime = false;
        nav.classList.remove("hide");
    }

    if ( window.pageYOffset > 727 ) {
        nav.classList.remove("navStylesBefore");
        nav.classList.add("navStylesAfter");
        nav.classList.remove("navWhite");
        nav.classList.add("navBlue");
    } else {
        nav.classList.remove("navStylesAfter");
        nav.classList.add("navStylesBefore");
        nav.classList.remove("navBlue");
        nav.classList.add("navWhite");
    }
}
