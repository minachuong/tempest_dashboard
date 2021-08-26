import { UserInsight } from "./useGetInsights";
import "./InsightCard.scss"

export const InsightCard = (props: InsightCardProps) => {
  const { insight } = props;
  
  const formatThousands = (amount: number) => {
    let digits = amount.toString().split("");
    for(let i=digits.length-3; i>0; i -= 3) {
      digits.splice(i, 0, ',');
    }

    return `${digits.join("")}`
  }

  return(
    <article className="tempest-card">
      <img src={insight.user.avatar_url} className="tempest-card__avatar" alt="user profile"/>
      <header className="tempest-card__heading-container">
        <h3 className="tempest-card__heading">{insight.user.first_name} {insight.user.last_name}</h3>
        <h4 className="tempest-card__heading--small">{insight.user.occupation}</h4>
      </header>
      <aside className="tempest-card__aside">
        <p className="tempest-card__aside__metric--orange">{formatThousands(insight.total_impressions)}</p>
        <p className="tempest-card__aside__sub-text">impressions</p>
        <p className="tempest-card__aside__metric--blue">{formatThousands(insight.total_conversions)}</p>
        <p className="tempest-card__aside__sub-text">conversions</p>
        <p className="tempest-card__aside__metric--green--large">{`$${formatThousands(insight.total_revenue)}`}</p>
      </aside>
      <div className="tempest-card__chart">
        {props.children}
      </div>
    </article>
  );
}

export interface InsightCardProps {
  insight: UserInsight;
  children: JSX.Element;
}