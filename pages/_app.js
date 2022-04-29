import 'tailwindcss/tailwind.css';
import './styles/main.css';
import './styles/nprogress.css';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import ProgressBar from '@badrap/bar-of-progress'
import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import Router from 'next/router';
import * as gtag from '../lib/gtag';

// function MyApp({ Component, pageProps }) {
// 	return (
// 		<Provider store={store}>
// 			<Component {...pageProps} />
// 		</Provider>
// 	);
// }

// export default MyApp;

const progress = new ProgressBar({
  size: 4,
  color: 'green',
  className: 'z-[200]',
  delay: 10,
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish) 
Router.events.on('routeChangeError', progress.finish)

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
<Provider store={store}>
  <Component {...pageProps} />
</Provider>
    </>
  )
}

export default App
