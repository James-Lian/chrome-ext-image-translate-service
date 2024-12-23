import { createWorker } from 'tesseract.js';
import { franc, francAll } from 'franc'

// Main handler for the Vercel function
module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    // Parse the incoming request body for the Base64 image
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({ error: 'Image is required.' });
    }

    // Create a Tesseract.js worker
    const worker = await createWorker('eng');

    const { data: { text } } = await worker.recognize(imageBuffer);

    await worker.terminate();

    // Send back the recognized text
    res.status(200).json({ text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
