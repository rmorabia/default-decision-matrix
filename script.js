const button = document.querySelector(".submit")
const result = document.querySelector(".result")
const ME = document.querySelector("#ME")
const PE = document.querySelector("#PE")
const EE = document.querySelector("#EE")

const results = {
  '000': 'You should listen to fun podcasts or audiobooks!',
  '001': 'You should watch some TV or go on YouTube.',
  '010': 'You should do some chores.',
  '100': 'You should listen to some programming-related podcasts.',
  '110': 'You should listen to programming podcasts or do some chores.',
  '101': 'You should read an Instapaper article or a graphic novel.',
  '011': 'You should practice your mandolin!',
  '111': 'You should watch a programming talk or tutorial on YouTube.'
}

button.addEventListener("click", function() {
  result.textContent = results[convertInputsToString()]
})

const convertInputsToString = () => {
  return "" + Number(ME.checked) + Number(PE.checked) + Number(EE.checked)
}
