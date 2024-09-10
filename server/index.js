const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51PvqcCP1EsRYpQZoB6qrfvZG8jlXgbLEFYmcAhBX5oGDwOKr82vIK4P9Qq8pBXJ8SaLomJuex46NchcDVhvQk2Ki00tWIi0mYB');

const app = express();

app.use(cors({
    origin: ["http://localhost:5500", "http://localhost:5173", "https://test-hosting-5e4n.vercel.app", "https://test-hosting-eight.vercel.app"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    allowedHeaders: "Content-Type,Authorization",
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/english-payment', async (req, res) => {
    try {
        const product = await stripe.products.create({
            name: "English Payment Demo",
            description: "Demo product for English form payment.",
            images: ["./logo.png"]
        });

        if (product) {
            const price = await stripe.prices.create({
                product: product.id,
                unit_amount: 100 * 100,
                currency: 'usd',
            });

            if (price.id) {
                const session = await stripe.checkout.sessions.create({
                    line_items: [
                        {
                            price: price.id,
                            quantity: 1,
                        }
                    ],
                    mode: 'payment',
                    success_url: 'http://localhost:5173/success',
                    cancel_url: 'http://localhost:5173/cancelled',
                });

                res.json(session);
            }
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
