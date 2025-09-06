window.onload = function () {
  let span = document.querySelector(".add_text");
  let button = document.querySelector(".submit");
  let input = document.querySelector(".input");

  let array = ["Developer", "Student", "Programmer", "Designer"];
  let restart = false; // Flag to restart typing when a word is added

  button.addEventListener("click", function() {
    let user_choice = input.value.trim();
    if (user_choice !== "") {
      array.unshift(user_choice); // Add to the start
      console.log("array", array);
      input.value = "";
      restart = true; // Set the restart flag
    } else {
      input.value = "Please enter a valid string";
    }
  });

  const typeEffect = async () => {
    while (true) {
      for (let i = 0; i < array.length; i++) {
        if (restart) {
          restart = false; // Reset the flag
          span.textContent = ""; //set the current display content to ""
          i = 0; // Start from the newly added word
        }

        let word = array[i];

        // Typing effect
        for (let j = 0; j < word.length; j++) {
          span.textContent += word[j];
          await new Promise(res => setTimeout(res, 200));
          if (restart) break; // Break early if restart flag is set
        }

        await new Promise(res => setTimeout(res, 1000));

        // Deleting effect
        for (let j = word.length; j > 0; j--) {
          span.textContent = span.textContent.substring(0, j - 1);
          await new Promise(res => setTimeout(res, 100));
          if (restart) break; // Break early if restart flag is set
        }

        await new Promise(res => setTimeout(res, 500));
      }
    }
  };

  typeEffect();
};
