import { analyse } from "@/services/analyse";
export default async function handlerAnalyse(req, res) {
  try {
    if (req.method !== "POST" || !req.body.tweets) {
      return res.status(400).json({ error: "Petición incorrecta" });
    }
    const { tweets } = req.body;
    const results = await analyse(tweets);
    return res.status(200).json({
      tweets: results,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Error al analizar" });
  }
}
