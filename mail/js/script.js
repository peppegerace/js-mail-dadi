//  array contenente la lista di email
const listaMail = [
  'AldoAquino@boolean.it',
  'MassimoAzzini@boolean.it',
  'VahidBan@boolean.it',
  'GiacomoBechini@boolean.it',
  'ThomasBortolotti@boolean.it',
  'CarmeloCammalleri@boolean.it',
  'AlessandroCingolani@boolean.it',
  'Andreea@boolean.it',
  'DavideCorrea@boolean.it',
  'AlessandroDAniello@boolean.it',
  'ArgelAllanDelaCruz@boolean.it',
  'ManueleDiGregorio@boolean.it',
  'EmanueleDiLeo@boolean.it',
  'EddyFabbricatore@boolean.it',
  'AntonioFaddanno@boolean.it',
  'LeonardoFlammini@boolean.it',
  'VeronicaFontana@boolean.it',
  'GiuseppeGerace@boolean.it',
  'VincenzoImmordino@boolean.it',
  'VincenzoLiCalzi@boolean.it',
  'PietroLupi@boolean.it',
  'AlessandroMatricardi@boolean.it',
  'AlessiaPatanè@boolean.it',
  'SilviaPetrino@boolean.it',
  'EstherPinos@boolean.it',
  'AlessandroPirisinu@boolean.it',
  'GianniMarkQuagliani@boolean.it',
  'FrancescoRussotto@boolean.it',
  'FranciscoSánchez@boolean.it',
  'ManvinderSingh@boolean.it',
  'SalvatoreDarioTorrisi@boolean.it',
  'ErikVella@boolean.it',
  'AsiaViscardi@boolean.it'
];
console.log(listaMail)

const inviaMail = document.getElementById('invia')

// aggiungo un ascoltatore al click
inviaMail.addEventListener('click', function(){
  // raccolgo il dato dell'utente
  const mailInserita = document.getElementById('email').value;
  console.log(mailInserita)

  // verifico che il dato faccia parte dell'array
  if (listaMail.includes(mailInserita)) {
    // stampo in pagina il risultato della verifica
    document.querySelector('.output').innerHTML = 'Puoi continuare la navigazione su questa pagina'
  } else {
    // stampo in pagina il risultato della verifica
    document.querySelector('.output').innerHTML = 'Accesso negato'
  }
})
