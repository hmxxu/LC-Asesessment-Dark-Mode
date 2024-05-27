if (document.querySelector(".popup")) {
  const button = document.querySelector(".button");
  const circle = document.querySelector(".circle");
  let buttonOn = false;

  button.addEventListener("click", () => {
    if (!buttonOn) {
      buttonOn = true;

      button.style.animation = "transformToGray 1s ease-in-out 0s forwards";
      circle.style.animation = "moveCircleRight 1s ease-in-out 0s forwards";
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ["appOn.js"],
        });
      });
    } else {
      buttonOn = false;
      button.style.animation = "transformToWhite 1s ease-in-out 0s forwards";
      circle.style.animation = "moveCircleLeft 1s ease-in-out 0s forwards";
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ["appOff.js"],
        });
      });
    }
  });
}
