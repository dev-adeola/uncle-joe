"use server";

import {
  setCurrentUserId,
  setCurrentUserData,
  setCurrentUserToken,
} from "@/lib/user";
import { BASE_URL, getUserOnlineAddress } from ".";

/**
 * Create New User
 *
 * @param {*} data
 * @returns
 */
export const authRegistration = async (data) => {
  let response = {};
  const requestUrl = "https://p2p.ratefy.co/register";
  const userIp = await getUserOnlineAddress();

  const request = new Request(requestUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": "Ratefy",
    },
    credentials: "omit",
    body: JSON.stringify({ ...data, ip: userIp.ipAddress }),
  });

  try {
    const requestResponse = await fetch(request, {
      cache: "no-store",
      next: { revalidate: 1 },
    });
    const res = await requestResponse.json();

    if (!requestResponse.ok) {
      response = { error: true, message: res.message };
    } else {
      setCurrentUserToken(res.token);
      setCurrentUserId(res.data.uuid);
      setCurrentUserData(res.data);
      response = {
        error: false,
        message: "User account successfully created!",
      };
    }
  } catch (error) {
    response = { error: true, message: "An error occur - " + error };
  } finally {
    return response;
  }
};

/**
 * Login user
 *
 * @param {*} data
 * @returns
 */

export const loginUser = async (data) => {
  let response = {};

  const requestUrl = BASE_URL + "login";
  const userIp = await getUserOnlineAddress();

  const request = new Request(requestUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": "Ratefy",
    },
    credentials: "omit",
    body: JSON.stringify({ ...data, ip: userIp.ipAddress }),
  });

  try {
    const requestResponse = await fetch(request, {
      cache: "no-store",
      next: { revalidate: 1 },
    });
    const res = await requestResponse.json();

    if (!requestResponse.ok) {
      response = { error: true, message: res.message };
    } else {
      setCurrentUserToken(res.token);
      // setCurrentUserId(res.data.uuid)
      // setCurrentUserData(res.data)
      response = { error: false, message: "User successfully login!" };
    }
  } catch (error) {
    response = { error: true, message: "An error occur - " + error };
  } finally {
    return response;
  }
};
