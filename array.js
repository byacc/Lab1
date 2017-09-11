function max(array) {
	var max = [];
	if (array.length <= 1) {
		throw "Invalid array size";
	} else {
		var max1 = 0,
		    max2 = 0,
		    max3 = 0,
		    x = 0;
		for ( i = 0; i < array.length; i++) {
			x = array[i];
			if (x > max1) {
				max3 = max2;
				max2 = max1;
				max1 = x;
			}
			if (x < max1 && x > max2) {
				max2 = x;
			}
			if (x < max2 && x > max3) {
				max3 = x;
			}
		}
		return max1 + " " + max2 + " " + max3;
	}
}