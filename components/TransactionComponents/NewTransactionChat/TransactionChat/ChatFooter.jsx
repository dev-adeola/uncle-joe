"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";
import { RiAttachment2 } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import EmojiPicker from "emoji-picker-react";

function ChatFooter({ handleSendMessage }) {
  const fileRef = useRef();
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const [selectedFile, setSelectedFile] = useState("");

  const messageRef = useRef(null);

  const insertEmojji = (emoji) => {
    if (message && message.length > 0) {
      const cursorPosition = messageRef.current.selectionStart;

      // Insert the emoji at the cursor position
      const newInputValue =
        message.substring(0, cursorPosition) +
        emoji +
        message.substring(cursorPosition);

      // Update the input value and set the cursor position after the inserted emoji
      setMessage(newInputValue);
    } else {
      setMessage(emoji);
    }
  };

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
      handleSendMessage({
        image: selectedFile,
        contentType: "file",
        content: message,
      });
      removeFile();
      setMessage("");
    } else {
      handleSendMessage({
        content: message,
        contentType: "text",
      });
      setMessage("");
    }
  };

  return (
    <Box className="bg-white absolute bottom-0 left-0 flex items-center min-h-[50px] w-full py-4 ">
      <div className="flex flex-col space-y-3 w-full ">
        {/* Text box */}
        <div className="w-full px-4 mr-14 md:px-6 flex justify-end gap-4 items-end">
          {isEmojiOpen && (
            <EmojiPicker
              width={275}
              height={325}
              onEmojiClick={(emoji) => insertEmojji(emoji.emoji)}
              previewConfig={{
                showPreview: false,
              }}
            />
          )}
          {selectedFile && (
            <div className="w-32 h-32 rounded-lg overflow-hidden relative">
              <Image
                alt="shared image"
                width={128}
                height={128}
                src={selectedFile}
                className="object-cover h-full"
              />

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/75 p-1 cursor-pointer overflow-hidden flex items-center justify-center">
                <FaTimes size={14} onClick={removeFile} />
              </div>
            </div>
          )}
        </div>

        {/* Message Inbox/Input */}
        <div className="w-full flex items-center space-x-3 md:space-x-4 px-4 md:px-6">
          <div className="flex-1 pl-4 pr-2 flex items-center space-x-2 border border-darkGray rounded-[20px] ">
            <input
              ref={messageRef}
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
              type="text"
              placeholder="Type your message"
              className="text-darkGray  py-2 border-none outline-none flex-1"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />
            <div
              onClick={() => fileRef.current.click()}
              className="cursor-pointer p-2 rounded-full hover:scale-125 transition-transform hover:text-darkGray duration-300"
            >
              <RiAttachment2 size={24} />
            </div>

            <input
              ref={fileRef}
              onChange={handleImageUpload}
              className="hidden"
              type="file"
              accept="*"
            />

            <div
              onClick={() => setIsEmojiOpen((prev) => !prev)}
              className="cursor-pointer p-2 rounded-full hover:scale-125 transition-transform hover:text-darkGray duration-300"
            >
              <MdEmojiEmotions size={24} />
            </div>
          </div>

          {/* Send Button */}
          <div
            onClick={sendMessage}
            className="cursor-pointer p-2 rounded-full hover:scale-125 transition-transform hover:text-darkGray duration-300"
          >
            <IoSend size={24} />
          </div>
        </div>
      </div>
    </Box>
  );
}

export default ChatFooter;
