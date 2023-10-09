import { Ship } from "../ship";


test('ship length',() => {
    let shipTest = Ship(3);
    expect(shipTest.length).toBe(3)

})

test('ship not sunk',() => {
    let shipTest = Ship(3);
    shipTest.hit()
    shipTest.hit()
    expect(shipTest.isSunk()).toBe(false)

})

test('ship sunk',() => {
    let shipTest = Ship(2);
    shipTest.hit()
    shipTest.hit()
    expect(shipTest.isSunk()).toBe(true);

})