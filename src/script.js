function displayPoem(response) {

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 5,
    cursor: null,
  });
}


function poemGenerate(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instruction");
  apiKey = "cc127dfco815025900e3bb779a4actf3"; 
  let prompt = `User instruction: Generate Ethiopian poem about ${instructionInput.value}`;
  let context =
    "Your mission is to generate very short ethiopian poem only 4 lines and separate each lines in <br \> and sign in with 'SheCodes AI' with <strong> element not in the beginning but the bottom of that poem";
  apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);

  console.log(context);
  console.log(prompt);
}


let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", poemGenerate);