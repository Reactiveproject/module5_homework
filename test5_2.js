let x;

switch (typeof x) {
  case "number":
    console.log("X - является числом");
    break;
  case "string":
    console.log("X - является строкой");
    break;
  case "boolean":
    console.log("X - вляется логическим выражением");
    break;
  default:
    console.log("Тип x не определён");
}
