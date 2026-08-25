export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Méthode non autorisée"
    });
  }

  const { dream, scene } = req.body || {};

  if (!dream || !dream.trim()) {
    return res.status(400).json({
      error: "Le rêve est requis."
    });
  }

  if (scene !== 1) {
    return res.status(400).json({
      error: "Ce endpoint prépare actuellement uniquement la scène 1."
    });
  }

  const videoPrompt = `
Cinematic dream sequence.

Scene: 1 — L'ÉVEIL

Original dream:
${dream.trim()}

Create a cinematic opening scene inspired by this dream.

Show the main character discovering the dream world for the first time.

Camera:
Slow cinematic camera movement, gentle forward tracking shot,
wide establishing shot followed by a closer view.

Lighting:
Atmospheric cinematic lighting, soft volumetric light,
dreamlike visual atmosphere.

Mood:
Wonder, mystery and discovery.

Visual style:
High-quality cinematic fantasy, immersive environment,
natural movement, detailed surroundings, coherent character appearance.

No text, no subtitles, no logos.
`;

  return res.status(200).json({
    success: true,
    scene: 1,
    status: "ready",
    prompt: videoPrompt.trim()
  });
}
