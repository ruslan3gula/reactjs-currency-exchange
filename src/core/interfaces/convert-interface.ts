export interface ConverterResponse {
  query: {};
  info: {};
  result: number | null;
  text: string;
}

export interface ConverterStore {
  isLoading: boolean;
  error: null | string;
  convertData: ConverterResponse;
}

export interface ConvertParams {
  amount: string;
  from: string;
  to: string;
}
