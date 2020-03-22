let table_data = [
{'Name of State / UT': "Andhra Pradesh" , 'Total Cases' : 5 , 'Recovered' : 0 , 'Deaths' : 0},
{'Name of State / UT': "Bihar" , 'Total Cases' : 2, 'Recovered' : 0, 'Deaths' : 1},
{'Name of State / UT': "Chhattisgarh" , 'Total Cases' : 1, 'Recovered' :0 , 'Deaths' : 0},
{'Name of State / UT': "Delhi" , 'Total Cases' : 29, 'Recovered' : 5 , 'Deaths' : 1},
{'Name of State / UT': "Gujarat" , 'Total Cases' : 18, 'Recovered' : 0, 'Deaths' : 1},
{'Name of State / UT': "Haryana" , 'Total Cases' : 21, 'Recovered' : 0, 'Deaths' : 0},
{'Name of State / UT': "Himachal Pradesh" , 'Total Cases' : 2, 'Recovered' : 0, 'Deaths' : 0},
{'Name of State / UT': "Karnataka" , 'Total Cases' : 26, 'Recovered' : 2, 'Deaths' : 1},
{'Name of State / UT': "Kerala" , 'Total Cases' : 52, 'Recovered' : 3, 'Deaths' : 0},
{'Name of State / UT': "Madhya Pradesh" , 'Total Cases' : 4, 'Recovered' : 0, 'Deaths' : 0},
{'Name of State / UT': "Maharashtra" , 'Total Cases' : 67, 'Recovered' : 0, 'Deaths' : 2},
{'Name of State / UT': "Odisha" , 'Total Cases' : 2, 'Recovered' : 0, 'Deaths' : 0},
{'Name of State / UT': "Puducherry" , 'Total Cases' : 1, 'Recovered' : 0, 'Deaths' : 0},
{'Name of State / UT': "Punjab" , 'Total Cases' : 21, 'Recovered' : 0, 'Deaths' : 1},
{'Name of State / UT': "Rajasthan" , 'Total Cases' : 24, 'Recovered' : 3, 'Deaths' : 0},
{'Name of State / UT': "Tamil Nadu" , 'Total Cases' : 7, 'Recovered' : 1, 'Deaths' : 0},
{'Name of State / UT': "Telengana" , 'Total Cases' : 22, 'Recovered' : 1, 'Deaths' : 0},
{'Name of State / UT': "Chandigarh" , 'Total Cases' : 5, 'Recovered' : 0, 'Deaths' : 0},
{'Name of State / UT': "Jammu and Kashmir" , 'Total Cases' : 4, 'Recovered' : 0, 'Deaths' : 0},
{'Name of State / UT': "Ladakh" , 'Total Cases' : 13, 'Recovered' : 0, 'Deaths' : 0},
{'Name of State / UT': "Uttar Pradesh" , 'Total Cases' : 27, 'Recovered' : 9, 'Deaths' : 0},
{'Name of State / UT': "Uttarakhand" , 'Total Cases' : 3, 'Recovered' : 0, 'Deaths' : 0},
{'Name of State / UT': "West Bengal" , 'Total Cases' : 4, 'Recovered' : 0, 'Deaths' : 0},
];

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table = document.querySelector("table");
let data = Object.keys(mountains[0]);

generateTable(table, table_data);
generateTableHead(table, data);
