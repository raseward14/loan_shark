const Loan = require('./loan');
const Payment = require('./payment');
const User = require('./user')

// Payment belongs to Loan
// Payment.belongsTo(Loan, {
//   foreignKey: 'loan_id',
// });

// Loans have many Payments
// Loan.hasMany(Payment, {
//   foreighKey: 'loan_id',
//   onDelete: 'CASCADE'
// })

// Loans belong to User
// Loan.belongsTo(User, {
//   foreighKey: 'user_id',
// })

// User has many Loans
// User.hasMany(Loan, {
//   foreighKey: 'user_id',
//   onDelete: 'CASCADE'
// })

module.exports = {
  Loan,
  Payment,
  User
};