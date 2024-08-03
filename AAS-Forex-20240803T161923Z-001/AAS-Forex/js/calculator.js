


// function that takes in rate, currency type, amount and then calculates the amount it costs to buy/sell said currency
function calculator() {

    // take input and set variables
    var rateType = document.getElementById('rate-select').value;
    var currency = document.getElementById('currency-select').value;
    var amount = parseFloat(document.getElementById('amount').value);
    var output = "hello";
    document.getElementById('result-message').innerText = output;

    // Validate input
    if (rateType == "" || currency == "" || isNaN(amount)) {
        output = "Please make sure all the fields have been filled out";
        document.getElementById('result-message').innerText = output;
        return;
    // make sure amount is > 0
    } else if (amount <= 0) {
        output = "You must enter an amount greater than zero";
        document.getElementById('result-message').innerText = output;
        return;
    }

    //
    var rate = rates[currency][rateType];
    var total = 0;
    var totalRounded = 0;

    // check if the ratetype is sell, else it is buy
    if (rateType == "sell") {
        total = amount / rate;
        var totalRounded = Math.round(total * 100.0) / 100.0;
        output = "Buying " + amount + " " + currency + " costs you = " + totalRounded + " euros"; 
    } else {
        total = amount / rate;
        var totalRounded = Math.round(total * 100.0) / 100.0;
        output = "Selling " + amount + " " + currency + " gets you = " + totalRounded + " euros";
    }

    // output results to result-message
    document.getElementById('result-message').innerText = output;


}