import './Header.css';
import Card from '../card/Card';

const Header = (data) => {
  const header = document.createElement('header');
  header.innerHTML = `
      <div class="container">
      <img class="logo" src="/got.png" alt="Game of Thrones">
      <div class=search>    
      <input type="search" placeholder="Search Character" id="gotSearch"
        name='gotSearch'/>
      <button id= "searchButton">Search</button>
      <button id= "showAllButton">Show All</button>
      </div></div>
  `;
  document.body.appendChild(header);
  const input = document.getElementById('gotSearch');
  input.addEventListener('keyup', getSearchCharacter);
  input.addEventListener('keydown', pressEnter);
  const searchButton = document.getElementById('searchButton');
  const showAllButton = document.getElementById('showAllButton');
  searchButton.addEventListener('click', searchCharacter);
  showAllButton.addEventListener('click', showAllCharacters);
  function pressEnter(e) {
    if (e.key === 'Enter') {
      searchCharacter();
    }
  }

  function showAllCharacters() {
    const main = document.querySelector('main');
    main.innerHTML = '';
    input.value = '';
    data.map((character) => {
      Card(character);
    });
  }
  function getSearchCharacter() {
    let selectedCharacter = input.value.toLowerCase();
    return selectedCharacter;
  }
  function searchCharacter() {
    const main = document.querySelector('main');
    const results = data.filter((character) =>
      character.fullName.toLowerCase().includes(getSearchCharacter())
    );
    if (results.length != 0) {
      main.innerHTML = '';
      const characters = results.map((character) => {
        Card(character);
      });
    } else {
      main.innerHTML = `<span class="notFound">There are no Game of Thrones character under the name you searched.</span>`;
    }
  }
};
export default Header;
