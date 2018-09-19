     
    function adjective(){
        return adjectivesList[Math.floor(Math.random()*adjectivesList.length)]
    }

    function noun(){
        return nounsList[Math.floor(Math.random()*nounsList.length)]
    }
    function getAdjective(){
        let name = adjective();
        document.querySelector("#adjective").textContent = name;
    }
     function getNoun(){
        let name = noun();
        document.querySelector("#noun").textContent = name;
     }
    function getAdjectiveNoun(){
       let name = adjective() + " " + noun();
       document.querySelector("#adjNoun").textContent = name;
    }
    function getNounAdjective(){
        let name =  noun() + " " + adjective();
       document.querySelector("#nounAdj").textContent = name;
    }