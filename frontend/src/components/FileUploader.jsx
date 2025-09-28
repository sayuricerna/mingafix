import React from 'react';
import { CameraIcon, PhotoIcon } from '@heroicons/react/24/outline';

const FileUploader = ({ onFileSelect }) => {
  const fileInputRef = React.useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      onClick={handleButtonClick}
      className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 
                 cursor-pointer hover:bg-gray-200 transition duration-150 h-32 w-full"
    >
      <PhotoIcon className="w-8 h-8 text-gray-500" />
      <p className="mt-2 text-sm font-medium text-gray-700">Toca para añadir foto</p>
      <input
        type="file"
        ref={fileInputRef}
        onChange={onFileSelect}
        accept="image/*"
        multiple 
        className="hidden"
      />
    </div>
  );
};

export default FileUploader;