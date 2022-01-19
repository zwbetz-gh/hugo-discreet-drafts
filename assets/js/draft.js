(function () {
  const PASSWORD = 'please';
  const DIV_BACKGROUND_COLOR = '#fcfcfc';
  const DIV_ID = 'draft_div';
  const INPUT_ID = 'draft_input';

  const createDiv = () => {
    const div = document.createElement('div');
    div.id = DIV_ID;
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';
    div.style.position = 'fixed';
    div.style.top = 0;
    div.style.left = 0;
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.backgroundColor = DIV_BACKGROUND_COLOR;
    return div;
  };

  const removeDiv = () => {
    const div = document.getElementById(DIV_ID);
    div.remove();
  };

  const handleSubmit = event => {
    event.preventDefault();
    const inputPassword = document.getElementById(INPUT_ID).value;
    if (inputPassword === PASSWORD) {
      removeDiv();
    }
  };

  const createForm = () => {
    const form = document.createElement('form');
    form.addEventListener('submit', handleSubmit);
    return form;
  };

  const createLabel = () => {
    const label = document.createElement('label');
    label.htmlFor = INPUT_ID;
    label.innerHTML = `Type <strong>${PASSWORD}</strong> then hit <strong>Enter</strong>`;
    label.style.display = 'block';
    label.style.marginBottom = '1rem';
    return label;
  };

  const createInput = () => {
    const input = document.createElement('input');
    input.id = INPUT_ID;
    input.type = 'password';
    input.autocomplete = 'one-time-code';
    input.placeholder = 'Password';
    return input;
  };

  const main = () => {
    const div = createDiv();
    const form = createForm();
    const label = createLabel();
    const input = createInput();
    form.appendChild(label);
    form.appendChild(input);
    div.appendChild(form);
    document.body.appendChild(div);
  };

  main();
})();
