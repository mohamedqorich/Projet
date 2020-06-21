// REMARQUE! Les étapes de ce fichier sont fondamentalement identiques à celles que vous
// effectué dans le fichier SpeakHello.js.

// ÉTAPE 6: Enveloppez tout le contenu de SpeakGoodBye.js à l'intérieur d'un IIFE


// ÉTAPE 7: Créez un objet, appelé 'byeSpeaker' auquel vous attacherez
// la méthode "speak" et que vous exposerez au contexte global
// var byeSpeaker =

// NE PAS attacher la variable speakWord à l'objet 'byeSpeaker'.
var speakWord = "Good Bye";

// ÉTAPE 8: Réécrivez la fonction 'speak' de telle sorte qu'elle soit attachée à la
// objet byeSpeaker au lieu d'être une fonction autonome.
function speak(name) {
  console.log(speakWord + " " + name);
}

// ÉTAPE 9: Exposez l'objet 'byeSpeaker' à la portée globale. Nomme le
// 'byeSpeaker' sur la portée mondiale également.
// xxxx.xxxx = byeSpeaker;