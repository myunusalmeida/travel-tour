const quote1 = document.getElementById("quote1");
const quote2 = document.getElementById("quote2");
const quote3 = document.getElementById("quote3");
const quote4 = document.getElementById("quote4");
const quote5 = document.getElementById("quote5");
const quote6 = document.getElementById("quote6");
const traveller1 = document.getElementById("traveller1");
const traveller2 = document.getElementById("traveller2");
const traveller3 = document.getElementById("traveller3");
const traveller4 = document.getElementById("traveller4");
const traveller5 = document.getElementById("traveller5");
const traveller6 = document.getElementById("traveller6");

traveller1.addEventListener("click", function () {
  quote1.classList.add("active-quote");
  traveller1.classList.add("active-traveller");

  quote2.classList.remove("active-quote");
  traveller2.classList.remove("active-traveller");
  quote3.classList.remove("active-quote");
  traveller3.classList.remove("active-traveller");
  quote4.classList.remove("active-quote");
  traveller4.classList.remove("active-traveller");
  quote5.classList.remove("active-quote");
  traveller5.classList.remove("active-traveller");
  quote6.classList.remove("active-quote");
  traveller6.classList.remove("active-traveller");
});

traveller2.addEventListener("click", function () {
  quote2.classList.add("active-quote");
  traveller2.classList.add("active-traveller");

  quote1.classList.remove("active-quote");
  traveller1.classList.remove("active-traveller");
  quote3.classList.remove("active-quote");
  traveller3.classList.remove("active-traveller");
  quote4.classList.remove("active-quote");
  traveller4.classList.remove("active-traveller");
  quote5.classList.remove("active-quote");
  traveller5.classList.remove("active-traveller");
  quote6.classList.remove("active-quote");
  traveller6.classList.remove("active-traveller");
});

traveller3.addEventListener("click", function () {
  quote3.classList.add("active-quote");
  traveller3.classList.add("active-traveller");

  quote1.classList.remove("active-quote");
  traveller1.classList.remove("active-traveller");
  quote2.classList.remove("active-quote");
  traveller2.classList.remove("active-traveller");
  quote4.classList.remove("active-quote");
  traveller4.classList.remove("active-traveller");
  quote5.classList.remove("active-quote");
  traveller5.classList.remove("active-traveller");
  quote6.classList.remove("active-quote");
  traveller6.classList.remove("active-traveller");
});

traveller4.addEventListener("click", function () {
  quote4.classList.add("active-quote");
  traveller4.classList.add("active-traveller");

  quote1.classList.remove("active-quote");
  traveller1.classList.remove("active-traveller");
  quote2.classList.remove("active-quote");
  traveller2.classList.remove("active-traveller");
  quote3.classList.remove("active-quote");
  traveller3.classList.remove("active-traveller");
  quote5.classList.remove("active-quote");
  traveller5.classList.remove("active-traveller");
  quote6.classList.remove("active-quote");
  traveller6.classList.remove("active-traveller");
});

traveller5.addEventListener("click", function () {
  quote5.classList.add("active-quote");
  traveller5.classList.add("active-traveller");

  quote1.classList.remove("active-quote");
  traveller1.classList.remove("active-traveller");
  quote2.classList.remove("active-quote");
  traveller2.classList.remove("active-traveller");
  quote3.classList.remove("active-quote");
  traveller3.classList.remove("active-traveller");
  quote4.classList.remove("active-quote");
  traveller4.classList.remove("active-traveller");
  quote6.classList.remove("active-quote");
  traveller6.classList.remove("active-traveller");
});

traveller6.addEventListener("click", function () {
  quote6.classList.add("active-quote");
  traveller6.classList.add("active-traveller");

  quote1.classList.remove("active-quote");
  traveller1.classList.remove("active-traveller");
  quote2.classList.remove("active-quote");
  traveller2.classList.remove("active-traveller");
  quote3.classList.remove("active-quote");
  traveller3.classList.remove("active-traveller");
  quote4.classList.remove("active-quote");
  traveller4.classList.remove("active-traveller");
  quote5.classList.remove("active-quote");
  traveller5.classList.remove("active-traveller");
});
