const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());

app.post("/event", async (req, res) => {
  try {
    const response = await axios.post(
      `https://graph.facebook.com/v18.0/${process.env.PIXEL_ID}/events?access_token=${process.env.ACCESS_TOKEN}`,
      {
        data: [req.body]
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.response.data);
  }
});

app.get("/", (req,res)=>{
  res.send("Meta CAPI Server Running ✅");
});

app.listen(10000, () => console.log("Server running"));
