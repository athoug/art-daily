// get the data of the art projects
data = {};

const loadCards = async () => {
	const response = await fetch(
		'https://github.com/athoug/art-daily/blob/main/data.json',
		{ mode: 'no-cors' }
	)
		.then((res) => res.json())
		.then((res) => {
			data = res;
		})
		.catch((error) => {
			console.error(error);
			data = {};
		});

	if (Object.keys(data).length > 0) {
		// load the dom with the nodes
		for (let i = 0; i < data.art.length; i++) {
			document.querySelector('.card-wrapper').insertAdjacentHTML(
				'afterbegin',
				`<a href="https://www.athoug.com" target="_blank">
          <div class="card-container">
            <div class="card-description">
              <p class="card-number">${data.art[i].number}</p>
              <p class="card-title">${data.art[i].title}</p>
            </div>
            <div class="card-image">
						  <img
              src="${data.art[i].source}/thumbnail.${data.art[i].format}" 
              alt="art image - ${data.art[i].title}"
              style="mix-blend-mode: ${data.art[i].blendMode}"
              />
					  </div>
          </div>
			</a>`
			);
		}
	} else {
		console.error('problem loading data');
	}
};

loadCards();
