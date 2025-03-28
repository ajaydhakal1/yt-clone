import Navbar from '@/components/Navbar';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import Index from './Home/index';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <div className='bg-white px-4'>
            <Head>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <Navbar />
            <Index />
        </div>
    );
}
