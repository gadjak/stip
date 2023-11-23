const getContent_8 = () => {
  return `<!DOCTYPE employees [
    <!ELEMENT employees (employee+)>
    <!ELEMENT employee (lastName, firstName, middleName, address, phone, position, department)>
  
    <!ELEMENT lastName (#PCDATA)>
    <!ELEMENT firstName (#PCDATA)>
    <!ELEMENT middleName (#PCDATA)>
  
    <!ELEMENT address (index, settlementType, region, district, city, street, house, apartment)>
    <!ELEMENT index (#PCDATA)>
    <!ELEMENT settlementType (#PCDATA)>
    <!ELEMENT region (#PCDATA)>
    <!ELEMENT district (#PCDATA)>
    <!ELEMENT city (#PCDATA)>
    <!ELEMENT street (#PCDATA)>
    <!ELEMENT house (#PCDATA)>
    <!ELEMENT apartment (#PCDATA)>
  
    <!ELEMENT phone (home, mobile)>
    <!ELEMENT home (#PCDATA)>
    <!ELEMENT mobile (#PCDATA)>
  
    <!ELEMENT position (#PCDATA)>
    <!ELEMENT department (#PCDATA)>

    <!ATTLIST employee employeeID ID #REQUIRED>
    <!ATTLIST address addressID ID #REQUIRED>
    <!ATTLIST phone phoneID ID #REQUIRED>
    <!ATTLIST position positionID ID #REQUIRED>
    <!ATTLIST department departmentID ID #REQUIRED>

    1. employee: ID єлемента, що представляє окремого співробітника, і містить інші елементи, які деталізують особисту інформацію про нього.

    2. address: ID єлемента, який містить адресу, і сам складається з інших елементів, що деталізують поштову адресу.

    2. phone: ID єлемента, який містить номери телефонів (домашній та мобільний).

    4. position, department: ID єлементів, що містять інформацію про посаду та відділ співробітника.
  ]>
  `;
};