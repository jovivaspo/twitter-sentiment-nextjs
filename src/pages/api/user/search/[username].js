import { roClient } from "@/services/configTwitter";
export default async function handlerSearch(req, res) {
  try {
    const { username } = req.query;
    const user = await roClient.v2.userByUsername(username, {
      "user.fields": ["created_at", "profile_image_url", "public_metrics"],
    });
    return res.status(200).json({
      id: user.data.id,
      name: user.data.name,
      username: user.data.username,
      createdAt: user.data.created_at,
      avatar: user.data.profile_image_url,
      metrics: user.data.public_metrics,
    });
  } catch (err) {
    return res.status(500).json({ error: "Error al buscar usuario" });
  }
}
