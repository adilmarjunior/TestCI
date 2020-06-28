const Sketch = require('./sketch');

test('adds 1 + 2 to equal 3', () => {
  expect(Sketch.sum(1,2)).toBe(3);
});

test('adds 5 - 2 to equal 3', () => {
  expect(Sketch.subtract(5,2)).toBe(3);
});