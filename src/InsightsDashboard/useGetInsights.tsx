import {useState, useEffect} from "react";

export const useGetInsights = (): [UserInsight[], boolean, any] => {
  const [insightSummaries, setInsightSummaries] = useState<InsightSummary[]>([]);
  const [userConversions, setUserConversions] = useState<UserConversion[]>([]);
  const [userInsights, setUserInsights] = useState<UserInsight[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(undefined);

  const mapDataToUserInsights = () => {
    let userInsights = insightSummaries.map(summary => {
      const conversions = userConversions.find(userConversion => userConversion.user_id === summary.user.id);

      return {...summary, conversions: conversions?.conversions ?? [] }
    });
    setUserInsights(userInsights);
  }
  
  useEffect(() => {
    fetch('http://localhost:3000/insights/summaries')
      .then((response) => {
        return response.json();
      })
      .then(summaries => {
        setInsightSummaries(summaries);
      })
      .catch((e) => {
        setError(e);
      }).finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/insights/dailyconversions')
      .then((response) => {
        return response.json();
      })
      .then(conversions => {
        setUserConversions(conversions);
        mapDataToUserInsights();
      })
      .catch((e) => {
        setError(e);
      }).finally(() => {
        setIsLoading(false);
      });
  }, [insightSummaries]);

  return [userInsights, isLoading, error];
}

export interface InsightSummary {
  user: User,
  total_impressions: number,
  total_revenue: number,
  total_conversions: number,
  date_start: string,
  date_end: string
}

export interface UserInsight extends InsightSummary {
  conversions: Conversion[]
}



export interface User {
  id: number,
  first_name: string,
  last_name: string,
  occupation: string,
  avatar_url: string
}

export interface UserConversion {
  user_id: number,
  conversions: Conversion[]
}

export interface Conversion {
  date: string,
  daily_conversions: number
}