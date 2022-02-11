
      
      

      function opa1(num) {
        let section = document.getElementById("card");
  
        var myH1 = document.createElement('div');
        myH1.setAttribute("id", "cardpoke"+num);
        section.appendChild(myH1);
        }
        
  
       
        function teste1(poke){
        
        let section = document.getElementById("cardpoke"+poke);
        var pokemon = poke
        
  
        var requestURL = 'https://pokeapi.co/api/v2/pokemon/'+pokemon
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
  
        request.responseType = 'json';
        request.send();
  
        request.onload = function() {
        var pokemon = request.response;
        br()
        nome(pokemon);
        br()
        base_ext(pokemon)
        br()
        img(pokemon);
        br()
        habilities(pokemon);
        br()
        infoAtki(pokemon);
        br()
        
        }
  
        function nome(jsonObj) {
        var myH1 = document.createElement('h1');
        myH1.setAttribute("id", "tes");
        myH1.textContent = jsonObj['name'];
        section.appendChild(myH1);
        }
  
        function base_ext(jsonObj) {
        var myH1 = document.createElement('h1');
        myH1.textContent = jsonObj['base_experience'];
        section.appendChild(myH1);
        }
  
        function habilities(jsonObj) {
        var myP1 = document.createElement('p');
        var myP2 = document.createElement('p');
        myP1.setAttribute("id", "hab1");
        myP2.setAttribute("id", "hab2");
        myP1.textContent = jsonObj['abilities'][0].ability.name;
        myP2.textContent = jsonObj['abilities'][1].ability.name
        section.appendChild(myP1);
        section.appendChild(myP2);
        }
  
        function br(jsonObj) {
        var myH1 = document.createElement('br');
        section.appendChild(myH1);
        }
  
        function infoAtki(jsonObj) {
        var myH1 = document.createElement('h1');
        myH1.textContent ="Ataque inicial: " + jsonObj['stats'][0].base_stat;
        section.appendChild(myH1);
        }
        
  
        function img(jsonObj){
          var img = document.createElement('img');
          img.src = jsonObj['sprites'].other.dream_world.front_default;
          section.appendChild(img);
        }
  
        }
  
        for(i=1;i<9;i++){
          opa1(i)
          teste1(i)
          
        }
        