// Available Offers
export const availableOffers = [
  {
    user: {
      name: "Femiivictor",
      avatar: "/assets/avatar.png",
    },
    paymentMethod: {
      label: "Payoneer",
      logo: "/assets/payment-options/payoneer.png",
    },
    tags: ["Transfer", "Checkout", "Payment request"],
    limitAndSpeed: { avg: "8 mins", min: "$500", max: "$5,000" },
    amount: {
      amountToSend: {
        value: "100.00",
        currency: "$",
      },
      amountToReceive: {
        value: "72,200.00",
        currency: "#",
      },
      rate: {
        value: "715.00",
        currency: "#",
      },
    },
    offerType: "sell",
  },
  {
    user: {
      name: "Femiivictor",
      avatar: "/assets/avatar.png",
    },
    paymentMethod: {
      label: "Payoneer",
      logo: "/assets/payment-options/payoneer.png",
    },
    tags: ["Transfer", "Checkout", "Payment request"],
    limitAndSpeed: { avg: "8 mins", min: "$500", max: "$5,000" },
    amount: {
      amountToSend: {
        value: "100.00",
        currency: "$",
      },
      amountToReceive: {
        value: "72,200.00",
        currency: "#",
      },
      rate: {
        value: "715.00",
        currency: "#",
      },
    },
    offerType: "sell",
  },
  {
    user: {
      name: "Femiivictor",
      avatar: "/assets/avatar.png",
    },
    paymentMethod: {
      label: "Payoneer",
      logo: "/assets/payment-options/payoneer.png",
    },
    tags: ["Transfer", "Checkout", "Payment request"],
    limitAndSpeed: { avg: "8 mins", min: "$500", max: "$5,000" },
    amount: {
      amountToSend: {
        value: "100.00",
        currency: "$",
      },
      amountToReceive: {
        value: "72,200.00",
        currency: "#",
      },
      rate: {
        value: "715.00",
        currency: "#",
      },
    },
    offerType: "sell",
  },
];

// My Offers
export const myOffers = [
  {
    status: "on",
    avatar: "/assets/payment-options/payoneer.png",
    paymentMethod: "Payoneer",
    label: "Transfer from balance",
    tags: ["Transfer", "Checkout", "Payment request"],
    limitAndSpeed: { avg: "8 mins", min: "$500", max: "$5,000" },
    exchangeRate: 772,
    offerType: "buy",
  },
  {
    status: "on",
    avatar: "/assets/payment-options/payoneer.png",
    paymentMethod: "Payoneer",
    label: "Transfer from balance",
    tags: ["Exchange fund", "Payment invoice"],
    limitAndSpeed: { avg: "8 mins", min: "$500", max: "$5,000" },
    exchangeRate: 632,
    offerType: "buy",
  },
  {
    status: "off",
    avatar: "/assets/payment-options/payoneer.png",
    paymentMethod: "Payoneer",
    label: "Transfer from balance",
    tags: ["Swap fund", "Pay out", "Payment request"],
    limitAndSpeed: { avg: "8 mins", min: "$500", max: "$5,000" },
    exchangeRate: 769,
    offerType: "sell",
  },
];
// Active Transactions
export const activeTransactions = [
  {
    paymentMethod: {
      logo: "/assets/payment-options/payoneer.png",
      name: "payoneer",
    },
    counterParty: {
      name: "femiivictorr",
      avatar: "/assets/avatar.png",
    },
    amount: {
      amountToSend: {
        value: "100.00",
        currency: "$",
      },
      amountToReceive: {
        value: "72,200.00",
        currency: "#",
      },
      rate: {
        value: "715.00",
        currency: "#",
      },
    },
    status: "pending payment",
    dateAndTime: "02-03-2023,  08:53",
  },
  {
    paymentMethod: {
      logo: "/assets/payment-options/paypal.png",
      name: "paypal",
    },
    counterParty: {
      name: "victorfemi",
      avatar: "/assets/avatar.png",
    },
    amount: {
      amountToSend: {
        value: "100.00",
        currency: "$",
      },
      amountToReceive: {
        value: "105,150.00",
        currency: "#",
      },
      rate: {
        value: "715.00",
        currency: "#",
      },
    },
    status: "paid",
    dateAndTime: "02-03-2023,  08:53",
  },
  {
    paymentMethod: {
      logo: "/assets/payment-options/wise.png",
      name: "wise",
    },
    counterParty: {
      name: "femiivictorr",
      avatar: "/assets/avatar.png",
    },
    amount: {
      amountToSend: {
        value: "450.0",
        currency: "$",
      },
      amountToReceive: {
        value: "420,000.00",
        currency: "#",
      },
      rate: {
        value: "850.00",
        currency: "#",
      },
    },
    status: "unpaid",
    dateAndTime: "02-03-2023,  08:53",
  },
];

