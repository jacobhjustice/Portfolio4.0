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
    Studies.buildStudyTableHTML();
}

function Contact(){
    document.getElementById("fillable").innerHTML = document.getElementById("Contact").innerHTML;
}

function onClickHobby(elem) {
    var extra = elem.nextElementSibling;
    var isHidden = elem.dataset.hidden;
    if(isHidden == "true") {
        extra.style.display = "table-row"
    } else {
        extra.style.display = "none";
    }
    elem.dataset.hidden = isHidden != "true"
}

function onClickProject(elem){
    var id = elem.id;
    if(id == "Sudoku") {
        var win = window.open(window.location.href + "/Sudoku_Solver")
        win.focus();
    }
}

function onClickContact() {
    var xhr = new XMLHttpRequest();
    var HTMLForm = document.getElementById("contactForm");
    var form = new FormData(HTMLForm);
    xhr.addEventListener("load", function(e){
        console.log(e);
    });

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var els = HTMLForm.getElementsByClassName("formInput")
            for(var i = 0; i < els.length; i++) {
                els[i].value = "";
            }
        }
      };

    xhr.open("POST", "contact.php");
    xhr.send(form);

}

function onClickIcon(elem) {
    var id = elem.id;
    if(id == "Git") {
        var win = window.open("https://github.com/jacobhjustice", '_blank');
        win.focus();
    } else if(id == "Insta") {
        var win = window.open("https://www.instagram.com/boy_justice_superhero/", '_blank');
        win.focus();
    } else if(id == "Linked") {
        var win = window.open("https://www.linkedin.com/in/jacob-justice-a32017125/", '_blank');
        win.focus();
    }
}

function onClickJob(elem) {
    var id = elem.id;
    if(id == "UDA") {
        togglePopup(`
        I worked three co-op terms at UDA, with my primary job being to maintain and enhance the ConstructionOnline web app. The product manager and I collaborated in order to implement various features to improve the over-all polish of the system, by fixing bugs, improving accessibility, and implementing new features. Some major projects that came from this include the following.
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
        Technologies used: Javascript, HTML, CSS, JQuery, .NET, VB, SQL, Github`)
    } else if(id == 'Workiva') {
        togglePopup(`
        I worked this past summer at Workiva on their data sharing team for the web app's document platform. Workiva operates under the agile methodology, which led to me being a core member of the team (despite being an intern), helping in reaching quarterly goals through project planning, QA, code reviews, debugging, documentation, and of course, development. 
        </br></br>
        Technologies used: Git, Dart, Go, Redux, Command Line
        `, '160px');
    }
}

Popup = {
    Status: {
        INACTIVE: 0,
        ACTIVE: 1,
        PENDING: 2
    },
    currentStatus: 0
};

Studies = {
    studiesArray: ["Colossians", "Daniel", "Faith, Hope, & Love", "The Gospels", "Haggai", "Hebrews", "Hosea", "Job", "Jonah", "Prayer", "The Letters of John", "Titus"],
    buildStudyTableHTML: function() {
        var row = document.getElementById("BibleCell");
        for(var i = 0; i < this.studiesArray.length; i++) {
            var html = `<a href="studies/` + this.studiesArray[i] +`.pdf"  class="bible">
                        <div class="bookTitle">` + this.studiesArray[i] + `</div>
                        <div class="page1"></div>
                    </a>`;
            var div = document.createElement("div");
            div.classList.add("bibleWrapper");
            div.innerHTML = html;
            row.appendChild(div);
        }
    }
}

function togglePopup(innerHTML, heightCSS) {
    var elem = document.getElementById("popup");
    if(Popup.currentStatus == Popup.Status.PENDING) {
        return; 
    }

    // If elem exists, popup is currently active, so begin close animation
    if(elem != null) { 
        Popup.currentStatus = Popup.Status.PENDING;
        elem.style.height = "30px"
        elem.style.width = "30px";
        elem.firstChild.innerHTML = "";
        document.getElementById("closeBtn").remove();
        setTimeout(function(){
            elem.style.top = "-1000px";
            setTimeout(function(){
                elem.remove();
                Popup.currentStatus = Popup.Status.INACTIVE;
            }, 500);
        }, 1500);
        
    } else {
        Popup.currentStatus = Popup.Status.PENDING;
        elem = document.createElement("div");
        elem.id = "popup";
        wrapper = document.createElement("div");
        wrapper.id = "wrapper";
        elem.appendChild(wrapper);

        close = document.createElement("div");
        close.id = "closeBtn";
        close.onclick = function() {
            togglePopup();
        };
        elem.appendChild(close);
        document.body.appendChild(elem);
        setTimeout(function(){

            elem.style.top = "20%";
            setTimeout(function(){
                elem.style.height = heightCSS ? heightCSS : "440px";
                elem.style.width = "800px";
                setTimeout(function(){
                    wrapper.innerHTML = innerHTML;
                    close.style.visibility = "visible";
                    Popup.currentStatus = Popup.Status.ACTIVE;
                 }, 1000)
            }, 1750);
        }, 300)
        
    }
}

function closePopup(){
    if(Popup.currentStatus == Popup.Status.ACTIVE) {
        togglePopup();
    }
}