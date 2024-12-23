import { createWorker } from 'tesseract.js';

// Main handler for the Vercel function
module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }   

    try {
        // Parse the incoming request body for the Base64 image
        // const { imageBase64 } = req.body;

        // if (!imageBase64) {
        //     return res.status(400).json({ error: 'ImageBase64 is required.' });
        // }

        // // Decode the Base64 string into a Buffer
        // const imageBuffer = Buffer.from(imageBase64, 'base64');

        // // Create a Tesseract.js worker
        // const worker = await createWorker('eng');

        // const { data: { text } } = await worker.recognize(imageBuffer);

        // await worker.terminate();

        // Send back the recognized text
        text = "BRO COME ON"
        res.status(200).json({ text });
    } catch (error) {
        res.status(500).json({ error: "wait why tho" });
    }
    };
