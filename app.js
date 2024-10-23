// const name = window.document.querySelector(".h1")
// const name1 = window.document.getElementsByTagName("h1")
// console.log(name);
// console.log(name1);
//  const title = document.querySelector("#id")
//  const title1 = document.getElementsByTagName("button")
//  console.log(title);
//  console.log(title1);

// const button = document.getElementById('myButton');
// console.log(button);
//  button.click()
// console.log(`${button} кнопка нажата`);
const input = document.getElementById('myInput');
const heading = document.getElementById('myHeading');

// Добавляем обработчик события на изменение значения input
input.addEventListener('input', () => {
    // Устанавливаем значение h1 равным значению input
    heading.textContent = input.value;
});