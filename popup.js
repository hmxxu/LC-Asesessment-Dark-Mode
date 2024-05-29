if (document.querySelector(".popup")) {
  const button = document.querySelector(".button");
  const circle = document.querySelector(".circle");

  // move button right instantly or in 1 sec
  function buttonOn(instant) {
    let time = instant ? "0" : "1";
    button.style.animation =
      "transformToGray " + time + "s ease-in-out 0s forwards";
    circle.style.animation =
      "moveCircleRight " + time + "s ease-in-out 0s forwards";
  }

  // move button left instantly or in 1 sec
  function buttonOff(instant) {
    let time = instant ? "0" : "1";
    button.style.animation =
      "transformToWhite " + time + "s ease-in-out 0s forwards";
    circle.style.animation =
      "moveCircleLeft " + time + "s ease-in-out 0s forwards";
  }

  // calls on and off script
  function app(on) {
    let file = on ? "appOn.js" : "appOff.js";
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: [file],
      });
    });
  }

  // Set button to correct side when opened
  chrome.storage.local.get(["darkMode"]).then((result) => {
    if (result.darkMode) {
      buttonOn(true);
    } else {
      buttonOff(true);
    }
  });

  // button pressed --> change darkMode var, Slide button, call script
  button.addEventListener("click", () => {
    chrome.storage.local.get(["darkMode"]).then((result) => {
      if (!result.darkMode) {
        chrome.storage.local.set({ darkMode: true });
        buttonOn(false);
        app(true);
      } else {
        chrome.storage.local.set({ darkMode: false });
        buttonOff(false);
        app(false);
      }
    });
  });
}
