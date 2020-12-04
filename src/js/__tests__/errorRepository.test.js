import ErrorRepository from '../errorRepository';

test('should return "Некорректный тип кода!" for empty code ', () => {
  expect(() => { ErrorRepository.translate(); }).toThrow('Некорректный тип кода!');
});

test('should return "Unknown error" for code "200', () => {
  expect(ErrorRepository.translate(200)).toBe('Unknown error');
});

test('should return "Unknown error" for code "522', () => {
  expect(ErrorRepository.translate(522)).toBe('Превышен таймаут');
});
