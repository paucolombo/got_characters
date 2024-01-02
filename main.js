import Header from './components/header/Header';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';

const getCharactersData = async () => {
  try {
    let data = await fetch('https://thronesapi.com/api/v2/Characters').then(
      (res) => res.json()
    );

    showContent(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
getCharactersData();

const showLoading = (isLoad) => {
  if (isLoad === false) {
    document.body.innerHTML = '';
  } else {
    document.body.innerHTML = `<img class="loading" src="/spinner.svg" alt="loading">`;
  }
};
showLoading(true);

const showContent = (data) => {
  showLoading(false);
  Header(data);
  const main = document.createElement('main');
  document.body.appendChild(main);
  const characters = data.map((character) => {
    Card(character);
  });
  Footer();
};
