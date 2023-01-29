let value = +prompt("Введите значение!");

if ((typeof value != "number") || (isNaN(value))) {
    console.log("Упс, кажется, вы ошиблись");
  } else {
    if (value % 2) {
      console.log(" Это нечетное значение ");
    } else {
      console.log(" Это четное значение ");
    }
}
