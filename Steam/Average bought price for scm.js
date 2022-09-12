function getAvgPrice(itemName, currencyLength){
	var items = document.getElementsByClassName("market_listing_row market_recent_listing_row");
	var price = 0.00;
	var count = 0;

	for (i = 0; i < items.length; i++) {
		var tmp = items[i].getElementsByClassName("market_listing_item_name_block")[0].getElementsByClassName("market_listing_item_name")[0].getElementsByTagName("a");
		if (tmp[tmp.length-1]?.innerHTML === itemName) {
			var strPrice = items[i].getElementsByClassName("market_listing_their_price")[0]
							 .getElementsByClassName("market_table_value")[0]
							 .getElementsByClassName("market_listing_price")[0].innerHTML.slice(0,-currencyLength);
			var numPrice = -parseFloat(strPrice.replace(/,/g, '.'));
			price += numPrice;
			count++;
		}
	}

	console.log("Total entries: ",items.length);
	console.log("Desired entries: ", count);
	console.log("Spent on desired items: ", price);
	console.log("Average price per item: ", price/count);
}

getAvgPrice("Prisma 2 Case", 4);