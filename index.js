const readline = require('readline');


let cl = readline.createInterface(process.stdin, process.stdout);
let readLineConsole = (q) => {
    return new Promise((res, _) => {
        cl.question(q, answer => {
            res(answer);
        })
    });
};

function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

function solveTravelCosts (cash, numberTravelers) {
    let totalCash = cash.reduce((acc, val) => acc + val, 0);

    let avg = roundToTwo(roundToTwo(totalCash) / +numberTravelers);

    let valueToExchange = cash.reduce((acc, val) => {

        if ((val - avg) >= 0) {
            acc += roundToTwo(val - avg);

        }
        return acc;
    }, 0)

    return valueToExchange
}

(async function main() {
    let numberTravelers;
    let cash = []
    let result = []
    while (numberTravelers !== '0') {

        numberTravelers = await readLineConsole('Number of travelers: ');
        if (!!+numberTravelers) {
            for (let i = 0; i < numberTravelers; i++) {
                let value = (await readLineConsole('$')).replace(',', '.');
                if (+value < 1000) {
                    cash.push(+value);
                } else {
                    console.log('Number not entered. Reason (number greater than 1000)');
                    i--;
                }
            }
            result.push(`$${solveTravelCosts(cash,numberTravelers)}`);
            cash = [];
        }

    }
    cl.close();
    result.forEach(value => console.log(value))

})();

module.exports = {roundToTwo, solveTravelCosts} ;
