import './Footer.css';

const links = [
  {
    img: '/linkedin.png',
    link: 'https://www.linkedin.com/in/maria-paula-colombo/',
    alt: 'Linkedin',
  },
  {
    img: '/github.png',
    link: 'https://github.com/paucolombo/',
    alt: 'Github',
  },
  {
    img: '/codewars.png',
    link: 'https://www.codewars.com/users/paucolombo',
    alt: 'Codewars',
  },
  {
    img: '/gmail.png',
    link: 'mailto:mpaucolombo@gmail.com',
    alt: 'Gmail',
  },
];

const Footer = () => {
  const footer = document.createElement('footer');
  footer.innerHTML = `<h4>Pau Colombo. All Right Reserved 2024</h4>`;
  const ul = document.createElement('ul');
  ul.classList.add('linksList');
  for (let i = 0; i < links.length; i++) {
    const li = document.createElement('li');
    li.classList.add('linksPortfolio');
    li.innerHTML = `<a href=${links[i].link} target='_blank'><img src=${links[i].img} alt=${links[i].alt}></a>
    `;
    ul.appendChild(li);
  }
  footer.appendChild(ul);
  document.body.appendChild(footer);
};

export default Footer;
