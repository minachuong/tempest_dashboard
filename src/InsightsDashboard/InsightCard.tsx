import { UserInsight } from "./useGetInsights";
import "./InsightCard.scss"

export const InsightCard = (props: InsightCardProps) => {
  const { insight } = props;

  return(
    <article className="tempest-card">
      <img src={insight.user.avatar_url} className="tempest-card__avatar"/>
      <header className="tempest-card__heading-container">
        <h3 className="tempest-card__heading">{insight.user.first_name} {insight.user.last_name}</h3>
        <h4 className="tempest-card__heading--small">{insight.user.occupation}</h4>
      </header>
      <div className="tempest-card__aside">
        <p className="tempest-card__aside__metric--orange">{insight.total_impressions}</p>
        <p className="tempest-card__aside__sub-text">impressions</p>
        <p className="tempest-card__aside__metric--blue">{insight.total_conversions}</p>
        <p className="tempest-card__aside__sub-text">conversions</p>
        <p className="tempest-card__aside__metric--green--large">{insight.total_revenue}</p>
      </div>
    </article>
  );
}

export interface InsightCardProps {
  insight: UserInsight;
}