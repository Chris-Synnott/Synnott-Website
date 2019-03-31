
let firstTime = true;
let currentFilterId = null;

var obj = {
    'projects': [{
            "title": "2048 A.I Player",
            "type": "ai",
            "imgSrc": "./images/cseHubEx.png",
            "description": "pa1 description",
            "url": "https://www.google.com/",
        }, {
            "title": "CSE HUB",
            "type": "web",
            "imgSrc": "./images/cseHubEx.png",
            "description": "pa2 description",
            "url": "http://csehub.xyz/"
        },{
            "title": "Gomoku A.I",
            "type": "ai",
            "imgSrc": "./images/cseHubEx.png",
            "description": "pa2 description",
            "url": "https://www.google.com/"
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

        newModal = `<div class="modal fade" id="project-${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">${array[i].title}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            ${array[i].description} 
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
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
    } else {
        nav.classList.remove("navStylesAfter");
        nav.classList.add("navStylesBefore");
    }
}
