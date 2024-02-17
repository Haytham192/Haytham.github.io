var projectsDiv=document.getElementById("projects");
for(let i=0; i<PROJECTS.length;i++)
{   
    var currentProject=PROJECTS[i];

    //DIV
    var projectDiv=document.createElement("div");
    var divStyle=document.createAttribute("style");
    divStyle.value="display:inline-block; width:300px; margin:10px;";
    projectDiv.setAttributeNode(divStyle)
    //H3
    var title=document.createElement("h3");
    var titleNode= document.createTextNode(currentProject.title);
    title.appendChild(titleNode);

    //IMG
    var image=document.createElement("img");
    var source=document.createAttribute("src");
    source.value= "images/"+currentProject.img;
    image.setAttributeNode(source);
    var imgStyle=document.createAttribute("style");
    imgStyle.value="width: 180px; height: 100px;";
    image.setAttributeNode(imgStyle);

    //P
    var P=document.createElement("P");
    var pNode= document.createTextNode(currentProject.description);
    P.appendChild(pNode);

    projectDiv.appendChild(title);
    projectDiv.appendChild(image);
    projectDiv.appendChild(P);
    
    projectsDiv.appendChild(projectDiv);


}