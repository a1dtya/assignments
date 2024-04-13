/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  
  let totalCategory = {};
  // Iterate through transactions
  transactions.forEach(function(transaction){
    let category = transaction.category;
    let price = transaction.price;
    // If category already exists, update total spent
    if (totalCategory[category]) {
      totalCategory[category] += price;
    } else {
      // If category doesn't exist, initialize with current price
      totalCategory[category] = price;
    }
  });

  // Convert object to array of objects
  let result = Object.keys(totalCategory).map(function(category) {
    return {
      category: category,
      totalSpent: totalCategory[category]
    };
  });
  return result;
    
  


}

module.exports = calculateTotalSpentByCategory;


