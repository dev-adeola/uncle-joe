import React from "react";

const popularEWallets = [
  { label: "payoneer", image: "/assets/e-wallet/payoneer.png" },
  { label: "paypal", image: "/assets/e-wallet/paypal.png" },
  { label: "wise", image: "/assets/e-wallet/wise.png" },
  { label: "skrill", image: "/assets/e-wallet/skrill.png" },
  { label: "neteller", image: "/assets/e-wallet/neteller.png" },
  { label: "stripe", image: "/assets/e-wallet/stripe.png" },
  { label: "cash app", image: "/assets/e-wallet/cashapp.png" },
  { label: "zelle", image: "/assets/e-wallet/zelle.png" },
  { label: "fiverr", image: "/assets/e-wallet/fiverr.png" },
];

function HomePopularEWallet() {
  return (
    <div className="space-y-8">
      {/*  */}
      <p className="space-x-2 capitalize text-lightGray font-rubik text-2xl md:text-3xl xl:text-5xl font-bold flex items-center justify-center">
        <span>most popular</span>
        <span className="text-gradient">e-wallets</span>
      </p>
      {/*  */}
      <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-evenly mx-auto max-w-[800px]">
        {popularEWallets.map((wallet, key) => (
          <div key={wallet.label + key} className="w-[160px] md:w-[220px] flex items-center justify-center space-x-4 rounded border-[0.25px] border-primary/75 px-4 py-2">
            <img
              src={wallet.image}
              alt={wallet.label}
              className="xl:w-10 xl:h-10 w-8 h-8 rounded-full object-contain"
            />
            <p className="text- text-darkGray font-karla font-bold text-sm md:text-xl xl:text-4xl">
              {wallet.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePopularEWallet;
