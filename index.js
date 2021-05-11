var numeroPagina=1;
var referenciaFuncion;

window.onload = () =>{
  loadDoc("https://newsapi.org/v2/everything?q=covid&pageSize=12&apiKey=1c34e728a9ed40dbabbc3b34991bc560");
  
}

function loadDoc(url) {

    url="https://api.allorigins.win/raw?url="+encodeURIComponent(url);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 1){
        document.getElementById("miimagen").style.display="inline";
      }

      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("miimagen").style.display="none";
        misDatos= JSON.parse(this.responseText);
        for(let i=0;i<misDatos.articles.length;i++){
        crearCard(misDatos.articles[i]);
        }
        
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function crearCard(noticia){

    divpadre=document.createElement("div");
    divpadre.setAttribute("class", "w3-container-padre");
  
    img=document.createElement("img");
    if(noticia.urlToImage==null)
      img.setAttribute("src", "img/nodisponible.jpg");
    else 
      img.setAttribute("src", noticia.urlToImage); 
    boton=document.createElement("button");
    boton.addEventListener("click",()=>mostrarDetalle(noticia),false )
    boton.innerHTML="Más información";
    titulo=document.createElement("h3");
    titulo.innerHTML= noticia.title;
  
    divpadre.appendChild(titulo);
    divpadre.appendChild(img);
    divpadre.appendChild(boton);
    global= document.getElementById("global");
    global.appendChild(divpadre);
  }

  function mostrarDetalle(articulo)
 {
    modal = document.getElementById("modalDetalle");
    if(articulo.author==null)
      modal.children[0].children[0].children[1].innerHTML= "Anónimo";
    else 
      modal.children[0].children[0].children[1].innerHTML= articulo.author;
    
      if(articulo.content==null)
        modal.children[0].children[0].children[2].innerHTML= "No existe contenido";
      else 
        modal.children[0].children[0].children[2].innerHTML= articulo.content;
    
      if(articulo.description==null)
        modal.children[0].children[0].children[2].innerHTML= "No existe descripcion";
      else 
        modal.children[0].children[0].children[2].innerHTML= articulo.description;
    modal.children[0].children[0].children[3].innerHTML= articulo.description;
    modal.children[0].children[0].children[4].innerHTML= articulo.publishedAt;
    modal.children[0].children[0].children[5].href= articulo.url;

    modal.style.display = "block";
  

 }

 function peticionScience() {
   if(referenciaFuncion!=peticionScience){
     numeroPagina=1;
   }
  document.getElementById("global").innerHTML="";
  loadDoc("https://newsapi.org/v2/top-headlines?page="+numeroPagina+"&country=us&pageSize=12&category=science&apiKey=1c34e728a9ed40dbabbc3b34991bc560");
  referenciaFuncion=peticionScience;
}

function peticionHealth() {
  if(referenciaFuncion!=peticionHealth){
    numeroPagina=1;
  }
  document.getElementById("global").innerHTML="";
  loadDoc("https://newsapi.org/v2/top-headlines?page="+numeroPagina+"&country=us&pageSize=12&category=health&apiKey=1c34e728a9ed40dbabbc3b34991bc560");
  referenciaFuncion=peticionHealth;
}

function peticionSports() {
  if(referenciaFuncion!=peticionSports){
    numeroPagina=1;
  }
  document.getElementById("global").innerHTML="";
  loadDoc("https://newsapi.org/v2/top-headlines?page="+numeroPagina+"&country=us&pageSize=12&category=sports&apiKey=1c34e728a9ed40dbabbc3b34991bc560");
  referenciaFuncion=peticionSports;
}

function peticionTechnology() {
  if(referenciaFuncion!=peticionTechnology){
    numeroPagina=1;
  }
  document.getElementById("global").innerHTML="";
  loadDoc("https://newsapi.org/v2/top-headlines?page="+numeroPagina+"&country=us&pageSize=12&category=technology&apiKey=1c34e728a9ed40dbabbc3b34991bc560");
  referenciaFuncion=peticionTechnology;
}

function peticionBuscador() {
  document.getElementById("global").innerHTML="";
  evento= window.event;
  leidoDelInput= evento.target.value;
  if(leidoDelInput!="")
  loadDoc("https://newsapi.org/v2/everything?q="+leidoDelInput+"&pageSize=12&apiKey=1c34e728a9ed40dbabbc3b34991bc560")
  else{
      img= document.createElement("img");
      img.setAttribute("src", "img/notFound.jfif");
      img.setAttribute("id", "img");
  document.getElementById("global").appendChild(img);
  }
}

function pasoPagina(){
  numeroPagina++;
  referenciaFuncion();
}