import axios from 'axios';
import { UploadIcon } from 'lucide-react';
import { useState } from 'react';

const CreateVideo = () => {
    interface Video {
        url: string;
    }

    const [file, setFile] = useState<File | null>(null);
    const [dragActive, setDragActive] = useState(false);
    const [step, setStep] = useState<'upload' | 'details'>('upload');
    const [activeTab, setActiveTab] = useState<'details' | 'visibility'>('details');
    const [videos, setVideos] = useState<Video[]>([]);
    const [newVideo, setNewVideo] = useState({ url: '' });
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [thumbnail, setThumbnail] = useState<string>('');

    // Handle file selection from input
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputElement = event.target as HTMLInputElement;
        if (inputElement.files && inputElement.files.length > 0) {
            setFile(inputElement.files[0]);
            setStep('details'); // Move to next screen
        }
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('title', title);
        console.log('Title:', title);
        formData.append('description', description);
        console.log('Description:', description);
        formData.append('video_url', 'random_characters');
        formData.append('thumbnail', 'Random');
        console.log('Thumbnail:', thumbnail);

        try {
            const response = await axios
                .post('http://localhost:8001/api/v1/videos', formData)
                .then((response) => {
                    console.log(response);
                });

            alert('Video Upload Success');
            // setVideos([...videos, response.data]);
            // setNewVideo({ url: '' });
        } catch (error) {
            console.error('Error uploading video:', error);
        }
    };

    // Handle drag events
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragActive(true);
    };

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragActive(false);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragActive(false);
        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            setFile(event.dataTransfer.files[0]);
            setStep('details'); // Move to next screen
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-white p-3">
            <div className="h-[600px] w-full max-w-4xl rounded bg-white p-4 shadow-2xl drop-shadow">
                {step === 'upload' ? (
                    // Step 1: Upload Video
                    <>
                        <h1 className="text-center text-3xl font-bold text-black">Upload Video</h1>
                        <hr className="my-3" />

                        <div
                            className={`flex h-full flex-col items-center justify-center rounded-2xl p-4 text-black shadow-xl shadow-gray-200 transition ${
                                dragActive ? 'border-2 border-blue-500 bg-blue-100' : 'border border-gray-300'
                            }`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                        >
                            <label htmlFor="fileInput" className="cursor-pointer rounded-full bg-gray-200 p-5">
                                <UploadIcon className="h-20 w-20 text-gray-500" />
                                <input type="file" id="fileInput" className="hidden" onChange={handleFileChange} />
                            </label>

                            <div className="py-3 text-center">
                                <h1 className="font-medium">Drag and drop video file to upload</h1>
                                <p className="text-gray-500">Your videos will be private until you publish them.</p>
                            </div>
                        </div>
                    </>
                ) : (
                    // Step 2: Video Details & Visibility
                    <>
                        {/* Tabs */}
                        <div className="flex justify-between border-b pb-2">
                            <button
                                className={`w-1/2 p-2 text-lg font-semibold ${
                                    activeTab === 'details' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
                                }`}
                                onClick={() => setActiveTab('details')}
                            >
                                Video Details
                            </button>
                            <button
                                className={`w-1/2 p-2 text-lg font-semibold ${
                                    activeTab === 'visibility' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
                                }`}
                                onClick={() => setActiveTab('visibility')}
                            >
                                Visibility
                            </button>
                        </div>

                        <div className="p-4">
                            {activeTab === 'details' ? (
                                // Video Details Tab
                                <div>
                                    <h2 className="text-center text-xl font-semibold text-black">Video Details</h2>
                                    <label className="mt-4 block">
                                        <span className="text-gray-700">Title</span>
                                        <input
                                            type="text"
                                            id="title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            placeholder="Enter video title"
                                            className="mt-1 block w-full rounded border-gray-300 p-2 text-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        />
                                    </label>

                                    <label className="mt-4 block">
                                        <span className="text-gray-700">Description</span>
                                        <textarea
                                            id="description"
                                            onChange={(e) => setDescription(e.target.value)}
                                            placeholder="Write a description..."
                                            className="mt-1 block w-full rounded border-gray-300 p-2 text-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        />
                                    </label>

                                    <label className="mt-4 block">
                                        <span className="text-gray-700">Thumbnail</span>
                                        <input type="file" id="thumbnail" onChange={(e) => setThumbnail(e.target.value)} />
                                        <img src={file ? URL.createObjectURL(file) : ''} alt="Thumbnail" className="h-20 w-20" />
                                    </label>

                                    <label className="mt-4 flex flex-col text-black">
                                        <span className="text-gray-700">Category</span>
                                        <select id="category" className="w-20 py-2 outline-0">
                                            <option value="gaming" disabled>
                                                Select Category
                                            </option>
                                            <option value="people-and-vlogs">People&Vlogs</option>
                                            <option value="gaming">Gaming</option>
                                        </select>
                                    </label>

                                    <div className="flex justify-end">
                                        <button
                                            className="rounded bg-blue-500 px-3 py-2 hover:bg-blue-500/90"
                                            onClick={() => setActiveTab('visibility')}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                // Visibility Tab
                                <div>
                                    <h2 className="text-center text-xl font-semibold text-black">Set Video Visibility</h2>
                                    <div className="mt-4 space-y-2 text-black">
                                        <label className="flex items-center space-x-2">
                                            <input type="radio" name="visibility" value="public" className="form-radio text-blue-500" />
                                            <span>Public</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input type="radio" name="visibility" value="private" className="form-radio text-blue-500" />
                                            <span>Private</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input type="radio" name="visibility" value="unlisted" className="form-radio text-blue-500" />
                                            <span>Unlisted</span>
                                        </label>
                                    </div>

                                    <div className="flex justify-end">
                                        <button className="rounded bg-blue-500 px-3 py-2 hover:bg-blue-500/90" onClick={handleUpload}>
                                            Upload
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CreateVideo;
