import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const lineData = [
  { name: '1월', value: 400 },
  { name: '2월', value: 300 },
  { name: '3월', value: 600 },
  { name: '4월', value: 800 },
  { name: '5월', value: 500 },
  { name: '6월', value: 700 },
];

const barData = [
  { name: '월요일', study: 4, work: 8 },
  { name: '화요일', study: 3, work: 7 },
  { name: '수요일', study: 5, work: 8 },
  { name: '목요일', study: 2, work: 6 },
  { name: '금요일', study: 4, work: 7 },
];

const pieData = [
  { name: 'React', value: 400 },
  { name: 'Vue', value: 300 },
  { name: 'Angular', value: 300 },
  { name: 'Svelte', value: 200 },
];

const RechartsExample: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Line Chart Example</h2>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Bar Chart Example</h2>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="study" fill="#8884d8" />
              <Bar dataKey="work" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Pie Chart Example</h2>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => 
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              />
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Usage Notes:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Recharts는 D3.js를 기반으로 한 React용 차트 라이브러리입니다.</li>
          <li>ResponsiveContainer를 사용하여 반응형 차트를 구현할 수 있습니다.</li>
          <li>다양한 차트 타입(Line, Bar, Pie, Area, Radar 등)을 제공합니다.</li>
          <li>커스터마이징이 용이하며 애니메이션도 지원합니다.</li>
        </ul>
      </div>
    </div>
  );
};

export default RechartsExample; 