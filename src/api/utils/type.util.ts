export class TypeUtil {
  constructor() {}

  static number(value: string) {
    const result = Number(value);
    if (!Number.isNaN(result)) {
      return result;
    }
  }

  static string(value: string) {
    return value;
  }

  static boolean(value: string) {
    if (value === "true") {
      return true;
    } else if (value === "false") {
      return false;
    }
  }

  static typeConverter: object = {
    number: TypeUtil.number,
    string: TypeUtil.string,
    boolean: TypeUtil.boolean,
  };

  static cast = (key: string, type: string, defaultValue: any) => {
    const value = process.env[key];
    if (value !== undefined) {
      const result = TypeUtil.typeConverter[type](value);
      if (result !== undefined) {
        return result;
      }
      throw new Error(`process.env.${key}에 적절한 값을 설정하지 않았습니다.`);
    }
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`process.env.${key}에 할당할 값이 없습니다.`);
  };
}
