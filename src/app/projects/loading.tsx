import { AiOutlineLoading } from "react-icons/ai";

export default function Loading() {
  return (
    <>
      <div className="w-full h-full flex flex-row items-center justify-center bg-black">
        <p>Loading</p>
        <AiOutlineLoading className="animate-spin" size={24} />
      </div>
    </>
  );
}
