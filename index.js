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
    let totalCash = cash.reduce((acc, val) => {
        return acc + val.value
    }, 0);

    let avg = roundToTwo(roundToTwo(totalCash) / +numberTravelers);

    let valueToExchange = cash.reduce((acc, val) => {

        if ((val.value - avg) >= 0) {
            acc += roundToTwo(val.value - avg);

        }
        return acc;
    }, 0)

    return valueToExchange
}

(async function main() {
    let numberTravelers;
    let cash = []
    let persons = []
    let result = []
    let bn = 1
    while (bn!==0){
        console.log(`Menu de opciones
        1. Ingresas al sistema
        2. Salir del sistema
        3. Busqueda de nombre
        `)
        let itemMenu = await readLineConsole('Digite el item: ');
        switch (+itemMenu) {
            case 1:
                while (numberTravelers !== '0') {
                    numberTravelers = await readLineConsole('Number of travelers: ');
                    if (!!+numberTravelers) {
                        for (let i = 0; i < numberTravelers; i++) {
                            let name = (await  readLineConsole('Digite nombre de la persona: '))
                            let value = (await readLineConsole('$')).replace(',', '.');
                            if (+value < 1000) {
                                cash.push({name:name, value:+value });
                            } else {
                                console.log('Number not entered. Reason (number greater than 1000)');
                                i--;
                            }
                        }
                        result.push(`$${solveTravelCosts(cash,numberTravelers)}`);
                        persons = cash
                        cash = [];
                    }

                }

                result.forEach(value => console.log(value))
                break;
            case 2:
                bn = 0
                cl.close();
                break
            case 3:
                let namePerson = await readLineConsole('Ingrese la persona a buscar: ');
                let person = persons.find(item => item.name === namePerson);
                console.log(person);

                // Match a string that ends with abc, similar to LIKE '%abc'
                if (theString.match(/^.*abc$/))
                {
                    /*Match found */
                }
                break;

        }
    }

})();

module.exports = {roundToTwo, solveTravelCosts} ;
