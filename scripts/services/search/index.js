import { doLocalSearch } from './local';
import { doSearchGovSearch } from './search-gov';

export const SearchService = (query, highlightSearchTerms) => new Promise((resolve, reject) => {
  doSearchGovSearch(query, highlightSearchTerms)
    .then(resolve)
    .catch(error => {
      console.warn('Using local search fallback.', error);
      doLocalSearch(query)
        .then(resolve)
        .catch(reject);
    });
});

export { doSearchGovSearch, doLocalSearch };