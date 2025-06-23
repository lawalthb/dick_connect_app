import { useState, useEffect } from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import ActionDropdown from './ActionDropDown';
import StatusBadge from './StatusBadge';

const Table = ({ adsData, columns, handleClick, actionOptions }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-wrapper')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mt-10 overflow-x-auto rounded-lg shadow border bg-white">
      {/* Desktop Table */}
      <div className="hidden lg:block min-h-[500px] overflow-y-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 sticky top-0 z-10">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-6 py-3 font-medium whitespace-nowrap"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {adsData.map((ad) => (
              <tr key={ad.id} className="border-t hover:bg-gray-50">
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="px-6 py-4 align-top whitespace-nowrap"
                  >
                    {col.key === 'progress' ? (
                      <>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                          <div
                            className="bg-[#A20030] h-2.5 rounded-full"
                            style={{ width: `${ad.progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500">
                          {ad.progress}%
                        </span>
                      </>
                    ) : col.key === 'status' ? (
                      <StatusBadge status={ad.status} />
                    ) : col.key === 'action' ? (
                      <div className="relative dropdown-wrapper">
                        <button
                          type="button"
                          onClick={() => toggleDropdown(ad.id)}
                        >
                          <HiDotsVertical className="w-5 h-5 text-gray-500 cursor-pointer" />
                        </button>
                        {openDropdown === ad.id && (
                          <ActionDropdown
                            onClose={() => toggleDropdown(null)}
                            handleClick={handleClick}
                            items={actionOptions}
                          />
                        )}
                      </div>
                    ) : (
                      ad[col.key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden flex flex-col gap-4 p-4">
        {adsData.map((ad) => (
          <div key={ad.id} className="border rounded-lg p-4 shadow-sm bg-white">
            {columns.map((col) => (
              <div key={col.key} className="mb-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-gray-500 text-xs font-medium uppercase whitespace-nowrap">
                    {col.label}
                  </div>
                  <div className="text-sm text-gray-800 text-right flex-1">
                    {col.key === 'progress' ? (
                      <div className="w-full">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                          <div
                            className="bg-[#A20030] h-2.5 rounded-full"
                            style={{ width: `${ad.progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500">
                          {ad.progress}%
                        </span>
                      </div>
                    ) : col.key === 'status' ? (
                      <StatusBadge status={ad.status} />
                    ) : col.key === 'action' ? (
                      <div className="relative dropdown-wrapper">
                        <button
                          type="button"
                          onClick={() => toggleDropdown(ad.id)}
                        >
                          <HiDotsVertical className="w-5 h-5 text-gray-500 cursor-pointer" />
                        </button>
                        {openDropdown === ad.id && (
                          <ActionDropdown
                            onClose={() => toggleDropdown(null)}
                            handleClick={handleClick}
                            items={actionOptions}
                          />
                        )}
                      </div>
                    ) : (
                      <span className="truncate">{ad[col.key]}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
