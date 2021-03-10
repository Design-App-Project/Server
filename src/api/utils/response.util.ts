import { ErrorUtil } from "./error.util";

// 클라이언트로 동일한 형식의 response를 전달하기 위해 사용

type SuccessTrue = {
  success: true;
  message: string | null;
  results: object;
  code: null;
};

type SuccessFalse = {
  success: false;
  message: string | null;
  results: null;
  code: string;
};

export type APIResponse = SuccessTrue | SuccessFalse;

export class ResponseUtil {
  constructor() {}

  /**
   * @param data - 클라이언트로 전달해야 하는 값
   *   @param message - 사용자에게 전달할 성공 메시지
   */
  static successTrue(data: object, message?: string): APIResponse {
    return {
      success: true,
      message: message || null,
      results: data,
      code: null,
    };
  }

  /** @param err - error에 대한 정보를 담고있는 ErrorUtil */
  static successFalse(err: ErrorUtil): APIResponse {
    let errors = "";

    return {
      success: false,
      message: err.message || null,
      results: null,
      code: err.code,
    };
  }
}
