const loadDatas = async () => {
  const requestInfos = new Request("src/assets/whc-sites-2021.json");
  const request = await fetch(requestInfos);
  const response = await request.json();
  return response;
};

const loadCountries = async () => {
  const requestInfos = new Request("https://restcountries.com/v2/all");
  const request = await fetch(requestInfos);
  const response = await request.json();
  return response;
};

export { loadDatas, loadCountries };
