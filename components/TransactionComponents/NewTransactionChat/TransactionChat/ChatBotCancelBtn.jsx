import { FaTimes } from "react-icons/fa";


function ChatBotCancelBtn  ({ id, activeId, setActiveId })  {

  
    const onClose = () => {
      setActiveId(null);
    };
  
    return (
      <>
        {activeId === id ? (
          <div className="relative space-y-3 flex flex-col items-center text-xs font-karla font-normal p-3 w-[180px] rounded-r-[10px] rounded-bl-[10px] cursor-pointer bg-[#FFE1E1] text-[#494949]">
            {/*  */}
            <div className="flex justify-end w-full" onClick={onClose}>
              <p className="bg-danger cursor-pointer  p-1 rounded-full flex items-center justify-center text-white">
                <FaTimes size={12} />
              </p>
            </div>
            <p className="text-left ">
              Canceling this transaction will affect your order completion rate
              which might discourage people from initiating a transaction with
              you.
            </p>
            {/*  */}
            <div className="flex text-center items-center justify-center text-xs font-karla font-bold px-2 py-2 w-full rounded-[10px] cursor-pointer bg-[#901A1A] text-[#fff]">
              Cancel this trade
            </div>
          </div>
        ) : (
          <div
            onClick={() => setActiveId(id)}
            className="flex items-center justify-start text-xs font-karla font-bold px-2 py-2 w-[180px]  rounded-r-[10px] rounded-bl-[10px] cursor-pointer bg-[#FFE1E1] text-[#BC0000]"
          >
            Cancel this transaction
          </div>
        )}
      </>
    );
  };


export default ChatBotCancelBtn;