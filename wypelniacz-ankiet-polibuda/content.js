(function () {
	const urlParams = new URLSearchParams(window.location.search);
	if (!urlParams.has('tab') || !urlParams.has('ankID')) {
		return;
	}

	const kontener = document.createElement('div');
	Object.assign(kontener.style, {
		position: 'fixed',
		bottom: '30px',
		left: '50%',
		transform: 'translateX(-50%)',
		zIndex: '99999',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '12px',
		padding: '20px 30px',
		backgroundColor: 'rgba(255, 255, 255, 0.95)',
		backdropFilter: 'blur(8px)',
		border: '1px solid rgba(0, 0, 0, 0.1)',
		borderRadius: '16px',
		boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
		fontFamily:
			'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
	});

	const przyciskWypelnij = document.createElement('button');
	przyciskWypelnij.innerText = 'Wypełnij Ankietę';
	Object.assign(przyciskWypelnij.style, {
		padding: '14px 32px',
		minWidth: '220px',
		backgroundColor: '#1f2937',
		color: '#ffffff',
		border: 'none',
		borderRadius: '8px',
		fontSize: '16px',
		fontWeight: '600',
		cursor: 'pointer',
		boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
		transition: 'all 0.2s ease',
		letterSpacing: '0.5px',
	});

	przyciskWypelnij.addEventListener('mouseenter', () => {
		przyciskWypelnij.style.backgroundColor = '#111827';
		przyciskWypelnij.style.transform = 'translateY(-2px)';
	});
	przyciskWypelnij.addEventListener('mouseleave', () => {
		przyciskWypelnij.style.backgroundColor = '#1f2937';
		przyciskWypelnij.style.transform = 'translateY(0)';
	});
	przyciskWypelnij.addEventListener('mousedown', () => {
		przyciskWypelnij.style.transform = 'translateY(2px) scale(0.98)';
	});
	przyciskWypelnij.addEventListener('mouseup', () => {
		przyciskWypelnij.style.transform = 'translateY(-2px)';
	});

	const labelCheckboxa = document.createElement('label');
	Object.assign(labelCheckboxa.style, {
		display: 'flex',
		alignItems: 'center',
		gap: '8px',
		fontSize: '16px',
		color: '#4b5563',
		cursor: 'pointer',
		userSelect: 'none',
		fontWeight: '500',
	});

	const checkboxWyslij = document.createElement('input');
	checkboxWyslij.type = 'checkbox';
	checkboxWyslij.checked = false;
	checkboxWyslij.style.width = '20px';
	checkboxWyslij.style.height = '20px';
	checkboxWyslij.style.cursor = 'pointer';

	labelCheckboxa.appendChild(checkboxWyslij);
	labelCheckboxa.appendChild(document.createTextNode('Od razu wyślij'));

	przyciskWypelnij.addEventListener('click', () => {
		const bazowePola = [
			[0, 1],
			[1, 1],
			[2, 1],
			[3, 1],
			[5, 1],
			[6, 4],
		];

		const maksymalnaIloscGrup = 10;
		const polaDoZaznaczenia = [];

		for (let grupa = 0; grupa < maksymalnaIloscGrup; grupa++) {
			const przesuniecie = grupa * 7;
			bazowePola.forEach((pole) => {
				polaDoZaznaczenia.push(`pole_${pole[0] + przesuniecie}_${pole[1]}`);
			});
		}

		let iloscZaznaczonych = 0;

		polaDoZaznaczenia.forEach((id) => {
			const element = document.getElementById(id);
			if (element) {
				element.checked = true;
				element.dispatchEvent(new Event('change', { bubbles: true }));
				iloscZaznaczonych++;
			}
		});

		const oryginalnyTekst = przyciskWypelnij.innerText;
		przyciskWypelnij.innerText = `Wypełniono (${iloscZaznaczonych})`;
		przyciskWypelnij.style.backgroundColor = '#059669';

		setTimeout(() => {
			przyciskWypelnij.innerText = oryginalnyTekst;
			przyciskWypelnij.style.backgroundColor = '#1f2937';
		}, 2000);

		if (checkboxWyslij.checked) {
			const przyciskSubmit = document.querySelector(
				'input[type="submit"], button[type="submit"], input[value="Wyślij"], input[value="Zapisz"]',
			);

			if (przyciskSubmit) {
				setTimeout(() => {
					przyciskSubmit.click();
				}, 500);
			} else {
				alert(
					'Wypełniono, ale nie mogłem znaleźć przycisku wyślij na tej stronie.',
				);
			}
		}
	});

	kontener.appendChild(przyciskWypelnij);
	kontener.appendChild(labelCheckboxa);
	document.body.appendChild(kontener);
})();
