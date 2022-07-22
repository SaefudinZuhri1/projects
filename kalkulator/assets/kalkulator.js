// Objek digunakan untuk menyimpan data kondisi kalkulator

const calculator = {
  displayNumber: '0',
  operator: null,
  firstNumber: null,
  isWaitForSecondNumber: false
};

// Update angka pada layar kalkulator

function updateDisplay() {
  document.querySelector('#displayNumber').innerText = calculator.displayNumber;
}

function clearCalculator() {
  calculator.displayNumber = '0';
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.isWaitForSecondNumber = false;
}

// Fungsi untuk menambahkan angka

function inputDigit(digit) {
  if (calculator.displayNumber === '0') {
    calculator.displayNumber = digit;
  } else {
    calculator.displayNumber += digit;    
  }
}

// Variabel button untuk event click

const buttons = document.querySelectorAll('.button');

for (const button of buttons) {
  button.addEventListener('click', function (event) {
    // Mendapatkan object elemen yang di klik
    const target = event.target;

    // Membuat fungsi clear
    if (target.classList.contains('.clear')) {
      clearCalculator()
      updateDisplay()
      return;
    }

    inputDigit(target.innerText);
    updateDisplay();
  })
}

// Agar console tidak error ketika input angka

function inversNumber() {
  if (calculator.displayNumber === '0') {
    return;
  }
  calculator.displayNumber = calculator.displayNumber * -1;
}


// Penggunaan operator hitung pada kalkulator 
function handleOperator(operator) {
  if (!calculator.isWaitForSecondNumber) {
    calculator.operator = operator;
    calculator.isWaitForSecondNumber = true;
    calculator.firstNumber = calculator.displayNumber;

    // Mengatur ulang nilai display number supaya tombol berikutnya dimulai dari angka awal lagi

    calculator.displayNumber = '0';    
  } else {
    alert('Operator sudah diterapkan')
  }
}

// Perhitungan Kalkulator

function performCalculator() {
  if (calculator.firstNumber == null || calculator.operator == null) {
    alert('Anda belum menetapkan operator perhitungan!');
    return;
  }

  let result = 0;
  if (calculator.operator === '+') {
    result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
  } else {
    result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
  } 

  calculator.displayNumber = result;
}
