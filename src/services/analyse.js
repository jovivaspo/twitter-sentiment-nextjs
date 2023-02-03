import sentiment from "multilang-sentiment";

const analyse = async (tweets) => {
  const analysedTweets = tweets.map((tweet) => {
    const result = sentiment(tweet.message, "es", {
      words: {
        gracias: 5,
        top: 5,
        "🔥": 5,
        "👍": 5,
        "⚡": 3,
        "🥰": 5,
      },
    });

    return { message: tweet.message, state: result.category };
  });

  return analysedTweets;
};

export { analyse };
