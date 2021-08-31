import {useState, useEffect} from "react";

export const useGetInsights = (): [UserInsight[], boolean, any] => {
  const [userInsights, setUserInsights] = useState<UserInsight[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(undefined);

  const getDailyConversions = async (): Promise<any> => {
    try {
      const response = await fetch(`${dashboardApiUrl}/insights/dailyconversions`);
      return await response.json();

    } catch(e) {
      setError(e);
    }
  }

  const getInsightSummaries = async (): Promise<any> => {
    try {
      const response = await fetch(`${dashboardApiUrl}/insights/summaries`)
      return await response.json();
  
    } catch(e) {
      setError(e);
    }
  }

  const mapDataToUserInsights = (insightSummaries: InsightSummary[], userConversions: UserConversion[]): void => {
    let userInsights = insightSummaries.map(summary => {
      const conversions = userConversions.find(userConversion => userConversion.user_id === summary.user.id);

      return {...summary, conversions: conversions?.conversions ?? [] }
    });

    setUserInsights(userInsights);
  }

  const dashboardApiUrl = process.env.REACT_APP_DASHBOARD_API_URL;
  
  useEffect(() => {
    (async () => {
      const insightSummaries = await getInsightSummaries();
      const dailyConversions = await getDailyConversions();
      
      mapDataToUserInsights(insightSummaries, dailyConversions);
      setIsLoading(false);
    })();
    
  }, []);

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