import { InsightCard } from "./InsightCard";
import { UserInsight } from "./useGetInsights";
import "./InsightsDashboard.css";
import { DailyConversionsChart } from "./DailyConversionsChart";

export const InsightsDashboard = (props: InsightsDashboardProps) => {
  const {insights} = props;

  return(
    <section className="cards_container">
      {
        insights.map(insight => {
          return(
            <InsightCard insight={insight} key={insight.user.id}>
              <DailyConversionsChart conversions={insight.conversions}/>
            </InsightCard>
          );
        })
      }
    </section>
  );
}

export interface InsightsDashboardProps {
  insights: UserInsight[];
}