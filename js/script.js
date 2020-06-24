//Creare un oggetto che descriva uno studente con le seguenti proprietà:
//nome, cognome e età.
$(document).ready(function () {
  var studenteSingolo = {
   'nome' : 'Federico',
   'cognome' : 'Porcu',
   'eta ': '29',
 };

 for (var key in studenteSingolo) {
   console.log(studenteSingolo[key]);
 }

 //Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e
 //stampare per ognuno nome e cognome
var registroDiClasse = [//il browser ordina alfabeticamente le chiavi
  {
    'nome' : 'Carlo',
    'cognome' : 'Merlini',
    'eta' : '27'
  },
  {
    'nome' : 'Vincenzo',
    'cognome' : 'Sangiuliano',
    'eta' : '28'
  },
  {
    'nome' : 'Ivan',
    'cognome' : 'Galasso',
    'eta' : 24
  },
  {
    'nome' : '',
    'cognome' : 'Porcu',
    'eta' : 29
  },
]

//Stampare a schermo attraverso il for in tutte le proprietà.
for (var i = 0; i < registroDiClasse.length; i++) {
  var nomeCognome = registroDiClasse[i]
  console.log('Nome:' + nomeCognome.nome + '  Cognome:' + nomeCognome.cognome)
}

//Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo
//oggetto studente inserendo nell’ordine: nome, cognome e età.
var nome = prompt('Inserisci il tuo nome');
var cognome = prompt('inserisci il tuo cognome');
var eta = prompt('Inserisci la tua eta');

var nuovoStudente = {
  'nome' : nome,
  'cognome' : cognome,
  'eta' : eta,
};
registroDiClasse.push(nuovoStudente);
console.log(registroDiClasse);

// Inserisco in HTML tramite JQ risultato array aggiornato con nome inserito dall'user tramite un ciclo for
//for (var i = 0; i < registroDiClasse.length; i++) {
//var result = registroDiClass[i];
//$('.iscritti').append(' nome : ' + result.nome + '  / cognome : ' + result.cognome + '  / età : ' + result.eta + '<br>');
//}

});
