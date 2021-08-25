import './App.scss';
import { InsightsDashboard } from './InsightsDashboard/InsightsDashboard';
import { useGetInsights } from './InsightsDashboard/useGetInsights';

const App = () => {
  const [insights, isLoading, error] = useGetInsights();

  return (
    <main>
      { isLoading
        ? <section>Loading...</section>
        : error 
          ? <p>There was an error. Please refresh to try again.</p>
          : <InsightsDashboard insights={insights}/>
      }
    </main>
  );
}

export default App;
