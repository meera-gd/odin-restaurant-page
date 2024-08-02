function display() {
	const content = document.querySelector('#content');
	const div = document.createElement('div');

	const h1 = document.createElement('h1');
	h1.textContent = 'Contact Us';
	div.appendChild(h1);

	const p = document.createElement('p');
	p.textContent = 'We can reached at 604-123-4567.';
	div.appendChild(p);

	content.textContent = '';
	content.appendChild(div);
}

export { display };