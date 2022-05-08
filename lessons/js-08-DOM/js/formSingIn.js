const resetValue = (id) => {
  document.getElementById(`${id}`).value = '';
};
const redBorderToggle = (id, error) => {
  const element = document.getElementById(`${id}`);
  error
    ? element.classList.add('red-border')
    : element.classList.remove('red-border');
};
const singIn = (event) => {
  event.preventDefault();
  const form = new FormData(event.target);
  const login = form.get('login');
  const pass = form.get('password');

  redBorderToggle('js-inputLogin', !login);
  redBorderToggle('js-inputPass', !pass);
  if (login && pass) {
    console.log(`Login: ${login}  Password: ${pass}`);
    resetValue('js-inputLogin');
    resetValue('js-inputPass');
  }
};

export { singIn };
