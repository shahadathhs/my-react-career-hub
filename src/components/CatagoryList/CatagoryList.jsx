import accounts from "../../assets/icons/accounts.png"

const CatagoryList = () => {
  return (
    <div className="text-center p-5 space-y-4">
      <h2 className="text-5xl">Job Category List</h2>
      <p className="text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className="flex gap-4 justify-between p-5">
        <div className="p-2 bg-gray-200 text-left rounded-md">
          <img src={accounts} alt="no image" />
          <h3 className="text-2xl">Account & Finance</h3>
          <p className="text-gray-500">300 Jobs Available</p>
        </div>
        <div className="p-2 bg-gray-200 text-left rounded-md">
          <img src={accounts} alt="no image" />
          <h3 className="text-2xl">Account & Finance</h3>
          <p className="text-gray-500">300 Jobs Available</p>
        </div>
        <div className="p-2 bg-gray-200 text-left rounded-md">
          <img src={accounts} alt="no image" />
          <h3 className="text-2xl">Account & Finance</h3>
          <p className="text-gray-500">300 Jobs Available</p>
        </div>
        <div className="p-2 bg-gray-200 text-left rounded-md">
          <img src={accounts} alt="no image" />
          <h3 className="text-2xl">Account & Finance</h3>
          <p className="text-gray-500">300 Jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default CatagoryList;