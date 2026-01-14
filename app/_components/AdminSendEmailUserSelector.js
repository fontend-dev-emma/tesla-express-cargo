"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

function AdminSendEmailUserSelector({ users, selectedUserName, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedUser = users?.find((u) => u.receiverName === selectedUserName);
  const username = `${selectedUser?.receiverName}`;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 sm:px-4 py-2.5 bg-black/5 border border-gray-600 rounded-lg text-left text-sm text-gray-200 hover:bg-white/5 transition-colors flex items-center justify-between"
      >
        <span className={`truncate ${selectedUser ? "text-gray-200" : "text-gray-300"}`}>{selectedUser ? username : "Select a user..."}</span>
        <ChevronDown size={18} className={`text-gray-200 transition-transform flex-shrink-0 ml-2 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-black border border-gray-600 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
          {users.map((s) => (
            <button
              key={s.trackingNumber}
              onClick={() => {
                onSelect(s.receiverName);
                setIsOpen(false);
              }}
              className="w-full px-3 sm:px-4 py-2.5 text-left text-sm hover:bg-white/5 transition-colors border-b border-gray-600 last:border-b-0 text-gray-200"
            >
              <div className="font-medium truncate">{s.receiverName}</div>
              <div className="text-xs text-gray-400 truncate">{s.receiverEmail}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminSendEmailUserSelector;
