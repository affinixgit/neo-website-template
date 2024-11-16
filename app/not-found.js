import Link from "next/link";
export default function NotFoundPage() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-2xl mt-2">Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          Sorry, the page you’re looking for doesn’t exist.
        </p>
        <Link
          href="/"
          className="mt-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Go Back to Home
        </Link>
      </div>
    );
  }