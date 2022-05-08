const showModaleW = () => {
  for (const iterator of document.getElementsByClassName('js-modwindow')) {
    iterator.addEventListener('click', () => {
      for (const iterator of document.getElementsByClassName(
        'modaleWindowJS'
      )) {
        iterator.classList.toggle('show');
      }
    });
  }
};
export { showModaleW };
