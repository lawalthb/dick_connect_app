import { useCallback } from 'react';
import Table from '../Table';
import SearchField from '../Input/SearchField';
import FilterButton from '../FilterButton';

const columns = [
  { key: 'name', label: 'Ad Name' },
  { key: 'type', label: 'Type' },
  { key: 'startDate', label: 'Start Date' },
  { key: 'endDate', label: 'End Date' },
  { key: 'target', label: 'Target' },
  { key: 'progress', label: 'Progress' },
  { key: 'clicks', label: 'Clicks' },
  { key: 'status', label: 'Status' },
  { key: 'action', label: 'Action' },
];

const adsData = [
  {
    id: 1,
    name: 'Spring Sale Campaign',
    type: 'Banner',
    startDate: '2025-06-01',
    endDate: '2025-06-15',
    target: 'Young Adults',
    progress: 60,
    clicks: 345,
    status: 'Active',
  },
  {
    id: 2,
    name: 'Summer Giveaway',
    type: 'Video',
    startDate: '2025-06-10',
    endDate: '2025-06-30',
    target: 'All Users',
    progress: 80,
    clicks: 780,
    status: 'Paused',
  },
  {
    id: 3,
    name: 'Back to School',
    type: 'Image',
    startDate: '2025-07-01',
    endDate: '2025-07-14',
    target: 'Students',
    progress: 45,
    clicks: 212,
    status: 'Active',
  },
  {
    id: 4,
    name: 'New Product Launch',
    type: 'Video',
    startDate: '2025-07-10',
    endDate: '2025-07-31',
    target: 'Tech Enthusiasts',
    progress: 20,
    clicks: 95,
    status: 'Draft',
  },
  {
    id: 5,
    name: 'Holiday Deals',
    type: 'Banner',
    startDate: '2025-08-01',
    endDate: '2025-08-20',
    target: 'General Public',
    progress: 95,
    clicks: 1200,
    status: 'Active',
  },
  {
    id: 6,
    name: 'Flash Friday',
    type: 'Image',
    startDate: '2025-08-05',
    endDate: '2025-08-07',
    target: 'E-commerce Shoppers',
    progress: 100,
    clicks: 950,
    status: 'Completed',
  },
  {
    id: 7,
    name: 'Autumn Promo',
    type: 'Banner',
    startDate: '2025-09-01',
    endDate: '2025-09-15',
    target: 'Retail Customers',
    progress: 40,
    clicks: 300,
    status: 'Active',
  },
  {
    id: 8,
    name: 'Free Trial Week',
    type: 'Video',
    startDate: '2025-09-20',
    endDate: '2025-09-27',
    target: 'New Users',
    progress: 75,
    clicks: 500,
    status: 'Paused',
  },
  {
    id: 9,
    name: 'Year-End Blowout',
    type: 'Image',
    startDate: '2025-12-01',
    endDate: '2025-12-31',
    target: 'All Users',
    progress: 30,
    clicks: 150,
    status: 'Draft',
  },
  {
    id: 10,
    name: 'Fitness Challenge',
    type: 'Video',
    startDate: '2025-10-10',
    endDate: '2025-10-24',
    target: 'Health Enthusiasts',
    progress: 50,
    clicks: 430,
    status: 'Active',
  },
];

const AdvertListings = () => {
  const handleClick = (actionKey) => {
    console.log(`Action performed: ${actionKey}`);
  };
  const handleFilter = () => {};
  return (
    <>
      <div className="flex items-center justify-center gap-3 ml-auto max-w-md">
        <div className="w-[384px]">
          <SearchField />
        </div>
        <div className="w-[91px]">
          <FilterButton handleFilter={handleFilter} />
        </div>
      </div>
      <Table
        adsData={adsData}
        columns={columns}
        handleClick={handleClick}
        actionOptions={[
          { key: 'pause', label: 'Pause Ad' },
          { key: 'stop', label: 'Stop Ad' },
          { key: 'delete', label: 'Delete Ad' },
        ]}
      />
    </>
  );
};

export default AdvertListings;
