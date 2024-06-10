import { Link, Outlet } from "react-router-dom";
const AdminSector = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[480px] p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Generation Thailand Home - Admin Sector
      </h1>
      <div className="flex justify-around w-full max-w-lg mb-6">
        <Link
          to="/User"
          className="text-xl text-[#DC5F00] border-2 border-[#DC5F00] p-2"
        >
          User Home Sector
        </Link>
        <Link
          to="/Admin"
          className="text-xl text-[#DC5F00] border-2 border-[#DC5F00] p-2"
        >
          Admin Home Sector
        </Link>
      </div>
      <div className="w-full max-w-4xl">
        <Outlet />
      </div>
    </div>
  );
};
export default AdminSector;
