function calculateParamsBoy(param, age, dataSet) {
	const data = dataSet[age];
	let res;
	for (const ind in data) {
		if (param >= data[ind].from && param <= data[ind].to) {
			res = data[ind];
		}
	}
	return res;
}

function showInfoBoy(info) {
	const resultArea = document.getElementsByClassName('result-info')[0];
	const name = document.getElementById('result-info-name');
	const description = document.getElementById('result-info-description');
	const img = document.getElementById('result-info-img');
	const printButton = document.getElementById('print-boy');
	const tableSection = document.getElementsByClassName('table-section')[0];

	printButton.style.display = 'block';
	resultArea.style.display = 'flex';
	name.innerHTML = info.name ? info.name : 'Нет данных';
	description.innerHTML = info.description ? info.description : 'Нет данных';
	if (info.image) {
		img.src = 'img/boy/' + info.image + '.png';
	} else {
		tableSection.style.display = 'none';
		img.src = '';
	}
}

function showParamsBoy(age, height, weight, waist, bust, imb) {
	const ageEl = document.getElementById('age_base_data');
	const heightEl = document.getElementById('height_base_data');
	const weightEl = document.getElementById('weight_base_data');
	const waistEl = document.getElementById('waist_base_data');
	const bustEl = document.getElementById('bust_base_data');
	const imbEl = document.getElementById('imb_base_data');
	const imbPercEl = document.getElementById('imb_perc_base_data');

	let result = 0;
	ageEl.innerHTML = age;

	const heightData = calculateParamsBoy(height, age, heightBoy);
	heightEl.innerHTML = height + ` (${heightData.name})`;
	heightEl.style.color = heightData.color;
	result += getPercentsFromValues(height, heightData.norma);

	const weightData = calculateParamsBoy(weight, age, weightBoy);
	weightEl.innerHTML = weight + ` (${weightData.name})`;
	weightEl.style.color = weightData.color;
	result += getPercentsFromValues(weight, weightData.norma);

	const waistData = calculateParamsBoy(waist, age, waistBoy);
	waistEl.innerHTML = waist + ` (${waistData.name})`;
	waistEl.style.color = waistData.color;
	result += getPercentsFromValues(waist, waistData.norma);

	const bustData = calculateParamsBoy(bust, age, bustBoy);
	bustEl.innerHTML = bust + ` (${bustData.name})`;
	bustEl.style.color = bustData.color;
	result += getPercentsFromValues(bust, bustData.norma);

	const imbData = calculateParamsBoy(imb, age, imbGirl);
	imbEl.innerHTML = imb + ` (${imbData.name})`;
	imbEl.style.color = imbData.color;
	result += getPercentsFromValues(imb, imbData.norma);

	if (result < 0) {
		imbPercEl.innerHTML = 'Нет ожирения';
	}
	imbPercEl.innerHTML = result.toFixed(0) + '%';

	return result;
}
