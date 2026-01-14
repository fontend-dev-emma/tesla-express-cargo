import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => <LoadingEditor />,
});

function AdminSendEmailMessageEditor({ value, onChange }) {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = ["bold", "italic", "underline", "strike", "blockquote", "code-block", "list", "align", "link", "image"];

  return (
    <div className="flex flex-col">
      <label className="mb-2 text-xs sm:text-sm font-semibold text-gray-400">Message</label>
      <div className="rounded-lg border border-gray-600 overflow-hidden bg-black/5 text-gray-200 focus-within:ring-2 focus-within:ring-blue-500  message-editor-container">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={onChange}
          modules={modules}
          formats={formats}
          placeholder="Write your message here..."
          className="message-editor"
        />
      </div>
    </div>
  );
}

export default AdminSendEmailMessageEditor;

function LoadingEditor() {
  return (
    <div className="h-48 sm:h-64 bg-black/5 rounded-lg flex items-center justify-center">
      <span className="text-gray-200 text-sm sm:text-base">Loading editor...</span>
    </div>
  );
}
