const easy = document.querySelector("#Easy");
const medium = document.querySelector("#Medium");
const hard = document.querySelector("#Hard");
const start = document.querySelector("#start");
const dialog = document.querySelector("dialog");
const textarea = document.querySelector("#textarea");
const dificult = document.querySelector("#dificulté");
const pourcentagejust = document.querySelector("#pourcentagejuste");
const conteur = document.querySelector("#conteur");
const nombredemote = document.querySelector("#nombredemote");
const Restarte = document.querySelector("#Restarte");
const Restartebutton = document.querySelector("#Restartebutton");
const base = document.querySelector("#base");
const index =document.querySelector("#index")

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
let starte = false;
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
let faute = 0;
let vrait = 0;
let nombredemot = 0;
function créétliste(te, numéro) {
	const p = document.createElement("p");
	p.textContent = te;
	let a = 0;
	if (te == " ") {
		p.classList.add("epace");
	} else {
		p.classList.add("flou");
	}

	textarea.appendChild(p);
	start.addEventListener("click", () => {
		p.classList.remove("flou");
		p.classList.add("p");
	});

	document.addEventListener("keydown", (event) => {
		if (starte == true) {
			const nomTouche = event.key;
			if (nomTouche == te && numéro >= a) {
				if (numéro == a) {
					console.log(true);
					p.classList.add("vrait");
					vrait++;
				}
			} else {
				if (numéro == a) {
					console.log(true);
					p.classList.add("faux");
					faute++;
					console.log(faute);
				}
			}
			if (nomTouche == " " && nomTouche == te && numéro == a) {
				nombredemot++;
				nombredemote.textContent = nombredemot;
			}
			a++;
		}

		Restartebutton.addEventListener("click", () => {
			a = 0;
			p.classList.remove("faux");
			p.classList.remove("vrait");
		});
	});
	dificult.addEventListener("click", () => {
		p.remove();
	});
}
let text = "";
for (let i = 0; i <= 80; i++) {
	text += moteasys[Math.floor(Math.random() * (moteasys.length - 0) + 0)] + " ";
}
for (let e = 0; e < text.length; e++) {
	const pp = créétliste(text[e], e);
}
dificult.addEventListener("click", () => {
	if (easys == true) {
		let text = "";
		for (let i = 0; i <= 80; i++) {
			text +=
				moteasys[Math.floor(Math.random() * (moteasys.length - 0) + 0)] + " ";
		}
		for (let e = 0; e < text.length; e++) {
			const pp = créétliste(text[e], e);
		}
	}
	if (mediums == true) {
		let text = "";
		for (let i = 0; i <= 80; i++) {
			text +=
				motmedium[Math.floor(Math.random() * (motmedium.length - 0) + 0)] + " ";
		}
		for (let e = 0; e < text.length; e++) {
			const pp = créétliste(text[e], e);
		}
	}
	if (hards == true) {
		let text = "";
		for (let i = 0; i <= 80; i++) {
			text +=
				mothard[Math.floor(Math.random() * (mothard.length - 0) + 0)] + " ";
		}
		for (let e = 0; e < text.length; e++) {
			const pp = créétliste(text[e], e);
		}
	}
});
function finitt() {
	if ((premierfoix = true)) {
		premierfoix = false;
		index.classList.add("none")
		base.classList.remove("none");
		
	}
}
let premierfoix = true;
start.addEventListener("click", () => {
	Restarte.classList.remove("none");
	dialog.close();
	textarea.removeAttribute("maxlength");
	starte = true;
	let temps = 60;
	temp = setInterval(() => {
		temps--;
		conteur.textContent = "0:" + temps;
		if (temps == 55) {
			finitt();
			clearInterval(temp);
		}
	}, 1000);
});

document.addEventListener("keydown", (event) => {
	let pourcentagejuste = 100;
	if (starte == true && faute != 0) {
		pourcentagejuste -= (faute * 100) / text.length;
		pourcentagejuste = Math.floor(pourcentagejuste);
		pourcentagejust.textContent = pourcentagejuste + "%";
	}
});
Restartebutton.addEventListener("click", () => {
	pourcentagejuste = 100;
	pourcentagejust.textContent = pourcentagejuste + "%";
	faute = 0;
	vrait + 0;
	nombredemot = 0;
	nombredemote.textContent = nombredemot;
	clearInterval(temp);
	temps = 60;
	conteur.textContent = "1:00";
	temp = setInterval(() => {
		temps--;
		conteur.textContent = "0:" + temps;
		if (temps == 0) {
			finitt();
			clearInterval(temp);
		}
	}, 1000);
});
