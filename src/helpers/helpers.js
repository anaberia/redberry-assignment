export let getLocalStorage = (inp) => {
  if (localStorage.getItem(inp)) {
    return JSON.parse(localStorage.getItem(inp));
  } else {
    return [];
  }
};
