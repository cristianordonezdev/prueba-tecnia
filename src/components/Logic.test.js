import getSerie  from './Logic';

test('Serie para n = 1', () => {
  expect(getSerie(1).result).toBe(9);
});

test('Serie para n = 2', () => {
    expect(getSerie(2).result).toBe(20);
});

test('Serie para n = 3', () => {
    expect(getSerie(3).result).toBe(33);
});

test('Serie para n = 4', () => {
    expect(getSerie(4).result).toBe(51);
});

test('Serie para n = 5', () => {
    expect(getSerie(5).result).toBe(67);
});

test('Serie para n = 6', () => {
    expect(getSerie(6).result).toBe(93);
});

test('Serie para n = 7', () => {
    expect(getSerie(7).result).toBe(116);
});

test('Serie para n = 8', () => {
    expect(getSerie(8).result).toBe(147);
});

test('Serie para n = 9', () => {
    expect(getSerie(9).result).toBe(172);
});

test('Serie para n = 10', () => {
    expect(getSerie(10).result).toBe(188);
});