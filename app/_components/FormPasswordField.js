"use client";

import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";

function FormPasswordField({ fieldLabel = "Password", inputId = "password", value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label htmlFor="password" className="text-sm font-medium text-gray-300">
        {fieldLabel} *
      </label>

      <div className="flex items-center mt-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
        <Lock className="text-blue-400 w-5 h-5 mr-2" />

        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id={inputId}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
          placeholder="Enter your password"
          className="bg-transparent w-full outline-none text-sm placeholder-gray-500 text-gray-100"
        />

        <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-400 hover:text-gray-200 focus:outline-none">
          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
}

export default FormPasswordField;
