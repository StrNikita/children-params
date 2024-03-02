function calculateGirlImb(weight, height) {
	const imbGirl = weight / (Math.pow(height / 100, 2));
  return imbGirl.toFixed(1);
}
