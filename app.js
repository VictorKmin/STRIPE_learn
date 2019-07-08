const express = require('express');
const stripe = require('stripe')('sk_test_CWDPF3V7XPJryz0uWsTVk0NZ00EoBs4eix');
const app = express();
const hbs = require('hbs');

app.set('view engine', "hbs");
app.set('views', __dirname + '/views');
app.use(express.json());
const secretKey = 'sk_test_CWDPF3V7XPJryz0uWsTVk0NZ00EoBs4eix';
const publishKey = 'pk_test_TpdI3dm1akX9lS8c630o8Hez00vTBYutYI';

app.get('/', (req, res)=> {
    res.render('index')
});

app.get('/success', (req,res)=> {
    res.render('success')
});

app.post('/pay', async (req, res)=> {
    let stripeToken = req.body.stripeToken;
    console.log(req.body);
    console.log(stripeToken);
    const charge = await stripe.charges.create({
        amount: "3000",
        currency: 'usd',
        source: stripeToken,
        description: 'bla-bla-bla',
        statement_descriptor: 'Custom descriptor'
    })
    res.redirect('/success')
});
app.listen(3000, err => {
    if (err) console.log(err);
    else console.log('listen 3000');
});