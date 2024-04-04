export type TErrorSources = {
  path: string | number;
  message: string;
};

export type TErrorTResponse = {
  errorSources: TErrorSources[];
  message: string;
  statusCode: number;
};
