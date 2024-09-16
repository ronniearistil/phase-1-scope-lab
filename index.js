// Declare customerName in global scope without let or const
customerName = 'bob';

// Function to uppercase the customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Declare bestCustomer globally without 'let'
function setBestCustomer() {
  bestCustomer = 'not bob';  // No 'let' means it's global
}

// Overwrite the best customer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant leastFavoriteCustomer
const leastFavoriteCustomer = 'some customer';

// Attempt to change leastFavoriteCustomer (which will throw an error)
function changeLeastFavoriteCustomer() {
  // This will fail since leastFavoriteCustomer is a const
  leastFavoriteCustomer = 'another customer';  
}
