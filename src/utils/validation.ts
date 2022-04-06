const validator = require("validator");

export const REGEX = {
  email: {
    // required: {
    //   value: true,
    //   message: 'Email requirements',
    // },
    validate: {
      regex: (val: any) => {
        // eslint-disable-next-line no-useless-escape
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!validator.isEmail(val) || !regex.test(val)) {
          return "This is not a valid email format";
        }
      },
      beforeLength: (val: any) => {
        const value = val.split("@");
        if (value[0].length > 50) {
          return "This is not a valid email format";
        }
      },
      afterLength: (val: any) => {
        const value = val.split("@");
        if (value[1].length > 50) {
          return "This is not a valid email format";
        }
      },
    },
  },
  userName: {
    required: {
      value: true,
      message: "This field is required",
    },
    pattern: {
      value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i,
      message: "This is not a valid username format",
    },
  },
  password: {
    required: {
      value: true,
      message: "This field is required",
    },
    minLength: {
      value: 8,
      message: "Password must have at least 8 characters",
    },
    maxLength: {
      value: 20,
      message: "Password must be no longer than 20 characters",
    },
    pattern: {
      value:
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+\-=|\\]).{8,}$/g,
      message:
        "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.",
    },
  },
  website: {
    pattern: {
      value:
        /((https:\/\/|(!https))|(http:\/\/|(!http)))(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}/i,
      message: "Please enter valid link",
    },
  },

  phoneNumber: {
    // required: {
    //   value: true,
    //   message: 'Phone Number requirements',
    // },
  },

  /// rules for add address
  titleAddress: {
    required: true,
    minLength: {
      value: 1,
      message: "Title must have at least 1 characters",
    },
  },
  withdrawalAddress: {
    required: true,
    minLength: {
      value: 1,
      message: "Withdrawal address must have at least 1 characters",
    },
  },
};

export const textField = (setValue: any, e: any) => {
  let val = e.target.value.replace(/[^a-zA-Z0-9]/g, "");
  return setValue(e.target.name, val);
};

export const amountWithdrawal = (assetBalance: number) => {
  return {
    min: (value: any) => Number(value) > 0,
    max: (value: any) =>
      Number(value) <= assetBalance ||
      "Amount can’t be more than amount on balance",
  };
};

export const validateDateOfBirth = (update: any, dateOfBirth: any) => {
  if (!update) {
    return "This field is required";
  } else if (dateOfBirth && dateOfBirth >= new Date()) {
    return "Please, enter a valid year";
  } else {
    return "";
  }
};

export const percentField = (str: string) => {
  let val = str.replace(/[^0-9.,]+$/g, "");
  if (Number(val) > 100) {
    return "100";
  }
  return val;
};

export const checkFileUpload = (e: any) => {
  const fileSupported = [
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/msword",
    "text/plain",
    "application/pdf",
    "image/jpg",
    "image/jpeg",
    "image/png",
    "text/rtf",
    "text/csv",
    "application/vnd.oasis.opendocument.text",
  ];

  if (
    !fileSupported.includes(e?.target?.files[0].type) &&
    e?.target?.files[0]
  ) {
    return "The file type is not supported. Please choose another";
  } else if (e?.target?.files[0].size > 10000000) {
    return "Maximum file size is 10 MB. Please choose another file";
  }
  // else if (!e?.target?.files[0]) {
  //   return "The file is corrupt. Please choose another file"
  // }
  else return "";
};

export const rulesTextField = (name: string) => {
  return {
    required: {
      value: true,
      message: `${name} requirements`,
    },
  };
};

export const validationAmount = (amount: string, baseCoin: any) => {
  try {
    if (!amount || (amount && amount === "") || isNaN(Number(amount))) {
      return "Can not be more than available amount";
    }

    let value = Number(amount);
    if (value < Number(baseCoin.min)) {
      return `min amount ${baseCoin["min"]}`;
    }

    if (value > Number(baseCoin.max)) {
      return `max amount ${baseCoin["max"]}`;
    }
    return "";
  } catch (error) {
    return "Can not be more than available amount";
  }
};

export const convertCountryCodeToLocale = (countryCode?: string) => {
  if (!countryCode) return;
  return validator.isMobilePhoneLocales.find(
    (locale: string) => locale.split("-")[1] === countryCode.toUpperCase()
  );
};
