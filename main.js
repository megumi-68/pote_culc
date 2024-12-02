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

    show.textContent = show.textContent + data;

    // 頭文字が0だったら除去
    var checkZero = String(show.textContent).slice(0, 1);
    console.log(`checkZero ${checkZero}`)
    if (checkZero === '0') {
      var cutZero = String(show.textContent).slice(1);
      show.textContent = Number(cutZero);
    } 
  }
  console.log(`数字入力${show.textContent}`)
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
    show.textContent = show.textContent + data;
  }
}

//計算
var calc = data => {
  if (currentValue === '') {
    return;
  }else if (flag === 0 && data !== "=") {
    flag = 1;

    operator = data;
    console.log(`operator_${operator}`)
   
    show.textContent = show.textContent + operator
    console.log(`show.textContent +  operator_${show.textContent}`)
  } else if (data === "=") {
    flag = 1;

    total = limitNum(eval(show.textContent));

    currentValue = "";
    show.textContent = total;

    console.log(`計算_${show.textContent}`)
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