
const groupBy = (array, key) => {

  return array.reduce((result, currentValue) => {

    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );

    return result;
  }, {}); 
};

function getItemQuantity(number, unit) {
	if(number === 1) {
		return number;
	}
	return number + ' ' + unit + 's';

}

function getItems(inputs) {
	let items = new Array();
	const inputsGroupedByBarcode = groupBy(inputs, 'Barcode');

	for (var barcode in inputsGroupedByBarcode) {
		let item = {};

		const itemList = inputsGroupedByBarcode[barcode]

		item.name = itemList[0].Name;
		item.quantity = getItemQuantity(itemList.length, itemList[0].Unit);
		item.price = itemList[0].Price;
		item.subtotal = itemList.length * itemList[0].Price;
		items.push(item);
	}

	return items;
}

function printItems(items) {
	let itemsInfo = '';
	for (var i = 0; i < items.length; i++) {
		let itemInfo = 'Name: ' + items[i].name + ', Quantity: '+ items[i].quantity + ', Unit price: ' + 
			items[i].price.toFixed(2) + ' (yuan), Subtotal: '+ items[i].subtotal.toFixed(2) +' (yuan)\n';
		itemsInfo = itemsInfo + itemInfo;
	}
	
	return itemsInfo;
}

function getTotalPrice(items) {
	let totalPrice = 0;
	for (var i = 0; i < items.length; i++) {
		totalPrice = totalPrice + items[i].subtotal;
	}

	return totalPrice;
}

function printInventory(inputs) {
	let items = getItems(inputs);

	return '***<store earning no money>Receipt ***\n' +
            printItems(items) +
            '----------------------\n' +
            'Total: ' + getTotalPrice(items).toFixed(2) + ' (yuan)\n' +
            '**********************\n';
}


module.exports = function main(inputs) {
    console.log("Debug Info");

    return printInventory(inputs);
};

