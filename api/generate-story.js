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

  const cleanDream = dream.trim();

  const story = `
ONERYA DREAMS — TON HISTOIRE

Ton rêve commence...

Tout commence avec cette vision :

"${cleanDream}"

Le monde autour de toi devient progressivement différent.
Les détails de ton rêve prennent vie et une atmosphère cinématographique se crée.

SCÈNE 1 — LE COMMENCEMENT

Tu te retrouves au cœur de cet univers.
Chaque élément de ton rêve semble avoir une signification.
L'environnement devient plus vivant et mystérieux.

SCÈNE 2 — LE VOYAGE

Tu avances dans ce monde et découvres de nouveaux éléments.
L'histoire évolue autour de ton rêve et une aventure commence.

SCÈNE 3 — LE MOMENT CLÉ

Un événement important change la direction de l'histoire.
Tout ce que tu as vu jusqu'ici semble conduire vers cet instant.

SCÈNE 4 — LA FIN

Le rêve atteint son point culminant.
Puis l'environnement devient progressivement calme.

Tu te réveilles avec l'impression d'avoir vécu une véritable expérience cinématographique.

— FIN —
`;

  return res.status(200).json({
    success: true,
    story: story.trim()
  });
}
