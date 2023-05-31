import { fetchBlob } from "@/libs/firebase/photos";
import { DownloadSimple } from "@phosphor-icons/react";
import React from "react";

interface Props {
  name: string;
  path: string;
}

const download = (filename: string, blob: Blob) => {
  // 2. Create blob link to download
  const url = window.URL.createObjectURL(new Blob([blob]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  // 3. Append to html page
  document.body.appendChild(link);
  // 4. Force download
  link.click();
  // 5. Clean up and remove the link
  link.parentNode?.removeChild(link);
};

export default function DownloadButton({ name, path }: Props) {
  const handleClick = async () => {
    const blob = await fetchBlob(path);
    download(name, blob);
  };
  return (
    <button
      className="rounded-full w-8 h-8 bg-gray-700 hover:bg-gray-600 active:bg-gray-800"
      onClick={handleClick}
    >
      <DownloadSimple className="mx-auto" size={20} />
    </button>
  );
}
