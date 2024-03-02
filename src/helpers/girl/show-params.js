function calculateParams(param, age, dataSet) {
	const data = dataSet[age]
	let res;
	for (const ind in data) {
		if (param >= data[ind].from && param <= data[ind].to) {
			res = data[ind];
		}
	}
	return res;
}

function showInfo(info) {
	const resultArea = document.getElementsByClassName('result-info')[0];
	const name = document.getElementById('result-info-name');
	const description = document.getElementById('result-info-description');
	const img = document.getElementById('result-info-img');
	const printButton = document.getElementById('print-girl');
	const tableSection = document.getElementsByClassName('table-section')[0];

	printButton.style.display = 'block';
	resultArea.style.display = 'flex';
	name.innerHTML = info.name ? info.name : 'Нет данных';
	description.innerHTML = info.description ? info.description : 'Нет данных';
	if (info.image) {
		img.src = 'img/girl/' + info.image + '.png';
	} else {
		tableSection.style.display = 'none';
		img.src = '';
	}
}

function getPercentsFromValues(val1, val2) {
	return ((val1/val2) * 100 - 100);
}

function showParamsGirl(age, height, weight, waist, bust, imb) {
	const ageEl = document.getElementById('age_base_data-girl');
	const heightEl = document.getElementById('height_base_data-girl');
	const weightEl = document.getElementById('weight_base_data-girl');
	const waistEl = document.getElementById('waist_base_data-girl');
	const bustEl = document.getElementById('bust_base_data-girl');
	const imbEl = document.getElementById('imb_base_data-girl');
	const imbPercEl = document.getElementById('imb_perc_base_data-girl');

	let result = 0;

	ageEl.innerHTML = age;

	const heightData = calculateParams(height, age, heightGirl);
	heightEl.innerHTML = height + ` (${heightData.name})`;
	heightEl.style.color = heightData.color;
	result += getPercentsFromValues(height, heightData.norma);

	const weightData = calculateParams(weight, age, weightGirl);
	weightEl.innerHTML = weight + ` (${weightData.name})`;
	weightEl.style.color = weightData.color;
	result += getPercentsFromValues(weight, weightData.norma);

	const waistData = calculateParams(waist, age, waistGirl);
	waistEl.innerHTML = waist + ` (${waistData.name})`;
	waistEl.style.color = waistData.color;
	result += getPercentsFromValues(waist, waistData.norma);

	const bustData = calculateParams(bust, age, bustGirl);
	bustEl.innerHTML = bust + ` (${bustData.name})`;
	bustEl.style.color = bustData.color;
	result += getPercentsFromValues(bust, bustData.norma);

	const imbData = calculateParams(imb, age, imbGirl);
	imbEl.innerHTML = imb + ` (${imbData.name})`;
	imbEl.style.color = imbData.color;
	result += getPercentsFromValues(imb, imbData.norma);

	imbPercEl.innerHTML = result.toFixed(0) + '%';

	return result;
}

