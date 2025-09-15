export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-50">
      <h2 className="text-4xl font-bold text-gray-800 mb-2">404</h2>
      <p className="text-lg text-gray-600 mb-4">Page not found</p>
      <a
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go Home
      </a>
    </div>
  );
}
