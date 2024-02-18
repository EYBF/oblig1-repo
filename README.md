# oblig1-repo

index.html:
lagd en dropboks til "film"-feltet med ulike utvalg (linje 12-17)

lagd teksfelt til de ulike infoboksene (linje 21-43)
    la til <div> og mellomrom slik at det ikke lå så tett

la til en knapp for å kjøpe billett (linje 46) og en for å slette alle billettene (linje 52)

liste for å vise alle billettene som har blitt valgt (linje 50)

skriptreferanse for å kinkludere JavaScript-filen (linje 54)


script.js:
opprettet array for å lagre billettobjekter (linje 1)
funksjon for å kjøpe billetter og henter verdier fra inputfeltene (linje 3-9)

brukte 'if' for feilmeldinger og ulike nødvendige valideringer for de ulike feltene + ulike feilmeldinger som blir vist til bruker om hvilke felter som er ugyldige eller om det er noen felter som ikke er fylt ut (linje 11-50)

oppretter et billettobjekt med infoormasjon fra inputfeltene (linje 53-59)

legger billettobjektet i billettarrayet og oppdaterer visningen av billettene (62 og 64)

nullstiller verdiene i inputfeltene for å klargjøre for ny billettregistrering (66-71)

funksjon for å slette alle billetter og oppdatere visningen (74-76)

funksjon for å vise billettene i HTML-dokumentet og hente referanse til HTML-elementet for billettlisten (79-81)

går gjennom hver billett i arrayet og oppretter listeelement for hver"bestilling", legger billettinformasjonen i listeelementets tekst, og legger til listeelementet i billettlisten(83-86)

funsjon for å validere e-postadresser, og telefonnummer med 8 siffer(90-97)

