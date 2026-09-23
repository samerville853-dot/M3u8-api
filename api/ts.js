import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const { url } = req.query;
    if (!url) return res.status(400).send("Missing url");

    const upstream = await fetch(url, {
      headers: { "User-Agent": "اليوزر اجينت الخاص بك" }
    });

    res.setHeader("Content-Type", "video/mp2t");
    upstream.body.pipe(res);

  } catch (e) {
    res.status(500).send("TS Proxy Error");
  }
}

