function display() {
	const content = document.querySelector('#content');
	const div = document.createElement('div');

	const h1 = document.createElement('h1');
	h1.textContent = 'Our Menu';
	div.appendChild(h1);

	const ul = document.createElement('ul');
	const menuItems = [
		'Grilled Cheese - $5',
		'Chocolate Cake (1 slice) - $4',
		'Pop - $1'
	];
	for (const menuItem of menuItems) {
		const li = document.createElement('li');
		li.textContent = menuItem;
		ul.appendChild(li);
	}
	div.appendChild(ul);

	content.textContent = '';
	content.appendChild(div);
}

export { display };