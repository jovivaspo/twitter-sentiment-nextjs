import { analyse } from "@/services/analyse";
export default async function handlerAnalyse(req, res) {
  try {
    if (req.method === "POST") {
      const { tweets } = req.body;
      const results = analyse(tweets);
      res.status(200).json({
        tweets: results,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error al analizar" });
  }
}
