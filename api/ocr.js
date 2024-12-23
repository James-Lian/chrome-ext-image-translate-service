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
        const { inputImage } = req.body;
        
        console.log('happened')

        if (!inputImage) {
            return res.status(400).json({ error: 'ImageBase64 is required.' });
        }

        console.log('happened2')

        // Decode the Base64 string into a Buffer
        const imageBuffer = Buffer.from(inputImage, 'base64');

        console.log('happened3')

        // Create a Tesseract.js worker
        const worker = await createWorker('eng');

        console.log('happened4')

        const { data: { text } } = await worker.recognize(imageBuffer);

        console.log('happened5')

        await worker.terminate();

        console.log('happened6')

        // Send back the recognized text
        res.status(200).json({ text });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    };
