export default class Toolkit {
  static isString(value: any) {
    return typeof value === 'string' || value instanceof String
  }
}
