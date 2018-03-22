function Begruessung() {
  var name = prompt("Bitte Name eingeben", "");
  if (name != null) {
    document.getElementById("Type").innerHTML =
      "Hallo " + name + "! Herzlich Willkommen auf der Mini-Website.";
  }
}