var selectedRate = 0;

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("finished").setAttribute("hidden", "")
})

function selectRate(value = 0) {
  removeSeletedRate()
  let rate = document.getElementById(value)
  rate.classList.add("rate__point-active")

  selectedRate = value
  console.log(selectedRate);
}

function removeSeletedRate() {
  let allRate = document.querySelectorAll(".rate__point")

  allRate.forEach(rate => {
    rate.classList.remove("rate__point-active")
  });
}

function submitRate() {
  let rating = document.getElementById("rating")

  rating.innerHTML = selectedRate

  document.getElementById("start").setAttribute("hidden", "")
  document.getElementById("finished").removeAttribute("hidden")
}