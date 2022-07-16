const fs = require('fs');
async function addOrder(data) {
    console.log(data);
    try {
        const customerOrders = JSON.parse(fs.readFileSync("./assets/customers.json").toString());
        customerOrders.push(data);
        fs.writeFileSync('./assets/customers.json', JSON.stringify(customerOrders));
        console.log(customerOrders);
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}
async function editOrder(data) {
    console.log(data);
    try {
        const customerOrders = JSON.parse(fs.readFileSync("./assets/customers.json").toString());
        var index = customerOrders.findIndex(order => order.Order_Number == data.Order_Number);
        console.log(index);
        console.log(customerOrders[index]);
        customerOrders[index].Order_Due_Date = data.Order_Due_Date;
        customerOrders[index].Customer_name = data.Customer_name;
        customerOrders[index].Customer_Address = data.Customer_Address;
        customerOrders[index].Customer_Phone = data.Customer_Phone;
        customerOrders[index].OrderTotal = data.OrderTotal;
        console.log(customerOrders[index]);
        fs.writeFileSync('./assets/customers.json', JSON.stringify(customerOrders));
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}
async function deleteOrder(id) {
    console.log(id);
    try {
        var customerOrders = JSON.parse(fs.readFileSync("./assets/customers.json").toString());
        customerOrders = customerOrders.filter(customer => {
            return customer.Order_Number != id;
        })
        fs.writeFileSync('./assets/customers.json', JSON.stringify(customerOrders));
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}
module.exports = {
    addOrder,
    editOrder,
    deleteOrder
};