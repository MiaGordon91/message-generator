export {};
import path from "path";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

//points file to access .env in root directory
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const pathToEnv = path.resolve(__dirname, "../.env");
dotenv.config({ path: pathToEnv });

const PORT = 8000;
const app = express();

const OPEN_API_KEY = process.env.OPEN_API_KEY;
const EXPRESS_ROUTE = process.env.EXPRESS_ROUTE;
const REACT_APP_ROUTE = process.env.REACT_APP_ROUTE;

// this allows us to work with json when sending
// from the front end to the back end through POST requests
app.use(express.json());

//allow requests from react frontend to avoid CORS policy restriction
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", `'*'`);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

//define the express route
// with asyn function with await keyword that gets the response
app.post(
  `${EXPRESS_ROUTE}`,
  async (req: any, res: { send: (arg0: any) => void }) => {
    // options defines what kind of request this is going to be
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPEN_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: req.body.message,
          },
        ],
        max_tokens: 100,
      }),
    };

    try {
      // post request to this URL and wait for a response to come back
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        options,
      );
      const data = await response.json();

      //send data to localhost route
      res.send(data);
    } catch (error) {
      console.error(error);
    }
  }
);

app.listen(PORT, () => console.log("Your server is running on PORT " + PORT));
