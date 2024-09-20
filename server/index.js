const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51PvqcCP1EsRYpQZoB6qrfvZG8jlXgbLEFYmcAhBX5oGDwOKr82vIK4P9Qq8pBXJ8SaLomJuex46NchcDVhvQk2Ki00tWIi0mYB');

const app = express();

app.use(cors({
    origin: ["http://localhost:5500", "http://localhost:5173", "https://usmani-academy-backend.vercel.app/", "https://usmani-academy-frontend.vercel.app/"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    allowedHeaders: "Content-Type,Authorization",
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

// English Payment Endpoint ($100)
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
                unit_amount: 100 * 100, // 100 dollars
                currency: 'usd',
            });

            if (price.id) {
                const session = await stripe.checkout.sessions.create({
                    payment_method_types: ['card'],  // Only allow card payments
                    line_items: [
                        {
                            price: price.id,
                            quantity: 1,
                        }
                    ],
                    mode: 'payment',
                    success_url: 'https://usmani-academy-frontend.vercel.app/success',
                    cancel_url: 'https://usmani-academy-frontend.vercel.app/cancelled',
                });

                res.json(session);
            }
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Robotics Payment Endpoint ($50)
app.post('/robotics-payment', async (req, res) => {
    try {
        const product = await stripe.products.create({
            name: "Robotics Payment Demo",
            description: "Demo product for Robotics form payment.",
            images: ["./logo.png"]
        });

        if (product) {
            const price = await stripe.prices.create({
                product: product.id,
                unit_amount: 50 * 100, // 50 dollars
                currency: 'usd',
            });

            if (price.id) {
                const session = await stripe.checkout.sessions.create({
                    payment_method_types: ['card'],  // Only allow card payments
                    line_items: [
                        {
                            price: price.id,
                            quantity: 1,
                        }
                    ],
                    mode: 'payment',
                    success_url: 'https://usmani-academy-frontend.vercel.app/success',
                    cancel_url: 'https://usmani-academy-frontend.vercel.app/cancelled',
                });

                res.json(session);
            }
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Math Payment Endpoint ($40)
app.post('/math-payment', async (req, res) => {
    try {
        const product = await stripe.products.create({
            name: "Math Payment Demo",
            description: "Demo product for Math form payment.",
            images: ["./logo.png"]
        });

        if (product) {
            const price = await stripe.prices.create({
                product: product.id,
                unit_amount: 40 * 100, // 40 dollars
                currency: 'usd',
            });

            if (price.id) {
                const session = await stripe.checkout.sessions.create({
                    payment_method_types: ['card'],  // Only allow card payments
                    line_items: [
                        {
                            price: price.id,
                            quantity: 1,
                        }
                    ],
                    mode: 'payment',
                    success_url: 'https://usmani-academy-frontend.vercel.app/success',
                    cancel_url: 'https://usmani-academy-frontend.vercel.app/cancelled',
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
