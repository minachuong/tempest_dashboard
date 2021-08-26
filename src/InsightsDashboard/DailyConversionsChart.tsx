import { Conversion } from "./useGetInsights";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import "./DailyConversionsChart.css";

export const DailyConversionsChart = (props: DailyConversionsChartProps) => {
  const { conversions } = props;
  let dateStart, dateEnd;

  const mapConversionsToChartData = () => {
    return conversions.map(conversion => {
      return {
        name: conversion.date,
        total: conversion.daily_conversions
      };
    });
  }

  const chartData = mapConversionsToChartData();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getUTCMonth() + 1}/${date.getUTCDate()}`;
  }

  if (conversions.length) {
    dateStart = formatDate(conversions[0].date);
    dateEnd = formatDate(conversions[conversions.length - 1].date);
  }

  return(
    <>
      <ResponsiveContainer width="100%" height={80}>
        <LineChart data={chartData}>
          <Line dataKey="total" stroke="#000" dot={false}/>
        </LineChart>
      </ResponsiveContainer>
      { conversions.length
          ? <p className="chart__title">Conversions {dateStart} - {dateEnd}</p>
          : "..."
      }
    </>
  );
}

export interface DailyConversionsChartProps {
  conversions: Conversion[];
}