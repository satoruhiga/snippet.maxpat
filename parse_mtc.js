var buf = [];

function msg_int(v) {
	if (v > 127) buf = [];
	
	buf.push(v);
	
	if (buf.length == 3) {
		if (buf[0] == 242) {
			var bar = buf[2] * 128 + buf[1];
			outlet(0, bar * 6);
		}
	}
}