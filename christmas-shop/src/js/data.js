export const data = {
  async getData(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  },
};
