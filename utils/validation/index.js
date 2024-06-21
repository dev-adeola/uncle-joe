/**
 *
 * @param {*} email
 * @returns
 */
export const validateEmail = (email) => {
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  if (email.length > 3) {
    const isValid = emailRegex.test(email);
    if (!isValid) return "Email is not valid";
  }

  return null;
};

/**
 *
 * @param {*} phone phone
 * @returns
 */
export const validatePhone = (phoneNumber) => {
  const phoneRegex = /^[1-9][0-9]*$/;
  if (phoneNumber.length <= 0) return null;
  if (phoneNumber[0] === NaN) return "Phone number must contain digit only";
  if (phoneNumber.length > 3) {
    const isValid = phoneRegex.test(phoneNumber);
    if (!isValid) return "Phone number is not valid";
  }

  return null;
};

/**
 *
 * @param {*} name
 * @returns
 */
export const validateName = (name, label) => {
  const nameRegex = /^[a-zA-Z]{2,}$/;
  const isValid = nameRegex.test(name);

  if (Number(name[0]) !== NaN) {
    if (!isValid) return label + " can not start with a number";
  }

  if (name.length > 2) {
    if (!isValid) return label + " is not valid";
  }
  if (name.length <= 0) return null;

  return null;
};

/**
 *
 * @param {*} username
 * @returns
 */
export const validateUsername = (username) => {
  const regex = /^[a-zA-Z0-9_]+$/;

  if (!username) {
    return null;
  }

  // Check if the username starts with a number.
  if (/^\d/.test(username)) {
    return "Username can not start with a number";
  }

  // Check if the username contains any invalid characters.
  if (!regex.test(username)) {
    return "Invalid username";
  }

  // Return true if the username is valid.
  return null;
};

/**
 *
 * @param {*} password
 * @param {*} confirmPassword
 */
export const validatePassword = (password, confirmPassword = null) => {
  // Check for at least one symbol, one letter, and one number
  const symbolRegex = /[\W_]/;
  const letterRegex = /[a-zA-Z]/;
  const numberRegex = /\d/;

  if (confirmPassword) {
    if (confirmPassword.length <= 0) return null;
    if (password !== confirmPassword) return "Password do not match";
  } else {
    if (password.length <= 0) return null;
    if (password.length < 8 && password.length > 0) {
      return "Password must be atleast 8 characters long";
    }
    if (!symbolRegex.test(password)) {
      return "Password must contain at least 1 symbol";
    }
    if (!letterRegex.test(password)) {
      return "Password must contain letter";
    }
    if (!numberRegex.test(password)) {
      return "Password must contain at least o1 digit";
    }
  }

  return null;
};
