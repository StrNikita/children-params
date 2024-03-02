const submitGirl = document.getElementById('submit-girl');
const tables = [a1dGirl, a2dGirl, a3dGirl, a4dGirl, g1dGirl, g2dGirl, g3dGirl, g4dGirl, r1dGirl, r2dGirl, r3dGirl, r4dGirl];

submitGirl.addEventListener('click', () => {
	const age = document.getElementById('age-girl').value;
	const height = document.getElementById('height-girl').value;
	const weight = document.getElementById('weight-girl').value;
	const bust = document.getElementById('bust-girl').value;
	const waist = document.getElementById('waist-girl').value;
	const info = {};
	const imb = calculateGirlImb(weight, height);
	const imbPercent = showParamsGirl(age, height, weight, waist, bust, imb);
	tables.forEach(el => {
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
				createTable(el[ind].answer, height, waist, bust, 'girl');
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
	showInfo(info)
});

