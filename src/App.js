
import './App.css';
import React from "react";
import { Chart } from "react-google-charts";



export const data = [
  ["Содержание витамина С", "мг в 100 гр"],
  ["Шиповник сухой", 1200],
  ["Черная смородина", 200],
  ["Апельсин", 60],
  ["Перец красный", 250],
  ["Лимон", 40],
];

export const options = {
  title: "Содержание витамина С в продуктах",
};

export const areaChartData = [
  ["Месяц", "выручка", "себестоимость"],
  ["январь",  1000, 400],
  ["февраль",  1170, 460],
  ["март",  660, 1120],
  ["апрель",  1030, 540],
  ["май",  900, 1020],
  ["июнь",  1300, 540],
  ["июль",  1003, 504],
  ["авуст",  1500, 740],
];

export const areaChartOptions = {
  title: "Доходы и расходы компании Рога и копыта",
  hAxis: { title: "месяц", },
  vAxis: { title: "сумма", },
  isStacked: true,
};

export function App() {
  return (
    <div>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
      <Chart
        chartType="AreaChart"
        data={areaChartData}
        options={areaChartOptions}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}

export default App;

