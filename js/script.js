const term = document.getElementsByClassName("term")[0];
const def = document.getElementsByClassName("definition")[0];
const reveal = document.getElementById("reveal");
const next = document.getElementById("next");

let words = {
  "Insert hindi word here 0": "Insert english meaning here",
  "Insert hindi word here 1": "Insert english meaning here",
  "Insert hindi word here 2": "Insert english meaning here",
  "Insert hindi word here 3": "Insert english meaning here",
  "Insert hindi word here 4": "Insert english meaning here",
  "Insert hindi word here 5": "Insert english meaning here",
  "Insert hindi word here 6": "Insert english meaning here",
  "Insert hindi word here 7": "Insert english meaning here",
  "Insert hindi word here 8": "Insert english meaning here",
  "Insert hindi word here 9": "Insert english meaning here",
};

let data = Object.entries(words);

let curr = -1;

function getNextTerm() {
  curr++;
  if (curr > data.length) {
    curr = 0;
  }
  console.log(data[curr]);
  return data[curr];
}

reveal.addEventListener("click", function () {
  console.log("reveal button clicked");
  def.style.display = "block";
});

next.addEventListener("click", function () {
  console.log("next button clicked");
  def.style.display = "none";
  pair = getNextTerm()
  term.innerHTML = pair[0]
  def.innerHTML = pair[1]
//   def.innerHTML = getNextTerm()[1];
});
