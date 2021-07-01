import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import NavBar from './views/components/navbar';
import App from './views/app';
import swRegister from './utils/sw-register';

// document.addEventListener('DOMContentLoaded', () => {
//   restaurantCard(restaurants.restaurants);
// });
const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('DOMContentLoaded', () => {
  app.renderPage();
  swRegister();
});
