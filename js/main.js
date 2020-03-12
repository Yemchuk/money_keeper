let startBtn = document.getElementById("start"),
  budgetValue = document.querySelector(".budget-value"),
  dayBudget = document.querySelector(".daybudget-value"),
  levelValue = document.querySelector(".level-value"),
  expensesValue = document.querySelector(".expenses-value"),
  optionalexpensesValue = document.querySelector(".optionalexpenses-value"),
  incomeValue = document.querySelector(".income-value"),
  monthsavings = document.querySelector(".monthsavings-value"),
  yearsavings = document.querySelector(".yearsavings-value"),
  expensesItem = document.getElementsByClassName("expenses-item"),
  expensesBtn = document.querySelector(".expenses-item-btn"),
  optionalexpensesBtn = document.querySelector(".optionalexpenses-btn"),
  optionalexpensesItem = document.getElementsByClassName(
    "optionalexpenses-item"
  ),
  incomeItem = document.querySelector(".choose-income"),
  savings = document.querySelector("#savings"),
  sumValue = document.querySelector(".choose-sum"),
  percentValue = document.querySelector(".choose-percent"),
  yearValue = document.querySelector(".year-value"),
  monthValue = document.querySelector(".month-value"),
  dayValue = document.querySelector(".day-value"),
  countBtn = document.querySelector(".count-budget-btn"),
  money,
  time,
  appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    saving: false
  };

toggleBtns = (toggle = true) => {
  if (toggle) {
    expensesBtn.setAttribute("disabled", "true");
    optionalexpensesBtn.setAttribute("disabled", "true");
    countBtn.setAttribute("disabled", "true");
  } else {
    expensesBtn.removeAttribute("disabled");
    optionalexpensesBtn.removeAttribute("disabled");
    countBtn.removeAttribute("disabled");
  }
};
toggleBtns();

startBtn.addEventListener("click", () => {
  toggleBtns(false);
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
  money = +prompt("Ваш бюджет на месяц?", "");

  while (isNaN(money) || money == "" || money == null) {
    money = prompt("Ваш бюджет?", "");
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();

  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDay();
});

expensesBtn.addEventListener("click", () => {
  let sum = 0;

  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
      b = expensesItem[++i].value;

    if (
      typeof a != null &&
      typeof b != null &&
      a != "" &&
      b != "" &&
      a.length < 50
    ) {
      console.log("Все верно");
      appData.expenses[a] = b;
      sum += +b;
    } else {
      i = i - 1;
    }
  }
  expensesValue.textContent = sum;
});
optionalexpensesBtn.addEventListener("click", () => {
  for (let i = 0; i < optionalexpensesItem.length; i++) {
    let opt = optionalexpensesItem[i].value;
    console.log(opt);
    appData.optionalExpenses[i] = opt;
    optionalexpensesValue.textContent += appData.optionalExpenses[i] + " ";
  }
});

countBtn.addEventListener("click", () => {
  if (appData.budget != undefined) {
    let sumExpens = +expensesValue.textContent;
    appData.moneyPerDay = ((appData.budget - sumExpens) / 30).toFixed();
    dayBudget.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "Высокий уровень достатка";
    } else {
      levelValue.textContent = "Произошла ошибка";
    }
  } else {
    dayBudget.textContent = "Произошла ошибка";
  }
});

incomeItem.addEventListener("input", () => {
  let items = incomeItem.value;
  appData.income = items.split(", ");
  incomeValue.textContent = appData.income;
});

savings.addEventListener("click", () => {
  appData.saving == true ? (appData.saving = false) : (appData.saving = true);
});

sumValue.addEventListener("input", () => {
  if (appData.saving == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value;
    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    monthsavings.textContent = appData.monthIncome.toFixed(1);
    yearsavings.textContent = appData.yearIncome.toFixed(1);
  }
});

percentValue.addEventListener("input", () => {
  if (appData.saving == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value;
    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    monthsavings.textContent = appData.monthIncome.toFixed(1);
    yearsavings.textContent = appData.yearIncome.toFixed(1);
  }
});
