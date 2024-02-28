"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//points file to access .env in root directory
const pathToEnv = path_1.default.resolve(__dirname, "../.env");
dotenv_1.default.config({ path: pathToEnv });
const PORT = process.env.PORT || 8000;
const app = (0, express_1.default)();
const OPEN_API_KEY = process.env.OPEN_API_KEY;
const EXPRESS_ROUTE = process.env.EXPRESS_ROUTE;
const REACT_APP_ROUTE = process.env.REACT_APP_ROUTE;
// this allows us to work with json when sending
// from the front end to the back end through POST requests
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Handle preflight OPTIONS requests
app.options('*', (0, cors_1.default)());
//allow requests from react frontend to avoid CORS policy restriction
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Credentials', 'true'),
        res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    res.setHeader("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTONS");
    next();
});
//define the express route
// with asyn function with await keyword that gets the response
app.post(`${EXPRESS_ROUTE}`, async (req, res) => {
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
        const response = await fetch("https://api.openai.com/v1/chat/completions", options);
        const data = await response.json();
        //send data to localhost route
        res.send(data);
    }
    catch (error) {
        console.error(error);
    }
});
app.listen(PORT, () => console.log("Your server is running on PORT " + PORT));
module.exports = app;
