const axios = require('axios');

async function verifyPayment(reference) {
  try {
    const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer YOUR_SECRET_KEY`, // Replace with your Paystack secret key
      }
    });
    return response.data;
  } catch (error) {
    console.error('Payment verification failed:', error);
    throw error;
  }
}
