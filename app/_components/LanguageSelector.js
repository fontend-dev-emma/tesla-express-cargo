"use client";
import { useEffect, useState } from "react";

function LanguageSelector() {
  const [selectedLang, setSelectedLang] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) setSelectedLang(savedLang);
  }, []);

  function handleLanguageChange(e) {
    const lang = e.target.value;
    setSelectedLang(lang);
    localStorage.setItem("lang", lang);

    setTimeout(() => {
      const combo = document.querySelector(".goog-te-combo");
      if (combo) {
        combo.value = lang;
        combo.dispatchEvent(new Event("change"));
      }
    }, 500);
  }

  return (
    <div className="w-full flex justify-end px-4 py-2 mb-4 bg-inherit ">
      <div className="relative w-full sm:w-auto">
        <select
          value={selectedLang}
          onChange={handleLanguageChange}
          className="w-full sm:w-[180px] appearance-none bg-white/5 border border-blue-200  text-sm rounded-lg py-2 pl-3 pr-10 focus:ring-2 outline-none focus:ring-black/15 text-blue-400  transition-all duration-200 cursor-pointer "
        >
          <option value="en">🌐 English</option>
          <option value="fr">🇫🇷 French</option>
          <option value="es">🇪🇸 Spanish</option>
          <option value="de">🇩🇪 German</option>
          <option value="ar">🇸🇦 Arabic</option>
          <option value="zh-CN">🇨🇳 Chinese (Simplified)</option>
          <option value="zh-TW">🇹🇼 Chinese (Traditional)</option>
          <option value="ja">🇯🇵 Japanese</option>
          <option value="ko">🇰🇷 Korean</option>
          <option value="ru">🇷🇺 Russian</option>
          <option value="pt">🇵🇹 Portuguese</option>
          <option value="it">🇮🇹 Italian</option>
          <option value="nl">🇳🇱 Dutch</option>
          <option value="hi">🇮🇳 Hindi</option>
          <option value="tr">🇹🇷 Turkish</option>
          <option value="sv">🇸🇪 Swedish</option>
          <option value="pl">🇵🇱 Polish</option>
          <option value="id">🇮🇩 Indonesian</option>
          <option value="vi">🇻🇳 Vietnamese</option>
          <option value="uk">🇺🇦 Ukrainian</option>
        </select>

        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">▼</span>
      </div>
    </div>
  );
}

export default LanguageSelector;
