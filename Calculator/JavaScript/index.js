console.log("Hello world");

let output = document.getElementById("output");

ins = (n) => {
  output.value = output.value + n;
};

equal = () => {
  let finalValue = output.value;
  output.value = eval(finalValue);
};

bkspc = () => {
  let b = output.value;
  output.value = b.substring(0, b.length - 1);
};

c = () => {
    output.value = "";
};
