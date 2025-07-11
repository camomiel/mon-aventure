const messages = [
  "Prépare-toi, on va à Valencia !",
  "Super ! Barcelone, nous voilà !",
  "Waouh, Gérone est proche !",
  "On est en France ! Coucou Perpignan !",
  "Zzz... Montpellier à l'horizon !",
  "Bonjour Lyon et ses croissants !",
  "Dijon, la ville de la moutarde magique !",
  "Orly, plus que quelques kilomètres !",
  "Le château de Vincennes, wahou !",
  "Paris Bercy, t'es un champion !"
];
let index = 0;
function speakMessage() {
  const msg = new SpeechSynthesisUtterance(messages[index]);
  document.getElementById("message").innerText = messages[index];
  speechSynthesis.speak(msg);
  index = (index + 1) % messages.length;
}
setInterval(speakMessage, 10000); // parle toutes les 10s
