(function(){
    window.adjectivesList = []
    window.nounsList = []

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            nounsList = (JSON.parse(this.responseText));
        }
    };
    xmlhttp.open("GET", "nouns.json",true);
    xmlhttp.send();

    let xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            adjectivesList = (JSON.parse(this.responseText));
            
        }
    };
    xmlhttp2.open("GET", "adjectives.json",true);
    xmlhttp2.send();
})()