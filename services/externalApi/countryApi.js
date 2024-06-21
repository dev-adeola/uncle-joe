/**
 * This is an external API to fetch all countries and its details
 */


const baseUrl = "https://www.universal-tutorial.com/api/"
const apiToken = "chvZDlV5YjMGi_7TI3fQalTsIr7sSAfXYBOtwFHdp-Ogvk-ohO3_drPRrY3rfW8Gnwg"
const apiEmail = "emmanuelishola7@gmail.com"


const jwToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJlbW1hbnVlbGlzaG9sYTdAZ21haWwuY29tIiwiYXBpX3Rva2VuIjoiY2h2WkRsVjVZak1HaV83VEkzZlFhbFRzSXI3c1NBZlhZQk90d0ZIZHAtT2d2ay1vaE8zX2RyUFJyWTNyZlc4R253ZyJ9LCJleHAiOjE3MDY2ODk4MjB9.KoCglWiOiMQoTytxeAkzM6ODNPHgd9OlCBpGoYEZfq0"


let authToken = {
    token: null,
    ttl: null
}


/**
 * 
 * @returns 
 */
export const getAuthToken = async () => {
    let response = {}
    const requestUrl = baseUrl + 'getaccesstoken';

    const request = new Request(requestUrl, {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "api-token": apiToken,
            "user-email": apiEmail
        },
    });
    try {
        const requestResponse = await fetch(request, { next: { revalidate: 24 * 60 * 60 } });
        if (!requestResponse.ok) {
            response = { error: true }
        } else {
            const res = await requestResponse.json()
            response = { error: false, authToken: res.data['auth_token'] }
        }

    } catch (error) {
        response = { error: true }
    }
    finally {
        return response
    }

}



/**
 * 
 * @param {*} endpoint 
 * @param {*} authToken 
 * @returns 
 */
export const getCountryData = async (endpoint) => {

    // const authTokenResponse = await getAuthToken()
    // console.log({ authTokenResponse })

    // if (authTokenResponse.error) {
    //     return
    // }

    // const { authToken } = authTokenResponse


    let response = {}
    const requestUrl = baseUrl + endpoint;

    const request = new Request(requestUrl, {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${jwToken}`
        },
    });
    try {
        const requestResponse = await fetch(request, { next: { tags: [endpoint] } });
        if (!requestResponse.ok) {
            response = { error: true }
        } else {
            const res = await requestResponse.json()
            response = { error: false, data: res }
        }

    } catch (error) {
        response = { error: true }
    }
    finally {
        console.log({ response })
        return response
    }

}

