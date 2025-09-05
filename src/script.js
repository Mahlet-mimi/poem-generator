function poemGenerate(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: ["Piling dirt on dirt"],
    autoStart: true,
    delay: 5,
    cursor: null,
  });
  
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", poemGenerate);