// Applicable Tags
export const applicableTags = [
  { id: 0, label: "Accept third-party payment" },
  { id: 1, label: "Proof of work required" },
  { id: 2, label: "Prove of payment required" },
  { id: 3, label: "Balance screenshot required" },
  { id: 4, label: "No third-party payment" },
  { id: 5, label: "Accept payment request" },
  { id: 6, label: "Freelancer account only" },
];

// Current User Recent Transaction Table Heads Rows
export const headCells = [
  {
    id: "payment-methods",
    label: "Payment Methods",
    alignment: "left",
  },
  {
    id: "counterparty",
    label: "Counterparty",
    alignment: "left",
  },
  {
    id: "amount",
    label: "Amount",
    alignment: "center",
  },
  {
    id: "status",
    label: "Status",
    alignment: "center",
  },
  {
    id: "date",
    label: "",
    alignment: "right",
  },
];

// Current User Statistics
export const userStatistics = [
  {
    value: 136,
    label: "Completed trades",
  },
  {
    value: "100%",
    label: "Completion rate",
  },
  {
    value: "90%",
    label: "Positive feedbacks",
  },
];

// transaction requests
export const transactionsRequests = [
  {
    user: "mercha001",
    paymentMethod: {
      logo: "/assets/payment-options/payoneer.png",
      name: "payoneer",
    },
    countDown: 300,

    status: "active",
    exchangeRate: {
      amount: 867,
      currency: "#",
    },
    amountToSend: {
      amount: 100,
      currency: "$",
    },
    amountToReceive: {
      amount: 89500,
      currency: "#",
    },
  },
  {
    user: "femivictor002",
    paymentMethod: {
      logo: "/assets/payment-options/paypal.png",
      name: "paypal",
    },
    countDown: 300,
    status: "active",
    exchangeRate: {
      amount: 867,
      currency: "#",
    },
    amountToSend: {
      amount: 100,
      currency: "$",
    },
    amountToReceive: {
      amount: 89500,
      currency: "#",
    },
  },
  {
    user: "victorfemi003",
    paymentMethod: {
      logo: "/assets/payment-options/wise.png",
      name: "wise",
    },
    countDown: 300,
    status: "active",
    exchangeRate: {
      amount: 867,
      currency: "#",
    },
    amountToSend: {
      amount: 100,
      currency: "$",
    },
    amountToReceive: {
      amount: 89500,
      currency: "#",
    },
  },
  {
    user: "victorfemi003",
    paymentMethod: {
      logo: "/assets/payment-options/skrill.png",
      name: "skrill",
    },
    countDown: 300,
    status: "completed",
    exchangeRate: {
      amount: 867,
      currency: "#",
    },
    amountToSend: {
      amount: 100,
      currency: "$",
    },
    amountToReceive: {
      amount: 89500,
      currency: "#",
    },
  },
];

// Dummy wallet account
export const wallet = {
  balance: 1500,
  currency: "#",
};

// E wallets
export const availableEWallets = [
  {
    id: 1,
    logo: "/assets/payment-options/payoneer.png",
    label: "payoneer",
  },
  {
    id: 2,
    logo: "/assets/payment-options/paypal.png",
    label: "paypal",
  },
  {
    id: 3,
    logo: "/assets/payment-options/wise.png",
    label: "wise",
  },
  {
    id: 4,
    logo: "/assets/payment-options/skrill.png",
    label: "skrill",
  },
];

//
export const paymentOptions = [
  { id: 1, label: "Transfer from balance" },
  { id: 2, label: "Fiverr withdrawal" },
  { id: 3, label: "Upwork withdrawal" },
  { id: 4, label: "Payment request" },
];

//
export const sellerWorkCategories = [
  { label: "a freelancer", value: "freelancer" },
  { label: "remote worker", value: "remote_worker" },
  { label: "online seller", value: "online_seller" },
  { label: "others", value: "others" },
];
export const buyerWorkCategories = [
  { label: "studying abroad", value: "visa_student" },
  { label: "general emigrant", value: "general_migrant" },
  { label: "online shopper", value: "shopper" },
  { label: "remote employer", value: "remote_employer" },
  { label: "others", value: "others" },
];
export const idCard = [
  { label: "Natinal ID Card Slip", value: "NIN_SLIP" },
  { label: "Natinal ID Card", value: "NATIONAL_ID" },
  { label: "Voters Card", value: "VOTERS_CARD" },
  { label: "Internatinal Passport", value: "PASSPORT" },
  { label: "Driver's Licence", value: "DRIVERS_LICENSE" },
  // { label: "others", value: "others" },
];
// export const sellerExperienceLevel = ['beginner', 'intermediate', 'expert']
export const sellerExperienceLevel = [
  { label: "Beginner", value: "starter" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Expert", value: "expert" },
];

export const buyerExperienceLevel = [
  { label: "Beginner", value: "start" },
  { label: "Expert", value: "experience" },
];
