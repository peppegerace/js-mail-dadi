const lancioDadi = document.getElementById('dadi');

// aggiungo un ascoltatore al click
lancioDadi.addEventListener('click', function(){
  // genero un numero random tra 1 e 6 per l'utente
  let dadoUser = Math.floor(Math.random() * 6) + 1;
  console.log(dadoUser);
   // genero un numero random tra 1 e 6 per il computer
  let dadoPc = Math.floor(Math.random() * 6) + 1;
  console.log(dadoPc);

  // stampo in pagina il risultato del lancio dei dadi
  document.getElementById('output-user').innerHTML = 'Il tuo numero è: ' + dadoUser;
  document.getElementById('output-pc').innerHTML = 'Il numero del computer è: ' + dadoPc;

  // aggiungo le condizioni per stabilire il risultato della partita
  if (dadoUser > dadoPc) {
    document.getElementById('output').innerHTML = 'Hai vinto contro il computer!';
  } else if (dadoUser < dadoPc) {
    document.getElementById('output').innerHTML = 'Hai perso contro il computer!';
  } else {
    document.getElementById('output').innerHTML = 'Tu e il computer avete pareggiato!';
  }
})
