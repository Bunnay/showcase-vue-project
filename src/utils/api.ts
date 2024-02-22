type Fetch<T> = typeof fetch;

async function customFetch<DataT>(
  ...params: Parameters<Fetch<DataT>>
): ReturnType<Fetch<DataT>> {
  let headers = {
    Accept: "application/json",
    // Authorization: accessToken ? `Bearer ${accessToken}` : "",
    "X-USER-TIMEZONE": Intl.DateTimeFormat().resolvedOptions().timeZone,
  };

  params = [
    "https://api.escuelajs.co/api/v1" + params[0],
    {
      headers: headers,
      //   credentials: "include",
      ...(params[1] || {}),
    },
  ];

  return fetch(...params);
}

export default async function api<BaseApiResponse, ErrorApiResponse>(
  ...params: Parameters<Fetch<BaseApiResponse>>
) {
  return await customFetch<BaseApiResponse>(...params)
    .then((response) => response.json())
    .catch((error) => {
      const responseError = error?.response?._data;
      const err = responseError as ErrorApiResponse;
      return {
        data: undefined,
        error: err,
      };
    })
    .then((data: BaseApiResponse) => {
      return {
        data: data,
        error: undefined,
      };
    });
}
