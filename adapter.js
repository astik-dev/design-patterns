class LegacyPaymentGetaway {

    processTransaction(amount, currency) {
        console.log(`Processing payment of ${amount} ${currency} through Legacy Payment Getaway.`);
    }
}

class StripeGetaway {

    processPayment({ amount, currency }) {
        console.log(`Processing payment of ${amount} ${currency} through Stripe.`);
    }
}

class PayPalGetaway {

    makePayment(paymentAmount, paymentCurrency) {
        console.log(`Processing payment of ${paymentAmount} ${paymentCurrency} through PayPal.`);
    }
}


class StripeAdapter {

    constructor(stripeGetaway) {
        this.stripeGetaway = stripeGetaway;
    }

    processTransaction(amount, currency) {
        this.stripeGetaway.processPayment({ amount, currency });
    }
}

class PayPalAdapter {

    constructor(payPalGetaway) {
        this.payPalGetaway = payPalGetaway;
    }

    processTransaction(amount, currency) {
        this.payPalGetaway.makePayment(amount, currency);
    }
}



function clientCode() {

    const legacyPaymentGetaway = new LegacyPaymentGetaway();
    
    const stripeGetaway = new StripeGetaway();
    const paypalGetaway = new PayPalGetaway();

    const stripeAdapter = new StripeAdapter(stripeGetaway);
    const paypalAdapter = new PayPalAdapter(paypalGetaway);

    legacyPaymentGetaway.processTransaction(100, "USD");
    stripeAdapter.processTransaction(150, "USD");
    paypalAdapter.processTransaction(200, "EUR");
}

clientCode();
