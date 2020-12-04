const errorDict = new Map([[404, 'Страница не найдена'], [522, 'Превышен таймаут'], [500, 'Внутренняя ошибка сервера'], [400, 'Ошибочный запрос']]);

export default class ErrorRepository {
  static translate(code) {
    if (typeof code !== 'number') {
      throw new Error('Некорректный тип кода!');
    }
    if (errorDict.has(code)) {
      return errorDict.get(code);
    }

    return 'Unknown error';
  }
}
