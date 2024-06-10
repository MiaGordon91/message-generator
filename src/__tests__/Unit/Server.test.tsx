import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
import app from '../../../api/index';

const request = require("supertest");

describe("Test post request to external api and response from fetch call", () => {

    const data = [
        {
            "id": "chatcmpl-9FjmwqIVSuTIsFDWUEi6vVSemEYzQ",
            "object": "chat.completion",
            "created": 1713537958,
            "model": "gpt-3.5-turbo-0125",
            "choices": [
                {
                    "index": 0,
                    "message": {
                        "role": "assistant",
                        "content": "Happy Birthday to my amazing Grandad! I am so grateful to have you in my life. You are not only my sister but also my best friend and confidante. I wish you all the happiness and love in the world on your special day. May this year be filled with joy, laughter, and unforgettable memories. Cheers to you, my dear sister, and may all your dreams and wishes come true. I love you endlessly! 🎉🎂🎈❤️"
                    },
                    "logprobs": null,
                    "finish_reason": "stop"
                }
            ],
            "usage": {
                "prompt_tokens": 23,
                "completion_tokens": 99,
                "total_tokens": 122
            },
            "system_fingerprint": "fp_d9767fc5b9"
        }
    ]

    let server: { close: (arg0: jest.DoneCallback) => void; };

    beforeAll((done) => {
        fetchMock.resetMocks();
        server = app.listen(12000, done); // Start the server before running tests
    });
    
    afterAll((done) => {
        server.close(done); // Close the server after all tests are done
    });

    it("post data to external api and return expected response via fetch call", async () => {
        const mockRequest = { body: 
            {message: "Write me a birthday message for my Grandad.Please cap message to 80 words max"}};
        const mockResponse = {data};

        //mock the fetch function to return a mocked response
        fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

        // use supertest to send a mock HTTP request
        const response = await request(app)
            .post('/')
            .send(mockRequest.body)
         
        expect(response.body).toEqual(mockResponse);
        expect(response.status).toEqual(200);
    });


    it("incorrect endpoint breaks post request", async () => {
        const requestMessage = {body: 
            {message: "Write me a birthday message for my Grandma.Please cap message to 80 words max"}};
    
        // use supertest to call an incorrect endpoint in post request
        const response = await request(app)
            .post('/test')
            .send(requestMessage.body)
        
        expect(response.status).toBe(404);
    });
}); 
