function pKomputer(){
	const rando = Math.random();
	if (rando < 0.34) return "gajah";
	if ( rando >= 0.34 && rando < 0.67) return "semut";
	return "orang";
}

function hasil(rando, player){
	if (player == rando) return "SERI"; 
	if (player == 'gajah') return (rando == 'orang') ? 'MENANG' : 'KALAH';
	if (player == 'orang') return (rando == 'semut') ? 'MENANG' : 'KALAH';
	if (player == 'semut') return (rando == 'gajah') ? 'MENANG' : 'KALAH';
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(P) {
	P.addEventListener('click', function() {
		const pComputer = pKomputer();
		const pPlayer = P.className;
		const tHasil = hasil(pComputer, pPlayer);

		const imgComputer = document.querySelector('.img-komputer');
		imgComputer.setAttribute('src', 'img/' + pComputer + '.png');

		const info = document.querySelector('.info');
		info.innerHTML = tHasil;
	});
});




















