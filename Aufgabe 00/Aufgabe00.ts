function begruessung() : void{
  var name: string = prompt("Wie heißt du?", "");
  if (name != null) {
    document.getElementById("Html").innerHTML =
      "Hallo " + name + "! Willkommen auf meiner Webseite :)";
  }
    
}