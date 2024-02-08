import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 static text-white w-64 flex flex-col h-screen border-gray-800 border-2">
      <div className="p-4">
        <h2 className="text-xl font-bold">Admin Panel</h2>
      </div>
      <div className="flex-grow">
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard"
              className="block py-2 px-4 text-white hover:bg-gray-700"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/users"
              className="block py-2 px-4 text-white hover:bg-gray-700"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              href="/posts"
              className="block py-2 px-4 text-white hover:bg-gray-700"
            >
              Posts
            </Link>
          </li>
        </ul>
      </div>
      <div className="p-4">Footer or additional content</div>
    </div>
  );
};

export default Sidebar;
