var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table2");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazon"
});
//establishing connection with the SQL Database
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected as id : " + connection.threadId + "\n");
  startApp();
});

//CLI-TABLE2 set up
function printTable(res) {
  
  var table = new Table({
    head: ["Item ID", "Product Name", "Department", "Cost (USD)", "In-stock"],
    colWidths: [10, 40, 30, 12, 10]
  });
  for (var i = 0; i < res.length; i++) {
    table.push([
      res[i].itemID,
      res[i].product_name,
      res[i].department_name,
      res[i].price,
      res[i].stock_quantity
    ]);
  }
  console.log(table.toString());
}


var startApp = function() {
  connection.query("SELECT * FROM products", function(err, res) {
    printTable(res);

    inquirer
      .prompt([
        {
          name: "item",
          type: "input",
          message: "What would you like to purchase? (Enter the Item ID)"
        },
        {
          name: "quantity",
          type: "input",
          message: "How many would you like to purchase?"
        }
      ])
      .then(function(answer) {
        var itemID = answer.item;

        var product = res[itemID - 1];

		var newQuantity = product.stock_quantity - answer.quantity;
		
		var totalCost = answer.quantity * product.price;

        if (newQuantity >= 0) {
          connection.query("UPDATE products SET ? WHERE itemID = ?", [
            { stock_quantity: newQuantity },
            itemID
		  ]);
		  console.log("Total cost of purchase is : " + totalCost + " USD")
		  
          startApp();
        } else {
          console.log(
            "Insufficient quantity!."
		  );
		  
          startApp();
        }
      });
  });
};
