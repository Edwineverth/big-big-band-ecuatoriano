const {roundToTwo, solveTravelCosts} = require('./index');



describe('Expense division',()=>{
    test('Should return two decimal value', () => {
        expect(roundToTwo(1.213213)).toBe(1.21);
    });
    test('Should return not round', () => {
        expect(roundToTwo(10)).toBe(10);
    });
    test('Should return round two decimal', () => {
        expect(roundToTwo(10.005)).toBe(10.01);
    });
} )

describe('When solve travel costs ',()=>{
    test('Case 1', () => {
        expect(solveTravelCosts([10,20,30],3)).toBe(10);
    });
    test('Case 2', () => {
        expect(solveTravelCosts([15, 15.01, 3, 3.01],4)).toBe(11.99);
    });
    test('Case 3', () => {
        expect(solveTravelCosts([15, 14.99, 3, 2.99],4)).toBe(11.99);
    });
    test('Case 4', () => {
        expect(solveTravelCosts([999.1, 999.1, 999, 999.1],4)).toBe(0.06);
    });
    test('Case 4', () => {
        expect(solveTravelCosts([100.01, 99.99, 99.99],3)).toBe(0.01);
    });
} )
