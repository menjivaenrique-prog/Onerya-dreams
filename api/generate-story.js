export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Méthode non autorisée"
    });
  }

  const { dream } = req.body || {};

  if (!dream || !dream.trim()) {
    return res.status(400).json({
      error: "Décris ton rêve avant de continuer."
    });
  }

  const text = dream.trim();

  const result = `
🎬 ONERYA DREAMS

TITRE
Le monde derrière le rêve

RÊVE ORIGINAL
${text}

━━━━━━━━━━━━━━━━━━
🎥 SCÈNE 1 — L'ÉVEIL
━━━━━━━━━━━━━━━━━━

DÉCOR :
Créer un environnement directement inspiré du rêve.

ACTION :
Le personnage principal découvre progressivement le monde.

CAMÉRA :
Plan cinématographique lent, travelling avant.

LUMIÈRE :
Lumière douce et mystérieuse.

AMBIANCE :
Émerveillement, découverte et mystère.

━━━━━━━━━━━━━━━━━━
🎥 SCÈNE 2 — LA DÉCOUVERTE
━━━━━━━━━━━━━━━━━━

DÉCOR :
Le monde devient plus vaste et spectaculaire.

ACTION :
Le personnage explore son environnement.

CAMÉRA :
Plan large suivi d'un mouvement de caméra fluide.

LUMIÈRE :
Éclairage cinématographique adapté à l'univers du rêve.

AMBIANCE :
Curiosité et aventure.

━━━━━━━━━━━━━━━━━━
🎥 SCÈNE 3 — LE VOYAGE
━━━━━━━━━━━━━━━━━━

DÉCOR :
Un nouvel endroit apparaît.

ACTION :
Le personnage poursuit son voyage et découvre quelque chose d'inattendu.

CAMÉRA :
Travelling latéral puis plan rapproché.

AMBIANCE :
Mystère et tension légère.

━━━━━━━━━━━━━━━━━━
🎥 SCÈNE 4 — LE MOMENT CLÉ
━━━━━━━━━━━━━━━━━━

DÉCOR :
Le lieu devient spectaculaire.

ACTION :
Un événement important transforme complètement le rêve.

CAMÉRA :
Plan large cinématographique puis mouvement dynamique.

LUMIÈRE :
Lumière dramatique et volumétrique.

AMBIANCE :
Émerveillement et émotion.

━━━━━━━━━━━━━━━━━━
🎥 SCÈNE 5 — LE RÉVEIL
━━━━━━━━━━━━━━━━━━

DÉCOR :
Le monde devient progressivement calme.

ACTION :
Le rêve se termine doucement.

CAMÉRA :
Zoom arrière lent.

LUMIÈRE :
Lumière douce.

AMBIANCE :
Calme, émotion et mystère.

━━━━━━━━━━━━━━━━━━

🎞️ FORMAT DU FILM

5 scènes
Durée prévue : environ 20 à 30 secondes
Style : cinématographique
Transitions : fluides
`;

  return res.status(200).json({
    success: true,
    story: result.trim()
  });
}
