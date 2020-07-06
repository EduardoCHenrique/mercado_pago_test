const SEARCH_HISTORY = 'searchHistory';

export const getSearchHistory = () => {
  const searchHistory = localStorage.getItem(SEARCH_HISTORY);

  return searchHistory ? JSON.parse(searchHistory) : [];
};

export const saveNewSearch = newSearch => {
  const searchHistory = getSearchHistory();

  if(!searchHistory.includes(newSearch)) {
    const newSearchHistory = JSON.stringify([ ...searchHistory, newSearch ]);
    localStorage.setItem(SEARCH_HISTORY, newSearchHistory);
  }
};

export default {
  saveNewSearch,
  getSearchHistory
};
