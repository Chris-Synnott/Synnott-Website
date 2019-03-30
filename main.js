

var obj = {
    'projects': [{
            "project_title": "pa1",
            "type": "ai",
            "description": "pa1 description",
            "url": "2",
        }, {
            "project_title": "pa2",
            "type": "os",
            "description": "pa2 description",
            "url": "2"
        },
    ]
};


var allArray = obj.projects.filter(function (pr) {
    return obj
  });

console.log("All Array:");
console.log(allArray);

var osArray = obj.projects.filter(function (pr) {
    return pr.type == 'os'
  });

console.log("OS Array:");  
console.log(osArray);

var aiArray = obj.projects.filter(function (pr) {
  return pr.type == 'ai'
});
console.log("Ai Array:");
console.log(aiArray);

window.onload = (function () {
    var aiFilter = document.getElementById("showAiProjects");
    console.log(aiFilter);
    aiFilter.addEventListener("click",function() {
          displayProjects(aiArray)
    });

    var osFilter = document.getElementById("showOsProjects");
    console.log(osFilter);
    osFilter.addEventListener("click",function() {
    displayProjects(osArray)
    });

    var allFilter = document.getElementById("showAllProjects");
    console.log(allFilter);
    allFilter.addEventListener("click",function() {
    displayProjects(allArray)
    });



function displayProjects(array){
    console.log("Calling displayProjects")
    topProject = `<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 mobile-no-padding"><a href="#"><div class="card"> <div class="card-header"><h2>`;
    midProject = `</h2></div><div class="card-body"><p>`
    botProject = `</p></div> <div class="card-bottom"><a href="#" rel="noopener">View</a></div></div> </a> </div>`
    code = ""
    for (i = 0; i < array.length; i++){
        console.log(array[i])
        newProject = topProject + array[i].project_title + midProject + array[i].description + botProject;
        code += newProject;
    }
    document.getElementById("projects").innerHTML = ''; 
    document.getElementById("projects").innerHTML = code;
}

});
