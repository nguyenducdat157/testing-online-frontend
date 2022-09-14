export interface BaseResponse<T = any> {
  code: string;
  data: T;
  message?: string;
}
