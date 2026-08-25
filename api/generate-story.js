export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Méthode non autorisée"
    });
  }

  const { dream, action } = req.body || {};

  if (!dream || !dream.trim()) {
    return res.status(400).json({
      error: "Le rêve est requis."
    });
  }

  const text = dream.trim();

  // MODE : préparation de la scène 1
  if (action === "prepare-scene-1") {

    const prompt = `
ONERYA DREAMS — SCÈNE 1

Titre : L'éveil

Rêve original :
${text}

Créer une scène d'ouverture cinématographique inspirée
du rêve.

Le personnage principal découvre pour la première fois
le monde de son rêve.

Caméra :
Mouvement lent vers l'avant, plan large puis
rapprochement progressif.

Lumière :
Atmosphère douce, lumineuse et rêveuse.

Ambiance :
Mystère, émerveillement et découverte.

Style :
Cinématographique, immersif, détaillé et cohérent.

Aucun texte à l'écran.
Aucun logo.
`;

    return res.status(200).json({
      success: true,
      type: "video-scene",
      scene: 1,
      status: "ready",
      prompt: prompt.trim()
    });
  }

  // MODE : génération de l'histoire
  const story = `
🎬 ONERYA DREAMS

TITRE
Le monde derrière le rêve

RÊVE ORIGINAL
${text}

━━━━━━━━━━━━━━━━━━
🎥 SCÈNE 1 — L'ÉVEIL
━━━━━━━━━━━━━━━━━━

Le personnage découvre progressivement le monde
de son rêve.

Caméra : travelling cinématographique lent.

Lumière : douce et mystérieuse.

Ambiance : émerveillement et découverte.

━━━━━━━━━━━━━━━━━━
🎥 SCÈNE 2 — LA DÉCOUVERTE
━━━━━━━━━━━━━━━━━━

Le personnage explore son environnement et découvre
un nouvel élément mystérieux.

Caméra : plan large puis mouvement fluide.

Ambiance : curiosité et aventure.

━━━━━━━━━━━━━━━━━━
🎥 SCÈNE 3 — LE VOYAGE
━━━━━━━━━━━━━━━━━━

Le personnage poursuit son aventure et découvre
un nouvel endroit.

Caméra : travelling puis plan rapproché.

Ambiance : mystère.

━━━━━━━━━━━━━━━━━━
🎥 SCÈNE 4 — LE MOMENT CLÉ
━━━━━━━━━━━━━━━━━━

Un événement spectaculaire transforme le rêve.

Caméra : plan large cinématographique.

Ambiance : émotion et émerveillement.

━━━━━━━━━━━━━━━━━━
🎥 SCÈNE 5 — LE RÉVEIL
━━━━━━━━━━━━━━━━━━

Le rêve se termine progressivement.

Caméra : zoom arrière lent.

Ambiance : calme et émotion.

━━━━━━━━━━━━━━━━━━

🎞️ FILM ONERYA DREAMS

5 scènes prêtes pour la production vidéo.
`;

  return res.status(200).json({
    success: true,
    story: story.trim()
  });
}
