/*Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".*/

var defangIPaddr = function(address) {
  
     return address.replaceAll('.','[.]')

};
// Output: "1[.]1[.]1[.]1"
console.log(defangIPaddr("1.1.1.1"))