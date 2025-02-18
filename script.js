//Exercise 1
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return true;
}

function showPrimes() {
    const input = document.getElementById('inputNumber').value;
    const n = parseInt(input, 10);
    const resultDiv = document.getElementById('result');
    
    if (isNaN(n)) {
      resultDiv.innerHTML = `<div class="alert alert-warning" role="alert">
        Not a Interger
      </div>`;
      return;
    }
    
    let primes = [];
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }

    resultDiv.innerHTML = `<p>${primes.join(', ') || 'None'}</p>`;
}

// Exercise 2
function chooseColor(color) {
    document.getElementById("helloWorld").style.color = color;
    
    const li = document.createElement("li");
    li.textContent = color;
    li.className = "list-group-item";
    
    document.getElementById("historyList").appendChild(li);
}

// Exercise 3
let names = [];

function addName() {
    const input = document.getElementById("nameInput");
    const name = input.value.trim();
    if (name !== "") {
    names.push(name);
    names.sort();
    updateList();
    }
    input.value = "";
    input.focus();
}

function updateList() {
    const list = document.getElementById("nameList");
    list.innerHTML = "";
    names.forEach(n => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = n;
    list.appendChild(li);
    });
}
