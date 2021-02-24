
const formatVolumeIconPath = require('../assets/scripts/main');

describe('volume icon level 3', () => {
	test('volume level 3, upper bound', () => {
		expect(formatVolumeIconPath(100)).toContain('3');
	});
	test('volume level 3, lower bound', () => {
		expect(formatVolumeIconPath(67)).toContain('3');
	});

});
describe('volume icon level 2', () => {
	test('volume level 2, upper bound', () => {
		expect(formatVolumeIconPath(66)).toContain('2');
	});
	test('volume level 2, lower bound', () => {
		expect(formatVolumeIconPath(34)).toContain('2');
	});

});
describe('volume icon level 1', () => {
	test('volume level 1, upper bound', () => {
		expect(formatVolumeIconPath(33)).toContain('1');
	});
	test('volume level 1, lower bound', () => {
		expect(formatVolumeIconPath(1)).toContain('1');
	});

});
describe('volume icon level 0', () => {
	test('volume level 0, upper bound', () => {
		expect(formatVolumeIconPath(0)).toContain('0');
	});

});