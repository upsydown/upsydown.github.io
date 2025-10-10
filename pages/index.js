import { useEffect } from 'react';
import Ubuntu from "../components/ubuntu";
import ReactGA from 'react-ga4';
import Meta from "../components/SEO/Meta";

const TRACKING_ID = process.env.NEXT_PUBLIC_TRACKING_ID;

function App() {
  useEffect(() => {
    // Initialize analytics only on client and only if a tracking id is provided
    if (typeof window !== 'undefined' && TRACKING_ID) {
      try {
        ReactGA.initialize(TRACKING_ID);
        // send initial pageview
        ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
      } catch (e) {
        // don't break the app if GA fails
        // eslint-disable-next-line no-console
        console.warn('ReactGA initialization failed:', e);
      }
    }
  }, []);

  return (
    <>
      <Meta />
      <Ubuntu />
    </>
  )
}

export default App;
