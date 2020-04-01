export interface IFindParameters {
  first: number;
  after?: number;
  firstName?: string;
  lastName?: string;
  orderBy?: any[];
}

export interface ICountParameters {
  firstName?: string;
  lastName?: string;
}

export default interface IAuthorRepository {
  /**
   *
   * @param id database unique ID of the author
   */
  get(id: number): Promise<any>;

  /**
   * Creates new author.
   * @param firstName author's first name
   * @param lastName author's last name
   */
  create(firstName: string, lastName: string): Promise<any>;

  /**
   * Updates existing author.
   * @param id database unique ID of the author to be updated
   * @param firstName author's new first name
   * @param lastName author's new last name
   */
  update(id: number, firstName: string, lastName: string): Promise<any>;

  find(params: IFindParameters): Promise<any>;

  count(params: ICountParameters): Promise<any>;
}
