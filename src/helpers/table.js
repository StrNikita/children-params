export function createTable(values, height, waist, bust, sex) {
	const table = document.getElementsByClassName('table-section')[0];
	const tbody = document.getElementById('values-tbody');
	let names;
	let symbols;
	if (sex === 'girl') {
		names = ['Рост','Обхват груди III','Обхват бедер с учетом выступа живота','Высота точки основания шеи','Высота линии талии','Высота остисто-подвздошной передней точки','Высота коленной точки','Высота подъягодичной складки','Обхват шеи','Обхват груди I','Обхват груди II','Обхват талии','Обхват бедра','Обхват колена','Расстояние от линии талии до пола с боку','Расстояние от линии талии до пола спереди ','Длина ноги','Обхват запястья','Расстояние от точки основания шеи плечевой точки','Расстояние от точки основания шеи до линии обхвата запястья','Высота проймы спереди','Высота груди ','Длина талии спереди','Дуга через высшую точку плечевого сустава','Высота проймы сзади','Длина спины до талии с учетом выступа лопаток','Дуга верхней части туловища','Ширина груди','Расстояние между сосковыми точками','Ширина спины','Обхват головы','Обхват подъема стопы','Дуга через паховую область','Высота шейной точки','Обхват бедер без учета выступа живота','Обхват икры','Обхват щиколотки','Обхват плеча','Ширина плечевого ската','Высота проймы косая','Расстояние от линии талии сзади до точки основания шеи','Расстояние от линии талии до подъягодичной складки'];
		symbols = ['T1','T16','T19','T4','T7','T8','T9','T12','T13','T14','T15','T18','T21','T22','T25','T26','T27','T29','T32','T33','T34','T35','T36','T38','T39','T40','T44','T45','T46','T47','T48','T51','T77','T10','T20','T23','T24','T28','T31','T37','T43','T104'];
	}
	if (sex === 'boy') {
		names = ['Рост','Обхват груди III','Обхват бедер с учетом выступа живота','Высота точки основания шеи','Высота линии талии','Высота остисто-подвздошной передней точки','Высота коленной точки','Высота подъягодичной складки','Обхват шеи','Обхват груди I','Обхват груди II','Обхват талии','Обхват бедра','Обхват колена','Расстояние от линии талии до пола с боку','Расстояние от линии талии до пола спереди ','Длина ноги','Обхват запястья','Расстояние от точки основания шеи плечевой точки','Расстояние от точки основания шеи до линии обхвата запястья','Высота проймы спереди','Высота груди ','Длина талии спереди','Дуга через высшую точку плечевого сустава','Высота проймы сзади','Длина спины до талии с учетом выступа лопаток','Дуга верхней части туловища','Ширина груди','Расстояние между сосковыми точками','Ширина спины','Обхват головы','Обхват подъема стопы','Дуга через паховую область','Высота шейной точки','Обхват бедер без учета выступа живота','Обхват икры','Обхват щиколотки','Обхват плеча','Ширина плечевого ската','Высота проймы косая','Расстояние от линии талии сзади до точки основания шеи','Расстояние от линии талии до подъягодичной складки', 'Дуга через паховую область'];
		symbols = ['T1','T16','T19','T4','T7','T8','T9','T12','T13','T14','T15','T18','T21','T22','T25','T26','T27','T29','T32','T33','T34','T35','T36','T38','T39','T40','T44','T45','T46','T47','T48','T51','T77','T10','T20','T23','T24','T28','T31','T37','T43','T104', 'T77'];
	}
	let skip = 0;

	names.forEach((el, i) => {
		const tr = document.createElement('tr');
		const thName = document.createElement('th');
		const thSymbol = document.createElement('th');
		const thValue = document.createElement('th');
		thName.className += 'table-row-name';
		thSymbol.className += 'table-symbol';
		thValue.className += 'table-value';

		thName.innerHTML = el;
		thSymbol.innerHTML = symbols[i];
		if (symbols[i] === 'T1') {
			skip++;
			thValue.innerHTML = height;
		} else if (symbols[i] === 'T16') {
			skip++;
			thValue.innerHTML = bust;
		} else if (symbols[i] === 'T18') {
			skip++;
			thValue.innerHTML = waist;
		} else {
			thValue.innerHTML = values[i - skip];
		}

		tr.append(thName, thSymbol, thValue);
		tbody.appendChild(tr);
		table.style.display = 'block';
	});
}