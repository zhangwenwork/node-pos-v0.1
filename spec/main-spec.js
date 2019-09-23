const printInventory = require('../main/main');

describe('pos', () => {
    var inputs;

    beforeEach(() => {
        inputs = [
            {
                Barcode: 'ITEM000000',
                Name: 'Coca-Cola',
                Unit: 'bottle',
                Price: 3.00
        
            },
            {
                Barcode: 'ITEM000000',
                Name: 'Coca-Cola',
                Unit: 'bottle',
                Price: 3.00
            },
            {
                Barcode: 'ITEM000000',
                Name: 'Coca-Cola',
                Unit: 'bottle',
                Price: 3.00
            },
            {
                Barcode: 'ITEM000000',
                Name: 'Coca-Cola',
                Unit: 'bottle',
                Price: 3.00
            },
            {
                Barcode: 'ITEM000000',
                Name: 'Coca-Cola',
                Unit: 'bottle',
                Price: 3.00
            },
            {
                Barcode: 'ITEM000001',
                Name: 'Sprite',
                Unit: 'bottle',
                Price: 3.00
            },
            {
                Barcode: 'ITEM000001',
                Name: 'Sprite',
                Unit: 'bottle',
                Price: 3.00
            },
            {
                Barcode: 'ITEM000004',
                Name: 'Battery',
                Unit: 'a',
                Price: 2.00
            }
        ];
    });

    it('should print correct text', () => {

        let actualText = printInventory(inputs);

        let expectText =
            '***<store earning no money>Receipt ***\n' +
            'Name: Coca-Cola, Quantity: 5 bottles, Unit price: 3.00 (yuan), Subtotal: 15.00 (yuan)\n' +
            'Name: Sprite, Quantity: 2 bottles, Unit price: 3.00 (yuan), Subtotal: 6.00 (yuan)\n' +
            'Name: Battery, Quantity: 1, Unit price: 2.00 (yuan), Subtotal: 2.00 (yuan)\n' +
            '----------------------\n' +
            'Total: 23.00 (yuan)\n' +
            '**********************\n';

        expect(actualText).toBe(expectText);
    });
});
