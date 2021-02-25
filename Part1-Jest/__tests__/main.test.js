
const { formatVolumeIconPath } = require('../assets/scripts/main');

describe('Icon level 3, greater than 66', () => {
	test('Level 3, upper bound', () => {
		expect(formatVolumeIconPath(100)).toMatch('3');
	});
	test('Level 3, lower bound', () => {
		expect(formatVolumeIconPath(67)).toMatch('3');
	});

});
describe('Icon level 2, greater than 33 but less than 67', () => {
	test('Level 2, upper bound', () => {
		expect(formatVolumeIconPath(66)).toMatch('2');
	});
	test('Level 2, lower bound', () => {
		expect(formatVolumeIconPath(34)).toMatch('2');
	});

});
describe('Icon level 1, greater than 1 but less than 34', () => {
	test('Level 1, upper bound', () => {
		expect(formatVolumeIconPath(33)).toMatch('1');
	});
	test('Level 1, lower bound', () => {
		expect(formatVolumeIconPath(1)).toMatch('1');
	});

});
test('Icon level 0', () => {
		expect(formatVolumeIconPath(0)).toMatch('0');
});