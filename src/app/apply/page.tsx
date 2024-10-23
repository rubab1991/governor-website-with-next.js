import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Apply() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="bg-white shadow-2xl rounded-lg p-10 w-full max-w-lg">
                <p className="text-sky-800 text-4xl text-center mb-10">
                    Before continuing to the application,
                    <br /> please subscribe to these social
                    <br /> media platforms.
                </p>

                <div className="flex justify-center space-x-5 mb-8">
                    <Link href="https://www.facebook.com/TeamKTessori/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="text-blue-600 hover:text-blue-900 w-8 h-8" />
                    </Link>
                </div>

                <div className="text-center">
                    <Link href="https://www.facebook.com/TeamKTessori/" target="_blank">
                        <button className="bg-sky-800 text-white font-extrabold px-16 py-3 rounded-md">
                            CONTINUE
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
