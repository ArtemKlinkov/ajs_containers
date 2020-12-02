export default class ErrorRepository {
  static translate(code) {
    const errorDict = new Map([[404, 'Страница не найдена'], [522, 'Превышен таймаут'], [500, 'Внутренняя ошибка сервера'], [400, 'Ошибочный запрос']]);
    if (errorDict.has(code)) {
      return errorDict.get(code);
    }

    return 'Unknown error';
  }
}
