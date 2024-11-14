export async function fetchBusinessContact() {
    const requestOptions = {method: 'GET',redirect: 'follow',};
    const response = await fetch(
        `http://localhost:3006/api/v1/website/businessInfo`,
        requestOptions
    );

    if (!response.ok) {
        throw new Error('Failed to fetch blogs');
    }

    return response.json();
}
