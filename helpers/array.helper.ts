export class ArrayHelper {
  public static async map<T, A>(
    array: T[],
    mapper: (element: T, index?: number) => Promise<A>
  ): Promise<A[]> {
    let result = [];
    for (let index = 0; index < array.length; index++) {
      result.push(await mapper(array[index], index));
    }
    return result;
  }
}
