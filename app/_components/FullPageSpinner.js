// function FullPageSpinner() {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-50 transition-colors duration-200">
//       <div className="relative w-20 h-20">
//         <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-400 dark:border-t-blue-400 dark:border-r-blue-300 animate-spin"></div>

//         <div
//           className="absolute inset-2 rounded-full border-3 border-transparent border-b-purple-500 dark:border-b-purple-400 animate-spin"
//           style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
//         ></div>

//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FullPageSpinner;

function FullPageSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-50 transition-colors duration-200">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-teal-600 border-r-teal-500  dark:border-t-teal-500 dark:border-r-teal-400 animate-spin"></div>

        <div
          className="absolute inset-2 rounded-full border-3 border-transparent border-b-purple-500 dark:border-b-purple-400 animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
        ></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-teal-600 dark:bg-teal-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default FullPageSpinner;
