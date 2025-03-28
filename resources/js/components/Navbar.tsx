import { Link } from '@inertiajs/react';
import { Bell, Mic, NotebookPen, Plus, Search, Video } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    // Refs for detecting outside clicks
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDialogOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="px-3 py-2">
            <nav className="flex items-center justify-between">
                {/* Left Section */}
                <div className="flex gap-3">
                    <img src="images/icons/menu.svg" alt="menu" className="w-7 fill-white" />
                    <img src="images/icons/youtube.svg" alt="yt-logo" className="w-8" />
                </div>

                {/* Search Bar */}
                <div className="flex items-center gap-2">
                    <div className="flex items-center space-x-2 overflow-hidden rounded-3xl border-2 border-gray-400/80">
                        <input type="text" className="text-md px-3 text-black outline-none" placeholder="Search" />
                        <button className="bg-gray-200/70 px-4 py-2">
                            <Search className="text-black" />
                        </button>
                    </div>

                    <button className="rounded-full bg-gray-200/50 p-3">
                        <Mic className="text-black" />
                    </button>
                </div>

                {/* Right Section (Create Button, Notifications, Profile) */}
                <div className="relative flex items-center gap-3">
                    {/* Create Button */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            className="flex items-center gap-2 rounded-3xl bg-gray-500/80 px-4 py-2 hover:bg-gray-400"
                            onClick={() => setIsDialogOpen(!isDialogOpen)}
                        >
                            <Plus />
                            <h2>Create</h2>
                        </button>

                        {/* Dropdown Menu */}
                        {isDialogOpen && (
                            <div className="absolute left-0 z-10 mt-2 w-48 rounded-xl bg-gray-400 py-3 text-white shadow-lg">
                                <div className="flex flex-col gap-3">
                                        <Link href='video/create' className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-1 whitespace-nowrap hover:bg-gray-500">
                                            <Video className="w-6" />
                                            <h3>Upload Video</h3>
                                        </Link>

                                    {/* Create Post */}
                                    <button className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-1 whitespace-nowrap hover:bg-gray-500">
                                        <NotebookPen className="w-6" />
                                        <h3>Create Post</h3>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Notifications */}
                    <Bell className="cursor-pointer text-black" />

                    {/* Profile Placeholder */}
                    <div className="rounded-full bg-yellow-200 p-4"></div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
