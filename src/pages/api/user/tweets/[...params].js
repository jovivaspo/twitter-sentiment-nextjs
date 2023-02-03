import { calculateDate } from "@/services/calculateTime";
import { roClient } from "@/services/configTwitter";
//4882508632
export default async function handlerTweets(req, res) {
  try {
    const [id, time] = req.query.params;

    const { start_time, end_time } = calculateDate(time);

    const tweetsOfUser = await roClient.v2.userTimeline(id, {
      start_time: start_time.toISOString(),
      end_time: end_time.toISOString(),
    });

    let tweetsUser = [];

    for await (const fetchTweetUser of tweetsOfUser) {
      tweetsUser.push({
        message: fetchTweetUser.text,
        state: null,
      });
    }
    return res.status(200).json({
      tweets: tweetsUser,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Error al recopilar tweets" });
  }
}
