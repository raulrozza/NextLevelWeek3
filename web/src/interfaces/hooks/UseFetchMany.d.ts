export interface IFetchReturn<T> {
  data: T[];
  loading: boolean;
  errors: boolean;
}
