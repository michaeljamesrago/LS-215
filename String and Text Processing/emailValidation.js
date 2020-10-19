"use strict"

function isValidEmail(email) {
  let addressParts = email.split('@');
  if (addressParts.length !== 2) return false;
  let [ mailbox, domain ] = addressParts;
  if (/[^A-Za-z0-9]/.test(mailbox)) return false;
  let domainParts = domain.split('.');
  if (domainParts.length < 2) return false;
  for (let i = 0; i < domainParts.length; i += 1) {
    if (/[^A-Za-z]/.test(domainParts[i]) || domainParts[i].length === 0)
    return false;
  }
  return true;
}

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false
