import './Card.css';

const Card = (character) => {
  const div = document.createElement('div');
  const main = document.querySelector('main');
  div.classList.add('characterCard');
  div.innerHTML = `
      <div class="cardContainer">
      <h2>${character.fullName}</h2>
      <img class="imgCard" src=${character.imageUrl} alt=${character.fullName}>
      <span>${character.title}</span>
      <span>House: ${character.family}</span>
     </div>
  `;
  main.appendChild(div);
};
export default Card;
