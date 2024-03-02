const submit = document.getElementById('submit');
const tablesBoys = [a1mBoy, a2mBoy, a3mBoy, g1mBoy, g2mBoy, g3mBoy, g4mBoy, r1mBoy, r2mBoy, r3mBoy];

submit.addEventListener('click', () => {
	const age = document.getElementById('age').value;
	const height = document.getElementById('height').value;
	const weight = document.getElementById('weight').value;
	const bust = document.getElementById('bust').value;
	const waist = document.getElementById('waist').value;
	const info = {};
	const imb = calculateImb(weight, height);
	const imbPercent = showParamsBoy(age, height, weight, waist, bust, imb);
	tablesBoys.forEach(el => {
		for (const ind in el) {
			const isTrue = {
				height: false,
				bust: false,
				waist: false,
				imb: false,
			};

			if (height >= el[ind].t1.from && height <= el[ind].t1.to) {
				isTrue.height = true;
			}
			if (bust >= el[ind].t16.from && bust <= el[ind].t16.to) {
				isTrue.bust = true;
			}
			if (waist >= el[ind].t18.from && waist <= el[ind].t18.to) {
				isTrue.waist = true;
			}
			if (imbPercent >= el[ind].imb.from && imbPercent <= el[ind].imb.to) {
				isTrue.imb = true;
			}
			if (isTrue.height && isTrue.bust && isTrue.waist && isTrue.imb) {
				createTable(el[ind].answer, height, waist, bust, 'boy');
				info.name = el[ind].name;
				info.description = el[ind].description;
				info.image = el[ind].image;
				break;
			}

		}
	});

	// if (height === '' || !height || weight === '' || !weight) {
	// 	return; // TODO: ADD VALIDATION
	// }
	showInfoBoy(info)
});
