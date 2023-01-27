let value = +prompt("Введите значение!");

if (typeof value === "number") {
  if (isNaN(value)) {
    console.log("Упс, кажется, вы ошиблись");
  } else {
    if (value % 2) {
      console.log(" Это нечетное знчение ");
    } else {
      console.log(" Это четное знчение ");
    }
  }
} else {
  console.log("Упс, кажется, вы ошиблись");
}
