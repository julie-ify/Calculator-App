const bill = document.querySelector('#bill');
const people = document.querySelector('#people');
const each = document.querySelector('.each');
const total = document.querySelector('.total');
const tipPercentage = [...document.querySelectorAll('.tip')];
tipPercentage.forEach((tip) => {
  tip.addEventListener('click', (e) => {
    let tipNumber = tip.textContent;
    let billAmount = parseInt(bill.value);
    let Amount = 0;
    // if(bill.value === '' || people.value === '') {
    //   let p = document.createElement('p');
    //   p.innerText = 'Please fill bill and number of perple';
    //   p.classList.add('paragraph');
    //   document.body.appendChild(p)
    // }
    switch (tipNumber) {
      case '5%':
        Amount = (billAmount * 5) / 100;
        let lastValue1 = (Amount + billAmount) / parseInt(people.value);
        total.textContent = lastValue1.toFixed(2);

        let eachTip1 = Amount / people.value;
        let tipPerPerson1 = eachTip1.toFixed(2);
        each.textContent = `$${tipPerPerson1}`;


        bill.value = '';
        people.value = ''
        break;
      case '10%':
        Amount = (billAmount * 10) / 100;
        let lastValue2 = (Amount + billAmount) / parseInt(people.value);
        total.textContent = lastValue2.toFixed(2);

        let eachTip2 = Amount / people.value;
        let tipPerPerson2 = eachTip2.toFixed(2);
        each.textContent = `$${tipPerPerson2}`;

        bill.value = '';
        people.value = '';
        break;
      case '15%':
        Amount = (billAmount * 15) / 100;
        let lastValue3 = (Amount + billAmount) / parseInt(people.value);
        total.textContent = lastValue3.toFixed(2);

        let eachTip3 = Amount / people.value;
        let tipPerPerson3 = eachTip3.toFixed(2);
        each.textContent = `$${tipPerPerson3}`;

        bill.value = '';
        people.value = '';
        break;
      case '25%':
        Amount = (billAmount * 25) / 100;
        let lastValue4 = (Amount + billAmount) / parseInt(people.value);
        total.textContent = lastValue4.toFixed(2);

        let eachTip4 = Amount / people.value;
        let tipPerPerson4 = eachTip4.toFixed(2);
        each.textContent = `$${tipPerPerson4}`;

        bill.value = '';
        people.value = '';
        break;
      case '50%':
        Amount = (billAmount * 50) / 100;
        let lastValue5 = (Amount + billAmount) / parseInt(people.value);
        total.textContent = lastValue5.toFixed(2);

        let eachTip5 = Amount / people.value;
        let tipPerPerson5 = eachTip5.toFixed(2);
        each.textContent = `$${tipPerPerson5}`;

        bill.value = '';
        people.value = '';
        break;
      case tipNumber:
        tip.addEventListener('keypress', (e) => {
          if(e.key === 'Enter' && tipNumber >= 0){
          Amount = (billAmount * tipNumber) / 100;
          let lastValue6 = (Amount + billAmount) / parseInt(people.value);
          total.textContent = lastValue6.toFixed(2);

        let eachTip6 = Amount / people.value;
        let tipPerPerson6 = eachTip6.toFixed(2);
        each.textContent = `$${tipPerPerson6}`;

        bill.value = '';
        people.value = '';
          }
        })
        break;
      default:
        if(tipNumber === ''){
          return;
        }
        break;
    }
  });
});
