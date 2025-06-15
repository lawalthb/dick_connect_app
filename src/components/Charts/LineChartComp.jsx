import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { formatTooltip, formatYAxis } from '../Utils/methods';
import { GoDotFill } from 'react-icons/go';
import { IoClose } from 'react-icons/io5';
import SelectField from '../Input/SelectField';

const LineChartComp = ({
  data,
  title = 'Performance Overview',
  chartLabel = 'value',
}) => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-lg p-6">
      <div className="flex justify-between">
        <div className="flex items-center justify-center gap-3 rounded-[10px] bg-[#A2003021] py-2 px-4 w-max h-max">
          <GoDotFill fill="#A20030" />
          <h2 className="text-sm font-normal text-[#5C5C5C] mt-1">{title}</h2>
          <IoClose fill="#5C5C5C" />
        </div>
        <div className="w-[125px]">
          <SelectField
            name="platform"
            defaultValue=""
            required={false}
            bgStyle={false}
          >
            {['2024', '2025'].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </SelectField>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid stroke="#f1f5f9" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="#00000099" />
          <YAxis
            tickFormatter={formatYAxis}
            tick={{ fontSize: 12 }}
            stroke="#00000099"
          />
          <Tooltip
            contentStyle={{ borderRadius: 8, fontSize: '12px' }}
            labelStyle={{ color: '#2E2E2E' }}
            formatter={(value) => formatTooltip(value, data, chartLabel)}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#A20030"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComp;
