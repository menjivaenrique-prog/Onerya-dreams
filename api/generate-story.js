export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  const { dream } = req.body || {};

  if (!dream || !dream.trim()) {
    return res.status(400).json({
      error: "Dream is required"
    });
  }

  return res.status(200).json({
    message: "ONERYA DREAMS backend is working!",
    dream: dream
  });
}
