const serverURL = "https://wikipedia.org" // Lien du serveur à vérifier
const serverInfo = document.querySelector(".server-info")
const statusText = document.querySelector(".status-message")

serverInfo.innerText = `Is ${serverURL} up ?` // Affiche un texte contenant le lien du serveur (serverURL)

fetch(serverURL, {mode: 'no-cors'}).then(r=>{ // Si le serveur est joignable
  statusText.innerText = "ONLINE" // Change le texte
  statusText.classList.remove('initial'); // Retire la couleur initiale
  statusText.classList.add('online'); // Ajoute une couleur verte
  })
  .catch(e=>{ // Si le serveur n'est pas joignable
    statusText.innerText = "ERROR" // Change le texte
    statusText.classList.remove('initial'); // Retire la couleur initiale
  statusText.classList.add('error'); // Ajoute une couleur rouge
})