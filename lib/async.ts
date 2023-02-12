// Handler to delay the api calls to see a loading state.
export const delay = (time) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(1), time);
  });