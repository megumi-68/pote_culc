var show = document.getElementById('number-text');
var total = ''; 
var operator = ''; 
var currentValue = ''; 
var flag = 0;

//数字入力
var number = data => { 
  if (currentValue.length <= 8) {
    flag = 0;
    currentValue += data;
    show.textContent = currentValue;
  }
};

//0入力
var zero = data => {
  if(currentValue === '0') {
    return;
  } else if (currentValue.length <= 8){
    flag = 0;
    currentValue += data;
    show.textContent = currentValue;
  }
}

//小数点(.)
var point = data => {
  if (currentValue === '') {
    return;
  } else if (!currentValue.includes('.')) {
    currentValue += data;
    show.textContent = currentValue;
  }
}

//計算
var calc = data => {
  if (currentValue === '') {
    return;
  }else if (flag === 0 && data !== "=") {
    flag = 1;

    var formula = total + operator + currentValue;
    total = eval(formula);

    operator = data;
    currentValue = '';
    show.textContent = total;
  } else if (flag === 1 && data === "=") {
    var formula = total + operator + total;
    total = limitNum(eval(formula));

    currentValue = "";
    show.textContent = total;
  } else if (data === "=") {
    flag = 1;

    var formula = total + operator + currentValue;
    total = limitNum(eval(formula));

    currentValue = "";
    show.textContent = total;
  } else {
    operator = data;
  }
};

//小数点以下
function limitNum(num) {
  return Math.round(num*10000000)/10000000;
}

//AC
var clear = document.getElementById('clear-btn')
clear.addEventListener('click', () => {
  reset();
});

function reset() {
  operator = '';
  total = '';
  currentValue = '';
  flag = 0;
  show.textContent = '0';
};