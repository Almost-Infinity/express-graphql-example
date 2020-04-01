export interface IFindParameters {
  first: number;
  after?: number;
  authorId?: number;
  query?: string;
}

export interface ICountParameters {
  authorId?: number;
  query?: string;
}

export default interface IAuthorRepository {
  /**
   *
   * @param id unique database ID of the quote
   */
  get(id: number): Promise<any>;

  /**
   *
   * @param params
   */
  find(params: IFindParameters): Promise<any>;

  /**
   *
   * @param params
   */
  count(params: ICountParameters): Promise<any>;
}
