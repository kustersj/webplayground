console.log("HELLO")

function parseToArray(csvString){
    //Split the array into rows, then split these rows into cells
    return csvString.split('\r\n').map(row => {
      return row.split(',')
    })
  }
  const csvAsArray = parseToArray(csvAsString)
  console.log(csvAsArray)

function tableCreate() {
    const body = document.body,
          tbl = document.createElement('table');
    tbl.style.width = '100px';
    tbl.style.border = '1px solid black';
  
    for (let i = 0; i < 3; i++) {
      const tr = tbl.insertRow();
      for (let j = 0; j < 2; j++) {
        if (i === 2 && j === 1) {
          break;
        } else {
          const td = tr.insertCell();
          td.appendChild(document.createTextNode(`Cell I${i}/J${j}`));
          td.style.border = '1px solid black';
          if (i === 1 && j === 1) {
            td.setAttribute('rowSpan', '2');
          }
        }
      }
    }
    body.appendChild(tbl);
  }
  
tableCreate();
