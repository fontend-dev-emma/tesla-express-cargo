// "use client";

// import { useState } from "react";
// import { Eye, EyeOff, Lock } from "lucide-react";
// import toast from "react-hot-toast";
// import { resetUserPassword } from "../_lib/actions";

// function PasswordResetPage({ authId }) {
//   const [oldPassword, setOldPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showOld, setShowOld] = useState(false);
//   const [showNew, setShowNew] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [success, setSuccess] = useState(false);

//   async function handleChangePassword() {
//     if (!oldPassword || !newPassword || !confirmPassword) {
//       toast.error("Please fill in all fields");
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       if (newPassword !== confirmPassword) {
//         toast.error("New passwords do not match");
//         return;
//       }

//       const res = await resetUserPassword({ authId, oldPassword, newPassword });

//       if (res.error) {
//         toast.error(res.error);
//         return;
//       }

//       if (res.success) {
//         setTimeout(() => {
//           setSuccess(true);
//           setOldPassword("");
//           setNewPassword("");
//           setConfirmPassword("");
//           setTimeout(() => setSuccess(false), 3000);
//         }, 1000);
//       }
//     } catch (err) {
//       toast.error(err.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-800/60 p-4">
//       <div className="w-full max-w-md bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-600 rounded-3xl shadow-lg p-8">
//         <div className="flex items-center gap-3 mb-6">
//           <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
//           <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Change Password</h2>
//         </div>

//         {success && (
//           <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-3">
//             <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
//               <Lock className="text-emerald-600 w-4 h-4" />
//             </div>
//             <p className="text-sm text-emerald-700 font-semibold">Password updated successfully!</p>
//           </div>
//         )}

//         <div className="space-y-5">
//           <InputField label="Old Password" value={oldPassword} onChange={setOldPassword} show={showOld} setShow={setShowOld} />
//           <InputField label="New Password" value={newPassword} onChange={setNewPassword} show={showNew} setShow={setShowNew} />
//           <InputField
//             label="Confirm New Password"
//             value={confirmPassword}
//             onChange={setConfirmPassword}
//             show={showConfirm}
//             setShow={setShowConfirm}
//           />
//         </div>

//         <button
//           onClick={handleChangePassword}
//           disabled={isSubmitting}
//           className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-2xl transition-all shadow-md hover:shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
//         >
//           {isSubmitting ? "Updating..." : "Change Password"}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default PasswordResetPage;

// function InputField({ label, value, onChange, show, setShow }) {
//   return (
//     <div className="w-full">
//       <label className="block text-sm font-semibold text-gray-700 dark:text-gray-400 mb-2">{label}</label>
//       <div className="relative w-full">
//         <input
//           type={show ? "text" : "password"}
//           value={value}
//           required
//           onChange={(e) => onChange(e.target.value)}
//           className="w-full pr-12 pl-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 dark:text-gray-200 focus:ring-blue-100 focus:border-blue-400 transition text-gray-900"
//           placeholder={label}
//         />
//         <button
//           type="button"
//           onClick={() => setShow(!show)}
//           className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:outline-none"
//         >
//           {show ? <EyeOff size={20} /> : <Eye size={20} />}
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import toast from "react-hot-toast";
import { resetUserPassword } from "../_lib/actions";

function PasswordResetPage({ authId }) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleChangePassword() {
    if (!oldPassword || !newPassword || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      if (newPassword !== confirmPassword) {
        toast.error("New passwords do not match");
        return;
      }

      const res = await resetUserPassword({ authId, oldPassword, newPassword });

      if (res.error) {
        toast.error(res.error);
        return;
      }

      if (res.success) {
        setTimeout(() => {
          setSuccess(true);
          setOldPassword("");
          setNewPassword("");
          setConfirmPassword("");
          setTimeout(() => setSuccess(false), 3000);
        }, 1000);
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="w-full max-w-md bg-white/5 border border-gray-600 rounded-3xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Lock className="w-6 h-6 text-blue-400" />
          <h2 className="text-2xl font-bold text-gray-200">Change Password</h2>
        </div>

        {success && (
          <div className="mb-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
              <Lock className="text-emerald-400 w-4 h-4" />
            </div>
            <p className="text-sm text-emerald-400 font-semibold">Password updated successfully!</p>
          </div>
        )}

        <div className="space-y-5">
          <InputField label="Old Password" value={oldPassword} onChange={setOldPassword} show={showOld} setShow={setShowOld} />
          <InputField label="New Password" value={newPassword} onChange={setNewPassword} show={showNew} setShow={setShowNew} />
          <InputField
            label="Confirm New Password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            show={showConfirm}
            setShow={setShowConfirm}
          />
        </div>

        <button
          onClick={handleChangePassword}
          disabled={isSubmitting}
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-2xl transition-all shadow-md hover:shadow-lg disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Updating..." : "Change Password"}
        </button>
      </div>
    </div>
  );
}

export default PasswordResetPage;

function InputField({ label, value, onChange, show, setShow }) {
  return (
    <div className="w-full">
      <label className="block text-sm font-semibold text-gray-400 mb-2">{label}</label>

      <div className="relative w-full">
        <input
          type={show ? "text" : "password"}
          value={value}
          required
          onChange={(e) => onChange(e.target.value)}
          className="w-full pr-12 pl-4 py-3 rounded-xl border border-gray-600 bg-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          placeholder={label}
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-400 focus:outline-none"
        >
          {show ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </div>
  );
}
