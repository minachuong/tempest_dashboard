import { InsightCard } from "./InsightCard";
import { UserInsight } from "./useGetInsights";
import "./InsightsDashboard.scss";

export const InsightsDashboard = (props: InsightsDashboardProps) => {
  const {insights} = props;

  return(
    <section className="cards_container">
      {
        insights.map(insight => {
          return(
            <InsightCard insight={insight}/>
          );
        })
      }
    </section>
  );
}

export interface InsightsDashboardProps {
  insights: UserInsight[];
}