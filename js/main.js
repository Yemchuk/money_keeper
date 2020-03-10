// Получить кнопку "Начать расчет" через id
const start = document.getElementById("start"),
  //Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div>)
  budget = document.getElementsByClassName(".budget-value"),
  daybudget = document.getElementsByClassName(".daybudget-value"),
  level = document.getElementsByClassName(".level-value"),
  expenses = document.getElementsByClassName(".expenses-value"),
  optionalexpenses = document.getElementsByClassName(".optionalexpenses-value"),
  income = document.getElementsByClassName(".income-value"),
  monthsavings = document.getElementsByClassName(".monthsavings-value"),
  yearsavings = document.getElementsByClassName(".yearsavings-value"),
  //Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
  expensesItem = document.querySelectorAll(".expenses-item"),
  //Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной.
  expensesBtn = document.querySelector(".expenses-item-btn"),
  optionalexpensesBtn = document.querySelector(".optionalexpenses-btn"),
  //Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
  optionalexpensesItems = document.querySelectorAll(".optionalexpenses-item"),
  // Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
  chooseIncome = document.querySelector(".choose-income"),
  savings = document.querySelector("#savings"),
  chooseSum = document.querySelector("choose-sum"),
  choosePercent = document.querySelector("choose-percent"),
  year = document.querySelector("year-value"),
  month = document.querySelector("month-value"),
  day = document.querySelector("day-value");
