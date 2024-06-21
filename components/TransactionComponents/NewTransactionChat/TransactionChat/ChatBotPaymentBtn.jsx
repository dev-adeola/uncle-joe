
import React, { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import axios from "axios";
import { useParams } from "next/navigation";

function ChatBotPaymentBtn  ({ id, activeId, setActiveId,  }) {
  const [message, setMessage] = useState(null);
  const params = useParams();

  const imageMessage = (image) => {
    axios.post(`https://transactionbased.ratefy.co/api/image-upload`, { 
        session: params.session_id, 
        acceptance: params.acceptance_id,
        sender: "adeola",
        receiver: "adeola",
        photo: image,
        contentType: "file"
     }, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
    const onClose = () => {
      setActiveId(null);
    };

    const fileRef = useRef();
    const [selectedFile, setSelectedFile] = useState("");
    const handleImageUpload = () => {
      if (fileRef?.current?.files[0]) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(fileRef.current.files[0]);
  
        fileReader.onloadend = (event) => {
          setSelectedFile(event.target.result);
        };
      }
    };

    const removeFile = () => {
      setSelectedFile("");
    };
  


    const sendMessage = () => {
      if (selectedFile) {
        console.log("here we do it");
        imageMessage(selectedFile)

        removeFile();
        setMessage("");
      }
    };
    return (
      <>
        {activeId === id ? (
          <div className="space-y-3 flex flex-col items-center text-xs font-karla font-normal p-3 w-[180px] rounded-r-[10px] rounded-bl-[10px] cursor-pointer bg-[#D2FFEF] text-[#494949]">
            {/*  */}
            <div className="flex justify-end w-full" onClick={onClose}>
              <p className="bg-primary cursor-pointer  p-1 rounded-full flex items-center justify-center text-white">
                <FaTimes size={12} />
              </p>
            </div>
            <p className="text-left ">
              kindly attach <strong>proof of payment</strong> and click '
              <strong>I've made payment</strong>' button
            </p>
  
            {/*  */}

            {selectedFile !== "" ?  
            <div className="w-32 h-32 rounded-lg overflow-hidden relative">
              <Image
                alt="pop"
                width={128}
                height={128}
                src={selectedFile}
                className="object-cover h-full"
              />

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/75 p-1 cursor-pointer overflow-hidden flex items-center justify-center">
                <FaTimes size={14} onClick={removeFile} />
              </div>
            </div> : 
            <div className="w-full border border-black border-dashed flex items-center rounded-[10px] justify-center p-3">
              <p className="text-[#6a6a6a] text-center font-karla text-xs  font-bold" onClick={() => fileRef.current.click()}>
                Attach file
              </p>
              <input
                ref={fileRef}
                onChange={handleImageUpload}
                className="hidden"
                type="file"
                accept="*"
              />
            </div>}
            
            
  
            {/*  */}
            <div 
              onClick={() => sendMessage()}
              className="flex text-center items-center justify-center text-xs font-karla font-bold px-2 py-2 w-full rounded-[10px] cursor-pointer bg-[#008153] text-[#fff]">
              I’ve made payment
            </div>
          </div>
        ) : (
          <div
            onClick={() => setActiveId(id)}
            
            
            className="flex items-center justify-start text-xs font-karla font-bold px-2 py-2 w-[180px]  rounded-r-[10px] rounded-bl-[10px] cursor-pointer bg-[#D2FFEF] text-[#008153]"
          >
            I’ve made payment
          </div>
        )}
      </>
    );
  };


  export default ChatBotPaymentBtn;