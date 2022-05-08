let i = 1;
const colors = ['js-redTraffic', 'js-yellowTraffic', 'js-greenTraffic'];
const removeClass = () => {
  if (i === 0) {
    document.getElementById(colors[i + 2]).classList.remove('color-active');
    return;
  }
  document.getElementById(colors[i - 1]).classList.toggle('color-active');
};
const setTrafficColorActive = () => {
  removeClass();
  document.getElementById(colors[i]).classList.add('color-active');
  ++i;
  if (i === 3) {
    i = 0;
  }
};

export { setTrafficColorActive };
