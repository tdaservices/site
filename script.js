(function(){
    emailjs.init("P5mK0R_I-E8g-WN3F");
})();

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {

        function ask(question) {
            let value = prompt(question);

            // Si annulation OU champ vide
            if (value === null || value.trim() === "") {
                alert("⚠️ Annulation du message");
                throw "cancel"; // stop tout le script
            }

            return value;
        }

        try {
            let nom = ask("Entrez votre nom :");
            let prenom = ask("Entrez votre prénom :");
            let telephone = ask("Entrez votre numéro de téléphone :");
            let email = ask("Entrez votre email :");
            let heure = ask("Date/heure souhaitée pour l'appel :");

            let params = {
                nom: nom,
                prenom: prenom,
                telephone: telephone,
                email: email,
                heure: heure
            };

            emailjs.send("service_gm2u4vf", "template_o497clr", params)
            .then(function(response) {
                alert("✅ Demande envoyée avec succès ! Nous vous contacterons à l'heure souhaitée.");
            }, function(error) {
                alert("❌ Erreur lors de l'envoi... Veuillez réessayer.");
                console.log(error);
            });

        } catch (e) {
            // rien à faire ici, on a déjà affiché le message
        }

    });
});