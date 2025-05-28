function updateChoices() {
  const contButton = document.getElementById("nextCon");
  const yesButton = document.getElementById("nextYes");
  const noButton = document.getElementById("nextNo");
  const fightButton = document.getElementById("fightButt");

  // hide buttons based on the current scene
  if (currentScene === 6) {
    yesButton.style.display = "inline-block"; // show yes button
    noButton.style.display = "inline-block";  // show no button
    contButton.style.display = "none"; // hide "continue" button
  } else {
    yesButton.style.display = "none";  // hide yes button
    noButton.style.display = "none";   // hide no button
    contButton.style.display = "inline-block"; // show continue button
  }

  // show fight button when current scene is 19
  if (currentScene === 19) {
    fightButton.style.display = "inline-block"; //show fight button
  } else {
    fightButton.style.display = "none"; // hide fight button
  }

  // if current scene is 90, game ends. 
  if (currentScene === 90) {
    contButton.style.display = "none";
    document.getElementById("speech").textContent += " [The End]";
  }
}
