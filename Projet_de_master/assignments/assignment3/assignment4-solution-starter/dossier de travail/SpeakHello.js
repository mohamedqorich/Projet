// ÉTAPE 2: Enveloppez tout le contenu de SpeakHello.js dans un IIFE


// ÉTAPE 3: Créez un objet, appelé 'helloSpeaker' auquel vous attacherez
// la méthode "speak" et que vous exposerez au contexte global
// var helloSpeaker =

// NE PAS attacher la variable speakWord à l'objet 'helloSpeaker'.
var speakWord = "Hello";

// ÉTAPE 4: Réécrivez la fonction 'speak' de telle sorte qu'elle soit attachée au
// objet helloSpeaker au lieu d'être une fonction autonome.
function speak(name) {
  console.log(speakWord + " " + name);
}

// ÉTAPE 5: Exposez l'objet 'helloSpeaker' à la portée globale. Nomme le
// 'helloSpeaker' sur la portée mondiale également.
// (Remarque, l'étape 6 sera effectuée dans le fichier SpeakGoodBye.js.)
// xxxx.xxxx = bonjourSpeaker;