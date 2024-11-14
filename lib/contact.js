export async function fetchBusinessContact() {
    const requestOptions = {method: 'GET',redirect: 'follow',};
    const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/v1/website/businessInfo`,
        requestOptions
    );

    if (!response.ok) {
        throw new Error('Failed to fetch blogs');
    }

    return response.json();
}
