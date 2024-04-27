const romanConverterForm = document.getElementById("roman-converter-form");
const input = document.getElementById("number");
const submitBtn = document.getElementById("submit-button");
const output = document.querySelector(".output-container");

romanConverterForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

const romanConverter = (val) => { // 32 // 32  // 2 // 2
  const ansArr = [];
  let str = "";
  let divider = 1000; // 1000 // 100 // 10 // 10 // 1
  while (val !== 0) {
    let divisor = Math.floor(val / divider);  // 0 // 0 // 3 // 0 // 2
    let key = divisor * divider; // 0 // 0 // 30 // 0 // 2
    
    console.log(`divider: ${divider} , divisor: ${divisor}, val: ${val} , key: ${key}`)
    if (key === 0) {
        divider /= 10;
        continue;
    }


    switch (key) {
      case 1:
        str = "I";
        break;
      case 2:
        str = "II";
        break;
      case 3:
        str = "III";
        break;
      case 4:
        str = "IV";
        break;
      case 5:
        str = "V";
        break;
      case 6:
        str = "VI";
        break;
      case 7:
        str = "VII";
        break;
      case 8:
        str = "VIII";
        break;
      case 9:
        str = "IX";
        break;
      case 10:
        str = "X";
        break;
      case 20:
        str = "XX";
        break;
      case 30:
        str = "XXX";
        break;
      case 40:
        str = "XL";
        break;
      case 50:
        str = "L";
        break;
      case 60:
        str = "LX";
        break;
      case 70:
        str = "LXX";
        break;
      case 80:
        str = "LXXX";
        break;
      case 90:
        str = "XC";
        break;
      case 100:
        str = "C";
        break;
      case 200:
        str = "CC";
        break;
      case 300:
        str = "CCC";
        break;
      case 400:
        str = "CD";
        break;
      case 500:
        str = "D";
        break;
      case 600:
        str = "DC";
        break;
      case 700:
        str = "DCC";
        break;
      case 800:
        str = "DCCC";
        break;
      case 900:
        str = "CM";
        break;
      case 1000:
        str = "M";
        break;
      case 2000:
        str = "MM";
        break;
      case 3000:
        str = "MMM";
        break;
    }
    ansArr.push(str);
    val %= divider; //  2 0
  }

  // }

  // }
  const result = ansArr.join("");
  return result;
};

const calculate = () => {
  const inputValue = Number(input.value);

  if (input.value === "") {
    alert("Enter any value");
  } else if (inputValue < 1) {
    alert("Please enter a number greater than or equal to 1 ");
    return;
  } else if (inputValue > 3999) {
    alert("Please enter a number less than or equal to 3999");
    return;
  } else {
    output.classList.remove("hidden");
    output.innerText = romanConverter(inputValue);
  }
};

submitBtn.addEventListener("click", calculate);
