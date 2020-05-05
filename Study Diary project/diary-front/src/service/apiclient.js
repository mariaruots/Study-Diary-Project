const url = '/api/topics';

export const fetchAllData = () => {
    return fetch(url)
        .then(resp => resp.json())
}

export const fetchSingleData = (id) => {
    return fetch(`${url}/${id}`)
        .then(response => response.json());
}

export const postData = (quote) => {
    return fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(quote)
    })
}

export const updateData = (quote) => {
    return fetch(`${url}/${quote.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(quote)
    })
}

export const deleteDataWithId = (id) => {
    return fetch(`${url}/${id}`, {
        method: 'DELETE'
    })
}