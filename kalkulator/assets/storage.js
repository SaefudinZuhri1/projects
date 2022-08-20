const CACHE_KEY = calculation_history;

function checkForStorage () {
  return typeof (Storage) !== "undefined"
}

 const history = {
  firstNumber: calculator.firstNumber,
  secondNumber:  calculator.displayNumber,
  operator: calculator.operator,
  result: result
 }

function putHistory(data) {
  if (checkForStorage()) {
    let historyData = null;
    if (localStorage.getItem(CACHE_KEY) === null)  {
      historyData = [];
    } else {
      historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
    }

    historyData.unshift(data);

    if (historyData.length > 5) {
      historyData.pop();
    }

    localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
  }
}

// Function untuk mendapatkan data dari localStorage

function showHistory() {
  if (checkForStorage()) {
    return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
  } else {
    return [];
  }
}

// Function untuk merender data riwayat pada kalkulasi 

function renderHistory() {
  const historyData = showHistory();
  let historyList = document.querySelector("#historyList")

  // Selalu hapus konten elemen HTML pada elemen historyList agar tidak menampilkan data ganda
  historyList.innerHTML = "";

for (let history of historyData) {
  let row = document.createElement('tr');
  row.innerHTML = "<td>" + history.firstNumber + "</td>";
  row.innerHTML += "<td>" + history.operator + "</td>";
  row.innerHTML += "<td>" + history.secondNumber + "</td>";
  row.innerHTML += "<td>" + history.resulet + "<td>"

  historyList.appendChild(row);
}
}

renderHistory();
