const stripe = require ('stripe');
const Platform = require('./Platform');
class Stripe extends Platform {
    constructor(sKey) {
        super();
        this.stripeClient = stripe(sKey);
    }

    sendPayment(payer, payee, amount, message, transactionId, cb) {
        console.log("calling stripe payment for transaction", transactionId)
        const paymentObj = this.generatePaymentObject('cus_CA8cJFFfl5rakn', amount);
        const callbackFunc = super.generateCallbackFunction(payer, payee, amount, transactionId, cb);
        // this.stripeClient.charges.create(paymentObj)
        //     .then(charge => {
        //         console.log(charge)
        //         callbackFunc(null, charge)
        //     })
        //     .catch (err => callbackFunc(err, null))     
        callbackFunc(null, "SUCCESSFUL PAYMENT")  
    }
    generatePaymentObject(toStripe, paymentAmt) {
        return {
            amount: '20',
            currency: 'usd',
            source: 'tok_visa',
            destination: {
                account: 'cus_CA8cJFFfl5rakn'
            }
        }
    }
}

module.exports = Stripe
