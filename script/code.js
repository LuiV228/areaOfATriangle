let btn = document.querySelector("[data-btn]");
function calculateAreaOfTriangle() {
  // debugger, really helps to find problems. Thank you Joel

  let length = +document.getElementById(`length`).value;
  let height = +document.getElementById(`height`).value;
  let result = (length * height) / 2;

  switch (true) {
      case length < 0:
      alert(`Be Positive!`);
      document.getElementById(`result`).textContent = `Try Again?`;
      break;
    case height < 0:
      alert(`Negative height? Through the ground?`);
      document.getElementById(`result`).textContent = `Try Again?`;
      break;
    default:
      document.getElementById(`result`).textContent = result.toFixed(2) + ` meters squared`;
      break;
    }
}
btn.addEventListener(`click`, calculateAreaOfTriangle)