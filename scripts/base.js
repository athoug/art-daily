/*
	Thanks to Rich and his article "Load JSON file locally using pure Javascript" 
	I finally managed to load JSON to my file and actually have it work on github
	here's the article link
	https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
*/
function loadJSON(callback) {
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType('application/json');
	xobj.open('GET', './scripts/data.json', true);
	xobj.onreadystatechange = function () {
		if (xobj.readyState == 4 && xobj.status == '200') {
			// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
			callback(xobj.responseText);
		}
	};
	xobj.send(null);
}

function init() {
	loadJSON(function (response) {
		// Parse JSON string into object
		var JSON_data = JSON.parse(response);

		//  create the cards if the data loaded correctly
		if (Object.keys(JSON_data).length > 0) {
			// load the dom with the nodes
			for (let i = 0; i < JSON_data.art.length; i++) {
				document.querySelector('.card-wrapper').insertAdjacentHTML(
					'afterbegin',
					`<a href="${JSON_data.art[i].source}" target="_blank">
          <div class="card-container">
            <div class="card-description">
              <p class="card-number">${JSON_data.art[i].number}</p>
              <p class="card-title">${JSON_data.art[i].title}</p>
            </div>
            <div class="card-image">
						  <img
              src="${JSON_data.art[i].source}/thumbnail.${JSON_data.art[i].format}" 
              alt="art image - ${JSON_data.art[i].title}"
              style="mix-blend-mode: ${JSON_data.art[i].blendMode}"
              />
					  </div>
          </div>
			</a>`
				);
			}
		}
	});
}

init();
