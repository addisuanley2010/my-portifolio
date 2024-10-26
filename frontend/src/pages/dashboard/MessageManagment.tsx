import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface Message {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
  reply?: string;
}


const MessageManagment: React.FC = () => {







  // const [messages, setMessages] = useState<Message[]>(dummyMessages);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [replyText, setReplyText] = useState("");

  const messages = useSelector((state: RootState) => state.message);

console.log(messages,'this is messages')


  // const deleteMessage = (id: number) => {
  //   setMessages(messages.filter((message) => message.id !== id));
  //   if (selectedMessage && selectedMessage.id === id) {
  //     setSelectedMessage(null);
  //   }
  // };

  // const handleReply = () => {
  //   if (selectedMessage && replyText) {
  //     const updatedMessages = messages.map((message) =>
  //       message.id === selectedMessage.id
  //         ? { ...message, reply: replyText }
  //         : message
  //     );
  //     setMessages(updatedMessages);
  //     setSelectedMessage({ ...selectedMessage, reply: replyText });
  //     setReplyText("");
  //   }
  // };

  return (
    <div className="min-h-screen bg-slate-800 p-8">
      <h3 className="text-xl font-bold text-white mb-8">Contact Dashboard</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 bg-gray-700 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">Messages</h2>
          <ul>
            {messages?.contactData.map((message:any) => (
              <li
                key={message.id}
                className="mb-2 p-2 bg-gray-800 rounded-md cursor-pointer hover:bg-gray-600"
                onClick={() => setSelectedMessage(message)}
              >
                <p className="text-white font-semibold">{message.name}</p>
                <p className="text-gray-300 text-sm">{message.date}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 bg-gray-700 p-4 rounded-lg">
          {selectedMessage ? (
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Message Details
              </h2>
              <p className="text-white">
                <strong>Name:</strong> {selectedMessage.name}
              </p>
              <p className="text-white">
                <strong>Email:</strong> {selectedMessage.email}
              </p>
              <p className="text-white">
                <strong>Phone:</strong> {selectedMessage.phone}
              </p>
              <p className="text-white">
                <strong>Date:</strong> {selectedMessage.createdAt}
              </p>
              <p className="text-white mt-4">
                <strong>Message:</strong>
              </p>
              <p className="text-white">{selectedMessage.message}</p>

              {selectedMessage.reply && (
                <div className="mt-4">
                  <p className="text-white">
                    <strong>Your Reply:</strong>
                  </p>
                  <p className="text-white">{selectedMessage.reply}</p>
                </div>
              )}

              <div className="mt-4">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="w-full bg-gray-700 text-white p-2 rounded-md"
                  rows={4}
                  placeholder="Type your reply here..."
                ></textarea>
                <button
                  // onClick={handleReply}
                  className="mt-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 mr-2"
                >
                  Send Reply
                </button>
                <button
                  // onClick={() => deleteMessage(selectedMessage.id)}
                  className="mt-2 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
                >
                  Delete Message
                </button>
              </div>
            </div>
          ) : (
            <p className="text-white text-center mt-8">
              Select a message to view details
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageManagment;
