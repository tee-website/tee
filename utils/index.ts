import { isArray } from "lodash";
import { client } from "../lib/client";

export const _map = async (
  arr: any[],
  mapper: (value: any, index: number) => any
): Promise<any[]> => {
  let result = [];

  for (let index = 0; index < arr.length; index++) {
    const value = await mapper(arr[index], index);
    result.push(value);
  }

  return result;
};

export const to_dict = async (obj: any): Promise<any> => {
  if (isArray(obj)) {
    const result = await _map(obj, async (value) => {
      if (value._type !== "reference") return await to_dict(value);
      const data = await client.getDocument(value._ref);
      return await to_dict(data);
    });

    return result;
  } else if (typeof obj === "object") {
    const entries = Object.entries(obj);
    const results = await _map(entries, async ([key, value]) => {
      if (value._type !== "reference") return [key, await to_dict(value)];
      const data = await client.getDocument(value._ref);
      return [key, await to_dict(data)];
    });

    return Object.fromEntries(results);
  } else {
    return obj;
  }
};
