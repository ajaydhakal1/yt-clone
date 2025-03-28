import { useState } from 'react';

const FileUploader = () => {
    const [fileName, setFileName] = useState<string>('No file chosen');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setFileName(file ? file.name : 'No file chosen');
    };

    return (
        <div className="flex flex-col items-center gap-2">
            <label
                htmlFor="fileInput"
                className="cursor-pointer rounded-3xl bg-black px-4 py-2 font-semibold text-white transition hover:bg-black/90"
            >
                Upload File
            </label>
            <input type="file" id="fileInput" className="hidden" onChange={handleFileChange} />
        </div>
    );
};

export default FileUploader;
