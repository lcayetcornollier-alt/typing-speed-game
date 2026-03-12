const easy = document.querySelector("#Easy");
const medium = document.querySelector("#Medium");
const hard = document.querySelector("#Hard");
const start = document.querySelector("#start");
const dialog = document.querySelector("dialog");
const textarea = document.querySelector("#textarea");
const dificult = document.querySelector("#dificulté");

let hards = false;
let easys = false;
let mediums = false;

let moteasys = [
	"chat",
	"chien",
	"pain",
	"lait",
	"eau",
	"sucre",
	"table",
	"chaise",
	"porte",
	"mur",
	"main",
	"pied",
	"tête",
	"nez",
	"yeux",
	"bras",
	"jambe",
	"dos",
	"ami",
	"amie",
	"père",
	"mère",
	"frère",
	"sœur",
	"jour",
	"nuit",
	"matin",
	"soir",
	"hier",
	"demain",
	"ici",
	"là",
	"oui",
	"non",
	"bien",
	"mal",
	"vite",
	"lent",
	"haut",
	"bas",
	"gros",
	"petit",
	"beau",
	"laid",
	"vrai",
	"faux",
	"bon",
	"mauvais",
	"chaud",
	"froid",
	"plein",
	"vide",
	"dur",
	"mou",
	"clair",
	"sombre",
	"neuf",
	"vieux",
];
let motmedium = [
	"maison",
	"voiture",
	"ordinateur",
	"clavier",
	"écran",
	"téléphone",
	"fenêtre",
	"cuisine",
	"salon",
	"chambre",
	"bureau",
	"travail",
	"école",
	"collège",
	"université",
	"professeur",
	"élève",
	"étudiant",
	"exercice",
	"question",
	"réponse",
	"solution",
	"problème",
	"histoire",
	"géographie",
	"science",
	"nature",
	"animal",
	"plante",
	"montagne",
	"rivière",
	"océan",
	"forêt",
	"prairie",
	"désert",
	"nuage",
	"pluie",
	"orage",
	"vent",
	"soleil",
	"étoile",
	"planète",
	"galaxie",
	"univers",
	"énergie",
	"force",
	"vitesse",
	"distance",
	"volume",
	"surface",
	"température",
	"pression",
	"matière",
	"atome",
	"molécule",
	"réaction",
	"expérience",
	"analyse",
	"mesure",
	"calcul",
];
let mothard = [
	"administration",
	"organisationnelle",
	"responsabilité",
	"professionnel",
	"développement",
	"implémentation",
	"international",
	"communication",
	"interprétation",
	"collaboration",
	"coordination",
	"expérimentale",
	"documentation",
	"classification",
	"transformation",
	"optimisation",
	"configuration",
	"synchronisation",
	"visualisation",
	"représentation",
	"identification",
	"authentification",
	"autorisation",
	"infrastructure",
	"architecture",
	"algorithmique",
	"programmation",
	"compilation",
	"interopérabilité",
	"compatibilité",
	"virtualisation",
	"automatisation",
	"orchestration",
	"distribution",
	"sauvegarde",
	"restauration",
	"supervision",
	"monitoring",
	"performance",
	"scalabilité",
	"résilience",
	"tolérance",
	"redondance",
	"migration",
	"intégration",
	"déploiement",
	"validation",
	"vérification",
	"évaluation",
	"amélioration",
	"innovation",
	"technologique",
	"scientifique",
	"méthodologie",
	"statistique",
	"probabilité",
	"modélisation",
	"simulation",
	"corrélation",
	"causalité",
];
dialog.show();
easy.addEventListener("click", () => {
	easy.classList.remove("dificult");
	medium.classList.remove("dificult-choisi");
	hard.classList.remove("dificult-choisi");
	medium.classList.add("dificult");
	hard.classList.add("dificult");
	easy.classList.add("dificult-choisi");
	hards = false;
	easys = true;
	mediums = false;
});
medium.addEventListener("click", () => {
	medium.classList.remove("dificult");
	easy.classList.remove("dificult-choisi");
	hard.classList.remove("dificult-choisi");
	easy.classList.add("dificult");
	hard.classList.add("dificult");
	medium.classList.add("dificult-choisi");
	hards = false;
	easys = false;
	mediums = true;
});
hard.addEventListener("click", () => {
	hard.classList.remove("dificult");
	medium.classList.remove("dificult-choisi");
	easy.classList.remove("dificult-choisi");
	medium.classList.add("dificult");
	easy.classList.add("dificult");
	hard.classList.add("dificult-choisi");
	hards = true;
	easys = false;
	mediums = false;
});
dificult.addEventListener("click", () => {
	if (easys == true) {
		let text = "";
		for (let i = 0; i <= 80; i++) {
			text +=
				moteasys[Math.floor(Math.random() * (moteasys.length - 0) + 0)] + " ";
		}
		textarea.setAttribute("placeholder", text);
	}
	if (mediums == true) {
		let text = "";
		for (let i = 0; i <= 80; i++) {
			text +=
				motmedium[Math.floor(Math.random() * (motmedium.length - 0) + 0)] + " ";
		}
		textarea.setAttribute("placeholder", text);
	}
	if (hards == true) {
		let text = "";
		for (let i = 0; i <= 80; i++) {
			text +=
				mothard[Math.floor(Math.random() * (mothard.length - 0) + 0)] + " ";
		}
		textarea.setAttribute("placeholder", text);
	}
});
start.addEventListener("click", () => {
	dialog.close();
	textarea.removeAttribute("maxlength")
});
