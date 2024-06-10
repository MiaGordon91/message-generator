
export interface FetchOptions {
  method: string;
  body?: string;
  headers: HeadersInit;  
}

export async function fetchDataFromServer(options: FetchOptions): Promise<Response> {
  const { VITE_SERVER_URL } = import.meta.env;
  const url = `${VITE_SERVER_URL}`;

  return fetch(url, options); 
};
