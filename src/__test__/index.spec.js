const sumOfnums = (a, b) => a * b;

test('should return multiplied value of the arguments passed', () => {
  const result = sumOfnums(5, 7);
  expect(result).toBe(35);
});
