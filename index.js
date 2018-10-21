function About(){
    document.getElementById("fillable").innerHTML = document.getElementById("About").innerHTML;
}

function Experience(){
    document.getElementById("fillable").innerHTML = document.getElementById("Experience").innerHTML;
}

function Projects(){
    document.getElementById("fillable").innerHTML = document.getElementById("Projects").innerHTML;
}

function Personal(){
    document.getElementById("fillable").innerHTML = document.getElementById("Personal").innerHTML;
}

function Contact(){
    document.getElementById("fillable").innerHTML = document.getElementById("Contact").innerHTML;
}

function onClickJob(elem){
    var id = elem.id;
    if(id == "UDA") {
        togglePopup(`
        I worked three co-op terms at UDA, with my primary job being to maintain and enhance the ConstructionOnline web app by working closely with the product manager to implement any features to fix bugs or improve the over all product. Some major projects that came from this include the following.
        <ul>
        <li>
            Implementing the BCrypt Library into existing backend services in order to move from storing plain-text passwords in the database to a hashed password system
        </li>
        <li>
            Converting legacy backend code to integrate with Amazon Web Services to handle any and all uploads, downloads, etc. with client files, and then migrating existing files from the database to AWS in order to work with this new system
        </li>
        <li>
            Creating a "Newsfeed" web page for clients to view any and all information pertaining to their company profile
        </li>
        <li>
            Creating a company news tool, in order to release updates to clients' Newsfeed
        </li>
        <li>
            Implementing a custom value system, allowing enhanced customization for client's tasks and logs
        </li>
        <li>
            Overhauling multiple existing web pages into new layouts in order to present a sleeker and more effective layout
        </li>
        <li>
            Identifying, fixing, and documenting hundreds of existing bugs on the website
        </li>
        </ul>
        </br</br>
        Technologies used: Javascript, HTML, CSS, JQuery, .NET, VB, SQL`)
    }
}

Popup = {

}

function togglePopup(innerHTML) {
    // Get Popup element, if it exists
    var elem = document.getElementById("popup");

    // If elem exists, popup is currently active
    if(elem != null) { 
        elem.style.height = "30px"
        elem.style.width = "30px";
        elem.firstChild.innerHTML = "";
        setTimeout(function(){
            elem.style.top = "-1000px";
            setTimeout(function(){
                elem.remove();
            }, 1250);
        }, 1500);
        
    }
    else {
        elem = document.createElement("div");
        elem.id = "popup";
        wrapper = document.createElement("div");

        wrapper.id = "wrapper";
        elem.appendChild(wrapper)
        document.body.appendChild(elem);
        setTimeout(function(){
            // SHOW
            // update html

            // fade background

            // scroll down
            elem.style.top = "20%";
            setTimeout(function(){
                elem.style.height = "400px"
                elem.style.width = "700px";
                setTimeout(function(){
                    wrapper.innerHTML = innerHTML;
                }, 1000)
            }, 1750);
        }, 300)
        
    }
}