import queryString from 'query-string';
import config from './../configs';

export function loadUsers (options = {}) {
    const defaultOptions = {
        page: 1,
        results: 10,
        seed: config.API_KEY,
        inc: config.INC_PROPERTIES,
    };

    const finalOptions = {
        ...defaultOptions,
        ...options,
    };

    const params = queryString.stringify(finalOptions, { arrayFormat: 'comma' });
    //console.log(`params`, params)
    return fetch(
        `${config.BASE_URL}?${params}`
    ).then(response => response.json());
};