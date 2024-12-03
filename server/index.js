const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(cors({
    // origin: ["http://localhost:5500", "http://localhost:5173", "https://usmani-academy-backend.vercel.app/", "https://usmani-academy-frontend.vercel.app/"],
    origin: "*",
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
                unit_amount: 100 * 100, // 40 dollars
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

app.post('/computer-networking', async (req, res) => {
    try {
        const product = await stripe.products.create({
            name: "Computer Networking Course",
            description: "Demo product for Math form payment.",
            images: ["./logo.png"]
        });

        if (product) {
            const price = await stripe.prices.create({
                product: product.id,
                unit_amount: 100 * 100, // 40 dollars
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

app.post('/programming', async (req, res) => {
    try {
        const product = await stripe.products.create({
            name: "Programming payment",
            description: "Demo product for Math form payment.",
            images: ["./logo.png"]
        });

        if (product) {
            const price = await stripe.prices.create({
                product: product.id,
                unit_amount: 100 * 100, // 40 dollars
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

app.post('/asma-ul-husna', async (req, res) => {
    try {
        const product = await stripe.products.create({
            name: "Asma-ul-husna",
            description: "Demo product for Math form payment.",
            images: ["./logo.png"]
        });

        if (product) {
            const price = await stripe.prices.create({
                product: product.id,
                unit_amount: 70 * 100, // 40 dollars
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

app.post('/islamic-organzations', async (req, res) => {
    try {
        const product = await stripe.products.create({
            name: "Islamic Organization Course",
            description: "Demo product for Math form payment.",
            images: ["./logo.png"]
        });

        if (product) {
            const price = await stripe.prices.create({
                product: product.id,
                unit_amount: 100 * 100, // 40 dollars
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

app.post('/tafseer-of-surahs', async (req, res) => {
    try {
        const product = await stripe.products.create({
            name: "Tafseer of Surahs Course",
            description: "Demo product for Math form payment.",
            images: ["./logo.png"]
        });

        if (product) {
            const price = await stripe.prices.create({
                product: product.id,
                unit_amount: 100 * 100, // 40 dollars
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

app.post('/financial-literacy', async (req, res) => {
    try {
        const product = await stripe.products.create({
            name: "Islamic Financial Literacty Course",
            description: "Demo product for Math form payment.",
            images: ["./logo.png"]
        });

        if (product) {
            const price = await stripe.prices.create({
                product: product.id,
                unit_amount: 100 * 100, // 40 dollars
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

app.post('/happy-muslim', async (req, res) => {
    try {
        const product = await stripe.products.create({
            name: "How to be a Happy Muslim Course",
            description: "Demo product for Math form payment.",
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