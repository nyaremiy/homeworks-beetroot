import { playList } from './playList.js';
const listSong = () => {
  playList.forEach((item) => {
    const liItem = document.createElement('li');
    liItem.innerText = `Автор - ${item.author}, пісня - ${item.song}`;
    document.getElementById('listSongs').appendChild(liItem);
  });
};

export { listSong };
