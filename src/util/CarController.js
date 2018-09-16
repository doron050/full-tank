import fetch from 'isomorphic-fetch';

const apiUrl = 'https://api.particle.io/v1/devices/3e003e000647343138333038/led?access_token=d861c358bef1f4d5b63a90a43ae9af14abe15865';

export default function ActiveCar(isOpen) {

    const payload = {
        arg: isOpen ? "on" : 'off'
    };

    return performPost(apiUrl, payload);
}

async function performPost(url, payload) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        return Boolean(response.return_value);
    }

    //required so that the rejected callback will have access to the HTTP resp metadata, and not a JSON parse error which doesn't help anyone.
    throw response;
}