const fromDropdown = document.getElementById("from-dropdown");
const toDropdown = document.getElementById("to-dropdown");
const fromFlag = document.getElementById("fromImg");
const toFlag = document.getElementById("toImg");

for (currency in countryList) {
  const fromOption = document.createElement("option");
  fromOption.value = currency;
  fromOption.text = currency;
  fromDropdown.append(fromOption);

  const toOption = document.createElement("option");
  toOption.value = currency;
  toOption.text = currency;
  toDropdown.append(toOption);
}

fromDropdown.addEventListener("change", () => {
  fromFlag.setAttribute(
    "src",
    `https://flagsapi.com/${countryList[fromDropdown.value]}/flat/64.png`
  );
});
toDropdown.addEventListener("change", () => {
  toFlag.setAttribute(
    "src",
    `https://flagsapi.com/${countryList[toDropdown.value]}/flat/64.png`
  );
});

fromFlag.setAttribute("src", `https://flagsapi.com/US/flat/64.png`);
toFlag.setAttribute("src", `https://flagsapi.com/IN/flat/64.png`);
fromDropdown.value = "USD";
toDropdown.value = "INR";

let convertCurrency = (event) => {
  event.preventDefault();
  const amt = document.getElementById("amt").value;
  const fromCurrency = fromDropdown.value;
  const toCurrency = toDropdown.value;
  console.log(`amount=${amt}, from=${fromCurrency}, to=${toCurrency}`);

  if (amt === "") {
    alert("Please enter a valid amount");
    return;
  } else {
    fetch(
      `https://v6.exchangerate-api.com/v6/0fdd6f67e49b4f514f131d7d/pair/${fromCurrency}/${toCurrency}`
    )
      .then((response) => response.json())
      .then((data) => {
        const rate = data.conversion_rate;
        console.log(`rate=${rate}`);
        const result = amt * rate;
        console.log(`result=${result}`);
        document.querySelector(
          ".msg"
        ).innerHTML = `${amt} ${fromCurrency} = ${result} ${toCurrency}`;
      });
  }
};

const exBtn = document.getElementById("exBtn");
exBtn.addEventListener("click", convertCurrency);
