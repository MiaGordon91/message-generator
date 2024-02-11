export {};
require('dotenv').config()

const PORT = 8000;
const express = require("express");
const cors = require("cors");

const app = express();

// this allows us to work with json when sending
// from the front end to the back end through POST requests
app.use(express.json());

app.use(cors());

const API_KEY = process.env.OPEN_API_KEY;

//define the route
// with asyn function with await keyword
app.post('/completions', async(req: any, res: { send: (arg0: any) => void; }) => {

    // options defines what kind of request this is going to be
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: req.body.message
                }
            ],
            max_tokens: 100,
        })   
    }


    try{
      // post request to this URL
      const response = await fetch('https://api.openai.com/v1/chat/completions', options)  
      const data = await response.json()
    
      //send data to localhost route
      res.send(data)
    }catch(error){
        console.error(error)
    }
})

app.listen(PORT, () => console.log("Your server is running on PORT " + PORT));
