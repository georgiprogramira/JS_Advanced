function solve() {
	let container = document.getElementById('exercise');

	container.addEventListener('click', generateItem);
	container.addEventListener('click', buyItems);

	function buyItems(e) {
		let furnitures = [];
		let decorationFactors = 0;

		if (e.target.tagName == 'BUTTON' && e.target.innerHTML == 'Buy') {
			let totalPrice = 0;
			let trElements = document.querySelectorAll('tbody tr');
			
			for (const trElement of trElements) {
				let checkbox = trElement.querySelector('td input[type="checkbox"]');
				if (checkbox.checked) {
					let name = trElement.children[1].children[0].textContent;
					furnitures.push(name);
					totalPrice += Number(trElement.children[2].children[0].textContent);
					decorationFactors += Number(trElement.children[3].children[0].textContent);
				}
			}

			let decFactor = decorationFactors / furnitures.length;

			let textareaElement = document.querySelector('textarea[disabled]');
			textareaElement.textContent = '';
			textareaElement.textContent += `Bought furniture: ${furnitures.join(', ')}\n`
			textareaElement.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
			textareaElement.textContent += `Average decoration factor: ${decFactor}`;
		}
	}

	function generateItem(e) {
		if (e.target.tagName == 'BUTTON' && e.target.innerHTML == 'Generate') {
			let dataStorage = document.getElementsByTagName('tbody')[0];
			let objects = JSON.parse(document.querySelector('textarea').value);

			for (const object of objects) {
				let trElement = document.createElement('tr');
				
				let imageContainer = document.createElement('td');
				let image = document.createElement('img');
				image.src = object.img;
				imageContainer.appendChild(image);
				
				let checkboxContainer = document.createElement('td');
				let checkboxElement = document.createElement('input');
				checkboxElement.type = 'checkbox';
				checkboxContainer.appendChild(checkboxElement);
				
				let name = document.createElement('td');
				let nameText = document.createElement('p');
				nameText.textContent = object.name;
				name.appendChild(nameText);
				
				
				let price = document.createElement('td');
				let priceText = document.createElement('p');
				priceText.textContent = object.price;
				price.appendChild(priceText);
				
				
				let decorationFactor = document.createElement('td');
				let decFactorText = document.createElement('p');
				decFactorText.textContent = object.decFactor;
				decorationFactor.appendChild(decFactorText);

				trElement.appendChild(imageContainer);
				trElement.appendChild(name);
				trElement.appendChild(price);
				trElement.appendChild(decorationFactor);
				trElement.appendChild(checkboxContainer);
				dataStorage.appendChild(trElement);
			}
		}
	}
}