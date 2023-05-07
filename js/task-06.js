const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
    const validLength = inputEl.dataset.length;
    const currentLength = inputEl.value.length;

    if (currentLength === Number(validLength)) {
      inputEl.classList.remove("invalid");
      inputEl.classList.add("valid");
    } else {
      inputEl.classList.remove("valid");
      inputEl.classList.add("invalid");
    }
  });
