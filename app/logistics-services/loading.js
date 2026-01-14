import FullPageSpinner from "../_components/FullPageSpinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <FullPageSpinner />
    </div>
  );
}
