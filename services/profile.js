import { getCurrentUserId, getCurrentUserToken } from "@/lib/user";
import { RatefyEndpoints, newRequest } from ".";


/**
 * Create user profile
 * 
 * @param {*} data | `data`
 */
export const createUserProfile = async (data) => {
    const userToken = getCurrentUserToken()
    if (!userToken) {
        throw new Error('You are not authorized to make this request, login and try again!')
    }

    let result = {}

    const endpoint = RatefyEndpoints['profile']['createUserProfile']['endpoint']
    const method = RatefyEndpoints['profile']['createUserProfile']['method']
    const request = newRequest(endpoint, method, data, userToken)

    try {
        const response = await fetch(request, { cache: 'no-store' });
        const res = await response.json()

        if (!response.ok) {
            result = { error: true, message: res.message }
            throw new Error()
        }
        else {
            result = { error: false, message: 'User profile successfully created!' }
            return result
        }
    } catch (error) {
        console.log({ error })
        result = { error: true, message: 'Something went wrong - ' + error }
        return result
    }
}

/**
 * Create freelancer profile
 * 
 * @param {*} data | `data`
 */
export const createFreelancerProfile = async (data) => {
    const userToken = getCurrentUserToken()
    if (!userToken) {
        throw new Error('You are not authorized to make this request, login and try again!')
    }

    let result = {}

    const endpoint = RatefyEndpoints['profile']['createFreelancerProfile']['endpoint']
    const method = RatefyEndpoints['profile']['createFreelancerProfile']['method']
    const request = newRequest(endpoint, method, data, userToken)

    try {
        const response = await fetch(request, { cache: 'no-store' });
        const res = await response.json()

        if (!response.ok) {
            result = { error: true, message: res.message }
            throw new Error()
        }
        else {
            result = { error: false, message: 'Freelancer profile successfully created!' }
            return result
        }
    } catch (error) {
        console.log({ error })
        result = { error: true, message: 'Something went wrong - ' + error }
        return result
    }
}


/**
 * Create diaspora profile
 * 
 * @param {*} data | `data`
 */
export const createDiasporaProfile = async (data) => {
    const userToken = getCurrentUserToken()
    if (!userToken) {
        throw new Error('You are not authorized to make this request, login and try again!')
    }

    let result = {}

    const endpoint = RatefyEndpoints['profile']['createDiasporaProfile']['endpoint']
    const method = RatefyEndpoints['profile']['createDiasporaProfile']['method']
    const request = newRequest(endpoint, method, data, userToken)

    try {
        const response = await fetch(request, { cache: 'no-store' });
        const res = await response.json()

        if (!response.ok) {
            result = { error: true, message: res.message }
            throw new Error()
        }
        else {
            result = { error: false, message: 'Disapora profile successfully created!' }
            return result
        }
    } catch (error) {
        console.log({ error })
        result = { error: true, message: 'Something went wrong - ' + error }
        return result
    }
}


// Retrieve user profile data
export const fetchProfileData = async () => {
    const userToken = getCurrentUserToken()
    const userId = getCurrentUserId()
    if (!userToken) {
        throw new Error('You are not authorized to make this request, login and try again!')
    }

    let result = {}

    const endpoint = RatefyEndpoints['profile']['retrieveUserProfile']['endpoint']
    const method = RatefyEndpoints['profile']['retrieveUserProfile']['method']
    const request = newRequest(endpoint, method, undefined, userToken)

    try {
        const response = await fetch(request, { next: { tags: [`userData-${userId}`], revalidate: 60 } });
        const res = await response.json()

        if (!response.ok) {
            result = { error: true, message: res.message }
            throw new Error()
        }
        else {
            result = { error: false, message: 'User profile successfully retrieved!' }
            return result
        }
    } catch (error) {
        console.log({ error })
        result = { error: true, message: 'Something went wrong - ' + error }
        return result
    }
}


// Retrieve user details
export const fetchUserDetails = async () => {
    const userToken = getCurrentUserToken()
    const userId = getCurrentUserId()
    if (!userToken) {
        throw new Error('You are not authorized to make this request, login and try again!')
    }

    let result = {}

    const endpoint = RatefyEndpoints['profile']['retrieveUserProfileDetails']['endpoint']
    const method = RatefyEndpoints['profile']['retrieveUserProfileDetails']['method']
    const request = newRequest(endpoint, method, { uuid: userId }, userToken)

    try {
        const response = await fetch(request, { next: { tags: [`userDetails-${userId}`], revalidate: 60 } });
        const res = await response.json()

        if (!response.ok) {
            result = { error: true, message: res.message }
            throw new Error()
        }
        else {
            result = { error: false, message: 'User details successfully retrieved!' }
            return result
        }
    } catch (error) {
        console.log({ error })
        result = { error: true, message: 'Something went wrong - ' + error }
        return result
    }
}
