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

  const story = `
🎬 ONERYA DREAMS

━━━━━━━━━━━━━━━━━━
TITRE
━━━━━━━━━━━━━━━━━━

Le monde derrière le rêve

━━━━━━━━━━━━━━━━━━
PERSONNAGE PRINCIPAL
━━━━━━━━━━━━━━━━━━

Le rêveur, plongé directement au cœur de son propre univers.

━━━━━━━━━━━━━━━━━━
AMBIANCE
━━━━━━━━━━━━━━━━━━

Une atmosphère mystérieuse, immersive et cinématographique,
adaptée aux éléments décrits dans le rêve.

━━━━━━━━━━━━━━━━━━
SYNOPSIS
━━━━━━━━━━━━━━━━━━

Le rêve commence avec cette vision :

"${text}"

Peu à peu, cette vision devient un véritable monde.
Les lieux, les personnages et les événements prennent vie
autour du rêveur.

━━━━━━━━━━━━━━━━━━
🎥 SCÈNE 1 — L'ÉVEIL
━━━━━━━━━━━━━━━━━━

Le rêveur découvre son environnement.
Les premiers détails du rêve apparaissent progressivement.

━━━━━━━━━━━━━━━━━━
🎥 SCÈNE 2 — LA DÉCOUVERTE
━━━━━━━━━━━━━━━━━━

Un nouvel élément attire son attention.
Le monde semble plus vaste et plus mystérieux qu'il ne le pensait.

━━━━━━━━━━━━━━━━━━
🎥 SCÈNE 3 — LE VOYAGE
━━━━━━━━━━━━━━━━━━

Le rêveur avance dans cet univers.
Les événements deviennent de plus en plus importants.

━━━━━━━━━━━━━━━━━━
🎥 SCÈNE 4 — LE MOMENT CLÉ
━━━━━━━━━━━━━━━━━━

Un événement majeur transforme complètement l'expérience.
Le rêve atteint son intensité maximale.

━━━━━━━━━━━━━━━━━━
🎥 SCÈNE 5 — LE RÉVEIL
━━━━━━━━━━━━━━━━━━

Le monde devient progressivement silencieux.
Le rêveur se réveille avec le souvenir d'avoir vécu
une véritable aventure cinématographique.

━━━━━━━━━━━━━━━━━━
🎙️ NARRATION
━━━━━━━━━━━━━━━━━━

"Tout a commencé par un rêve.
Mais cette fois, le rêve semblait avoir décidé
de devenir réel."

━━━━━━━━━━━━━━━━━━
FIN
━━━━━━━━━━━━━━━━━━
`;

  return res.status(200).json({
    success: true,
    story: story.trim()
  });
}
