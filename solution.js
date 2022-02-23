function massRover(data) {
  let inputs = data.slice(1);
  let results = [];
  for (var i = 0; i < inputs.length; i++) {
    let result = controller(inputs[i]);
    results = [...results, result];
  }
  return results;
}

function controller(data) {
  let pointer = data[0].split(" ")[2];
  let x = parseInt(data[0].split(" ")[0]);
  let y = parseInt(data[0].split(" ")[1]);
  let navigations = data[1].split("");
  for (var i = 0; i < navigations.length; i++) {
    if (navigations[i] === "M") {
      [x, y] = move(pointer, x, y);
    } else {
      pointer = setPointer(pointer, navigations[i]);
    }
  }
  return { x, y, pointer };
}

function setPointer(p, d) {
  let c = "";
  switch (p) {
    case "N":
      c = d === "R" ? "E" : "W";
      break;
    case "S":
      c = d === "R" ? "W" : "E";
      break;
    case "E":
      c = d === "R" ? "S" : "N";
      break;
    case "W":
      c = d === "R" ? "N" : "S";
    default:
      break;
  }
  return c;
}

function move(p, x, y) {
  let x_axis = x;
  let y_axis = y;
  switch (p) {
    case "N":
      y_axis = y_axis + 1;
      break;
    case "S":
      y_axis = y_axis - 1;
      break;
    case "E":
      x_axis = x_axis + 1;
      break;
    case "W":
      x_axis = x_axis - 1;
    default:
      break;
  }
  return [x_axis, y_axis];
}

const values = ["5 5", ["1 2 N", "LMLMLMLMM"], ["3 3 E", "MMRMMRMRRM"]];

console.log(massRover(values));
