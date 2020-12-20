'use strict';

const initialObject = {
    name: 'Vladimir',
    age: 22,
    phone: {
        home: 123456,
        work: 88888888888,
        some: {
            data: 111,
            value: 333
        } 
    }
};

function deepCopy(obj) {
  const cloneObj = {};
  for(let key in obj) {
    if (typeof obj[key] === 'object') {
      cloneObj[key] = deepCopy(obj[key]);
    } else {
      cloneObj[key] = obj[key];
    }
  }
  return cloneObj;
}

let cloneObject = deepCopy(initialObject);

initialObject.phone.some.data = 555;
alert(initialObject.phone.some.data);
alert(cloneObject.phone.some.data);

