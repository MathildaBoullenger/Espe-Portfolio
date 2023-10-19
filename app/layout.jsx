import Link from 'next/link';
import NavBar from '../components/NavBar';
import { inter} from './fonts';
import './globals.css';


export default function RootLayout({ children }) {
    return (
        <html lang= "en" className={`flex justify-center ${inter.variable}`}>
            <body className="bg-gray-200 flex flex-col px-4 py-2 min-h-screen w-[100%] md:w-[66%] lg:w-[50%]">
                <header>
                    <NavBar></NavBar>
                </header>
                <main className="grow py-3 px-5">
                    {children}    
                </main>
                <footer className="border-t py-3 text-center text-slate-500 text-xs">
                    Website by Mathilda Boullenger
                </footer>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
            </body>
        </html>
    );

}