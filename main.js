

var obj = {
    'projects': [{
            "project_name": "pa1",
            "type": "ai",
            "description": "pa1 description",
            "url": "2",
        }, {
            "project_name": "pa2",
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
    code = ""
    for (i = 0; i < array.length; i++){
        console.log(array[i])
        code += array[i].description;
    }
    document.getElementById("projects").innerHTML = ''; 
    document.getElementById("projects").innerHTML = code;
}

});
