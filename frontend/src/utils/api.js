const baseURL = `http://127.0.0.1:8080/api`;

async function apiFetch(url, type, data) {
  const headers = new Headers({
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  });
  let options = {};
  if (type !== 'GET')
    options = {
      headers: headers,
      method: type,
      body: JSON.stringify(data) || null
    };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log('Erro api', err);
    return undefined;
  }
}

//company
async function listCompany() {
  const url = `${baseURL}/company`;
  return await apiFetch(url, 'GET');
}

async function getCompany(id) {
  const url = `${baseURL}/company/${id}`;
  return await apiFetch(url, 'GET', id);
}

async function createCompany(body) {
  const url = `${baseURL}/company`;
  return await apiFetch(url, 'POST', body);
}

async function modifyCompany(id, body) {
  const url = `${baseURL}/company/${id}`;
  console.log('CORPO ', body);
  return await apiFetch(url, 'PUT', { name: body });
}

async function deleteCompany(id) {
  const url = `${baseURL}/company/${id}`;
  return await apiFetch(url, 'DELETE');
}

// customer

async function listCustomer() {
  const url = `${baseURL}/customer`;
  return await apiFetch(url, 'GET');
}

async function getCustomer(id) {
  const url = `${baseURL}/customer/${id}`;
  return await apiFetch(url, 'GET', id);
}

async function createCustomer(body) {
  const url = `${baseURL}/customer`;
  return await apiFetch(url, 'POST', body);
}

async function modifyCustomer(id, body) {
  const url = `${baseURL}/customer/${id}`;
  return await apiFetch(url, 'PUT', body);
}

async function deleteCustomer(id) {
  const url = `${baseURL}/customer/${id}`;
  return await apiFetch(url, 'DELETE');
}

export const Api = {
  listCompany,
  getCompany,
  createCompany,
  modifyCompany,
  deleteCompany,
  listCustomer,
  getCustomer,
  createCustomer,
  modifyCustomer,
  deleteCustomer
};
