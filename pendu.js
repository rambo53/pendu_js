window.onload=function(){

    var mot = document.getElementById("mot");
    
    var lettres = [];

    var groupeAffiche="";

    var vies = 6;

    var groupeADeviner="";

    (function(){
        var dico =["slayer","metallica","anthrax","nevermore","whitesnake","megadeth","emperor","death",
        +"scorpions","lofofora","soundgarden","pod","skindred","queensryche","sepultura","massacra","rainbow","trust","danzig","kiss","coroner","kreator",
        +"tool","kyuss","biohazard","mushroomhead","mastodon","benighted"];

        var groupeMystere = Math.floor(Math.random()*dico.length);
        groupeADeviner = dico[groupeMystere].toUpperCase();

        for (let index = 0; index < groupeADeviner.length; index++) {

            if(index==0){
                groupeAffiche+=groupeADeviner[index];
            }
            else if(index==groupeADeviner.length-1){
                groupeAffiche+=groupeADeviner[index];
            }
            else{
                groupeAffiche+="*"; 
                lettres[index]=groupeADeviner[index];
            }

        }

        afficheVies(vies);

        afficheImage(vies);
        
        mot.textContent=groupeAffiche;
    })();
    
  
    for (let index = 65; index <= 90; index++) {

        var creaEl = document.createElement("button");
        creaEl.className = "bouton_alpha"
        creaEl.addEventListener("click", lettrePropos);
        creaEl.innerHTML = "<strong>"+String.fromCharCode(index)+"</strong>";
        document.body.appendChild(creaEl);

    }

    function lettrePropos(lettreATest){
       
        var propo = lettreATest.target.innerText;

        var lettreChoisit=lettreATest.target;
        console.log(lettreChoisit);

        if(lettreChoisit.tagName=="BUTTON"){
            lettreChoisit.classList.add("utilise");
        }else{
            lettreChoisit.parentElement.classList.add("utilise")
        }

            verifLettre(propo);
            afficheVies(vies);
            afficheImage(vies);  

        if(vies==0){
            finDuGame();  
          }
    }


    function tabToString(tab){
        var mot="";
        tab.forEach(lettre => {
            mot+=lettre;
        });

        if(mot==groupeADeviner){
            finDuGame();
        }

        return mot;
    }

    function verifLettre(propo){
        let lettreIncluse = false;

        for (let index = 1; index < lettres.length; index++) {
            
            if(propo==lettres[index]){

                lettreIncluse=true;

                var motTab=Array.from(mot.textContent);
                motTab[index]=propo;

                mot.textContent=tabToString(motTab);
            }
            
        }

        if(!lettreIncluse){
            vies--;
        }
    }
    

    function finDuGame(){

        if(vies>0){
            document.body.style.backgroundColor="green";
            document.getElementById("reponse").textContent="Pas mal jeune padawan...";
        }
        else{
            document.body.style.backgroundColor="red";      
            document.getElementById("reponse").textContent="La réponse était "+groupeADeviner;
        }

        var tabButton=document.querySelectorAll("button");

            tabButton.forEach(button => {
            button.classList.add("utilise");
            });
    }
    
    
    function afficheVies(vies){
        var viesAfficher = document.getElementById("vies");
        viesAfficher.textContent="Il te reste "+vies+" vies!";
    }
    
    
    function afficheImage(vies){

        var image = document.querySelector("img");
    
        switch (vies) {
            case 6:
                image.src="doom/doom1.png";
                break;
            case 5:
                image.src="doom/doom2.png";
            break;
            case 4:
                image.src="doom/doom3.png";
            break;
            case 3:
                image.src="doom/doom4.png";
            break;
            case 2:
                image.src="doom/doom5.png";
            break;
            case 1:
                image.src="doom/doom5.png";
            break;
            case 0:
                image.src="doom/doom6.png";
            break;
            }
            
    }
};


