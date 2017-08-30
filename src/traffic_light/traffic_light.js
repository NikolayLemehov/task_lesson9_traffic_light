import './traffic_light.styl';

function traffic_light(selector) {
  const widgetTemplate = `
    <div class="lamp red-light" data-operator="lightRed"></div>
    <div class="lamp yellow-light" data-operator="lightYellow"></div>
    <div class="lamp green-light" data-operator="lightGreen"></div>
    `;

  const rootElement = document.querySelector(selector);

  let btnRed;
  let btnYellow;
  let btnGreen;

  function renderStatic() {
    rootElement.innerHTML = widgetTemplate;

    btnRed = rootElement.querySelector('.red-light');
    btnYellow = rootElement.querySelector('.yellow-light');
    btnGreen = rootElement.querySelector('.green-light');
  }

  function handleEvents() {
    btnRed.addEventListener('click', lightLamp);
    btnYellow.addEventListener('click', lightLamp);
    btnGreen.addEventListener('click', lightLamp);
  }

  function lightLamp() {
    switch (this.getAttribute('data-operator')) {
      case 'lightRed':
        btnRed.classList.remove('not-shine');
        btnRed.classList.add('shines');

        btnYellow.classList.remove('shines');
        btnGreen.classList.remove('shines');
        btnYellow.classList.add('not-shine');
        btnGreen.classList.add('not-shine');
/*
        this.style.backgroundColor = 'red';
        btnYellow.style.backgroundColor = '';
        btnGreen.style.backgroundColor = '';
*/
        break;
      case 'lightYellow':
        btnYellow.classList.remove('not-shine');
        btnYellow.classList.add('shines');

        btnRed.classList.remove('shines');
        btnGreen.classList.remove('shines');
        btnRed.classList.add('not-shine');
        btnGreen.classList.add('not-shine');
/*
        btnRed.style.backgroundColor = '';
        this.style.backgroundColor = 'yellow';
        btnGreen.style.backgroundColor = '';
*/
        break;
      case 'lightGreen':
        btnGreen.classList.remove('not-shine');
        btnGreen.classList.add('shines');

        btnRed.classList.remove('shines');
        btnYellow.classList.remove('shines');
        btnRed.classList.add('not-shine');
        btnYellow.classList.add('not-shine');
/*
        btnRed.style.backgroundColor = '';
        btnYellow.style.backgroundColor = '';
        this.style.backgroundColor = 'green';
*/
        break;
    }
  }

  renderStatic();
  handleEvents();
}

export {traffic_light}
