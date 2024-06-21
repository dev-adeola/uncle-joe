import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useDispatch, useSelector } from "react-redux";
import { closeWalletModel } from "@/redux/slices/walletSlice";
import AddMoneyToWallet from "./AddMoneyToWallet";
import WithdrawFromWallet from "./WithdrawFromWallet";
import WalletTransactionHistory from "./WalletTransactionHistory";
import WalletSuccessfulTransaction from "./WalletSuccessfulTransaction";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function WalletModal({ userId, AccountData, IsSuccess }) {
  const HandleModalComponent = (id) => {
    switch (id) {
      case "add-money":
        return (
          <AddMoneyToWallet
            userId={userId}
            AccountData={AccountData}
            IsSuccess={IsSuccess}
          />
        );
      case "withdraw":
        return <WithdrawFromWallet />;
      case "transaction-history":
        return <WalletTransactionHistory />;
      case "successful-transaction":
        return <WalletSuccessfulTransaction />;
      default:
        return;
    }
  };
  const dispatch = useDispatch();
  const WalletModalInfo = useSelector((state) => {
    return state.wallet.walletModel;
  });

  const hadleCloseModal = () => dispatch(closeWalletModel());

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={WalletModalInfo.isOpen}
        disableEscapeKeyDown
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={WalletModalInfo.isOpen}>
          <Box sx={style}>
            <p className="mb-2 capitalize font-rubik text-sm font-normal text-white md:mb-4 md:text-lg">
              {WalletModalInfo?.data?.title}
            </p>
            <Box className="flex items-start gap-2 md:gap-4">
              <Box className="h-fit w-[300px] md:w-[560px] xl:w-[630px]">
                {HandleModalComponent(WalletModalInfo?.data?.id)}
              </Box>

              {/*  */}
              <Box onClick={hadleCloseModal} className="cursor-pointer">
                <span className="md:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                  >
                    <rect
                      x="0.275391"
                      y="0.250488"
                      width="22.1322"
                      height="22.1828"
                      rx="5"
                      fill="#00B172"
                    />
                    <path
                      d="M16.8557 8.74058L14.8824 6.92151L11.4308 10.1033L7.97918 6.92151L6.00586 8.74058L9.45747 11.9224L6.00586 15.1042L7.97918 16.9233L11.4308 13.7415L14.8824 16.9233L16.8557 15.1042L13.4041 11.9224L16.8557 8.74058Z"
                      fill="black"
                    />
                  </svg>
                </span>

                <span className="hidden md:flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                  >
                    <rect
                      x="0.806641"
                      y="0.750244"
                      width="27.7474"
                      height="27.8108"
                      rx="5"
                      fill="#00B172"
                    />
                    <path
                      d="M21.5957 10.1407L19.1218 7.86011L14.7944 11.8492L10.4671 7.86011L7.99316 10.1407L12.3205 14.1298L7.99316 18.1188L10.4671 20.3994L14.7944 16.4103L19.1218 20.3994L21.5957 18.1188L17.2684 14.1298L21.5957 10.1407Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default WalletModal;
