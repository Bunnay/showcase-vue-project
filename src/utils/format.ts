class Format {
  // Query Format
  queryFormat<T>(query: unknown): T {
    if (!query || typeof query !== "object") {
      return {} as T;
    }

    const result: Record<string, any> = {};
    Object.entries(query)
      .filter(
        (entry): entry is [string, any] =>
          entry[1] !== undefined && entry[1] !== null && entry[1] !== ""
      )
      .forEach((entry) => {
        if (typeof entry[1] === "object") {
          const res = Object.fromEntries(
            Object.entries(entry[1])
              .filter(
                (subentry): subentry is [string, any] =>
                  subentry[1] !== undefined &&
                  subentry[1] !== null &&
                  subentry[1] !== ""
              )
              .map(([key, value]: [string, any]) => [
                `${entry[0]}[${key}]`,
                typeof value === "object"
                  ? value?.join(",")
                  : value || undefined,
              ])
          );

          Object.entries(res).forEach(([key, value]) => {
            result[key] = value || undefined;
          });
        } else {
          result[entry[0]] = entry[1];
        }
      });
    return result as T;
  }
}

export default new Format();
