import { DefinedError } from 'ajv';

export class ErrorUtil {
  status: number;
  code: string;
  message: string;

  /**
   * @param status - status code
   * @param code - error code
   * @param message - 사용자에게 알리는 error message
   */
  constructor(status: number, code: string, message: string = '') {
    this.status = status;
    this.code = code;
    this.message = message;
  }

  static badRequest(code: string, message: string = 'Invalid Error') {
    return new ErrorUtil(400, code, message);
  }

  static unAuthorized(code: string, message: string = 'Unauthorized Error') {
    return new ErrorUtil(401, code, message);
  }

  static forbidden(code: string, message: string = 'Forbidden Error') {
    return new ErrorUtil(403, code, message);
  }

  static resourceNotFound(
    code: string,
    message: string = 'Resource Not Found',
  ) {
    return new ErrorUtil(404, code, message);
  }

  static conflict(code: string, message: string = 'Conflict Error') {
    return new ErrorUtil(409, code, message);
  }

  static internal(code: string, message: string = 'Internal Error') {
    return new ErrorUtil(500, code, message);
  }

  static ajv(error: DefinedError) {
    switch (error.keyword) {
      case 'type':
        return this.badRequest('400-1', 'Invalid Type');
      case 'format':
        return this.badRequest('400-2', 'Invalid Format');
      case 'required':
        return this.badRequest('400-3', 'Missing Required Element');
      case 'additionalProperties':
        return this.badRequest('400-4', 'Additional Properties is included');
      case 'pattern':
        return this.badRequest('400-5', 'Invalid Pattern');
      default:
        return this.internal('500', 'Unexpected Error: Invalid data');
    }
  }
}
