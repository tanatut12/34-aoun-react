const UserTable = ({ submittedData }) => {
  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-6">Employee List</h1>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">Name</th>
              <th className="py-2 px-4 border-b border-gray-200">Last Name</th>
              <th className="py-2 px-4 border-b border-gray-200">Position</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((submittedData, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-200">
                  {submittedData.name}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {submittedData.lastname}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {submittedData.position}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default UserTable;
