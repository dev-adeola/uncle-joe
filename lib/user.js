import { cookies } from "next/headers";


export const setCurrentUserToken = (userToken) => {
    cookies().set('currentUserToken', userToken, {
        httpOnly: true,
        secure: true,
    });
}

export const setCurrentUserId = (userId) => {
    cookies().set('currentUserId', userId, {
        httpOnly: true,
        secure: true,
    });
}

export const setCurrentUserData = (userData) => {
    cookies().set('currentUserData', JSON.stringify(userData), {
        httpOnly: true,
        secure: true,
    });
}

export const getCurrentUserToken = () => {
    const cookieStore = cookies();
    const userToken = cookieStore.get('currentUserToken');
    return userToken;
}

export const getCurrentUserId = () => {
    const cookieStore = cookies();
    const users = cookieStore.get('currentUserId');
    return users;
}

export const getCurrentUserData = () => {
    const cookieStore = cookies();
    const users = cookieStore.get('currentUserData');
    return users && JSON.parse(users);
}


/**
 * Delete all user cookies on the server
 * 
 * @returns 
 */
export const removeAllToken = () => {
    const cookieStore = cookies();
    cookieStore.delete('currentUserToken')
    cookieStore.delete('currentUserId')
    cookieStore.delete('currentUserData')
    return
}