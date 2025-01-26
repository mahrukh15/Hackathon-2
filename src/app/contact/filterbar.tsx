export default function FilterBar() {
    return (
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2 bg-white shadow-sm">
        {/* Filters Section */}
        <div className="flex space-x-4">
          <div className="relative">
            <button className="text-sm text-gray-700 hover:text-gray-900 focus:outline-none">
              Category <span className="ml-1">▼</span>
            </button>
          </div>
          <div className="relative">
            <button className="text-sm text-gray-700 hover:text-gray-900 focus:outline-none">
              Product type <span className="ml-1">▼</span>
            </button>
          </div>
          <div className="relative">
            <button className="text-sm text-gray-700 hover:text-gray-900 focus:outline-none">
              Price <span className="ml-1">▼</span>
            </button>
          </div>
          <div className="relative">
            <button className="text-sm text-gray-700 hover:text-gray-900 focus:outline-none">
              Brand <span className="ml-1">▼</span>
            </button>
          </div>
        </div>
  
        {/* Sorting Section */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Sorting by:</span>
          <div className="relative">
            <button className="text-sm text-gray-700 hover:text-gray-900 focus:outline-none">
              Date added <span className="ml-1">▼</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  