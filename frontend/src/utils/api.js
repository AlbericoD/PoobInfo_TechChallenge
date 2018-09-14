const baseURL = `http://127.0.0.1:8080/api`;

async function apiFetch(url, type, data) {
  const headers = new Headers({
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  });
  const options = {
    headers: headers,
    method: type,
    body: JSON.stringify(data) || null
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (err) {
    return undefined;
  }
}

async function listCompany() {
  const url = `${baseURL}/company`;
  return await apiFetch(url, 'GET');
}

async function getCompany(name) {
  const url = `${baseURL}/company/${name}`;
  return await apiFetch(url, 'GET', name);
}

async function createCompany(body) {
  const url = `${baseURL}/company`;
  return await apiFetch(url, 'POST', body);
}

async function modifyCompany(name, body) {
  const url = `${baseURL}/company/${name}`;
  return await apiFetch(url, 'PUT', body);
}

async function deleteCompany(id) {
  const url = `${baseURL}/company/${id}`;
  return await apiFetch(url, 'DELETE');
}

export const ApiCompany = {
  listCompany,
  getCompany,
  createCompany,
  modifyCompany,
  deleteCompany
};
