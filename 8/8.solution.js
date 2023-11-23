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
  ]>
  `;
};