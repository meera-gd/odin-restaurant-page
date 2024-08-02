import './style.css'
import RestaurantInterior from './restaurant-interior.jpeg';

function display() {
	const content = document.querySelector('#content');
	const div = document.createElement('div');

	const h1 = document.createElement('h1');
	h1.textContent = 'King\'s Restaurant';
	div.appendChild(h1);

	const p = document.createElement('p');
	p.textContent = '"The best restaurant in town"';
	div.appendChild(p);

	const image = new Image();
	image.src = RestaurantInterior;
	image.classList.add('homepage-photo');
	div.appendChild(image);

	content.textContent = '';
	content.appendChild(div);
}

export { display };