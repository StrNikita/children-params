function calculateImb(weight, height) {
	const imb = weight / (Math.pow(height / 100, 2));
  return imb.toFixed(1);
}
