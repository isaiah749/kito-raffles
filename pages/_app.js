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
import * as fbq from '../lib/fpixel'
import Head from 'next/head'

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
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview()

    const handleRouteChange = () => {
      fbq.pageview()
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])


  // <!-- Meta Pixel Code -->
  // <script>
  // !function(f,b,e,v,n,t,s)
  // {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  // n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  // if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  // n.queue=[];t=b.createElement(e);t.async=!0;
  // t.src=v;s=b.getElementsByTagName(e)[0];
  // s.parentNode.insertBefore(t,s)}(window, document,'script',
  // 'https://connect.facebook.net/en_US/fbevents.js');
  // fbq('init', '1386771871837846');
  // fbq('track', 'PageView');
  // </script>
  // <noscript><img height="1" width="1" style="display:none"
  // src="https://www.facebook.com/tr?id=1386771871837846&ev=PageView&noscript=1"
  // /></noscript>
  // <!-- End Meta Pixel Code -->



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
            {/* Global Site Code Pixel - Facebook Pixel */}
            <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1386771871837846');
          fbq('track', 'PageView');
          `,
        }}
      />

<Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          var head = document.head;
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://182469.t.hyros.com/v1/lst/universal-script?ph=f566cb6ade9f8327dac6df633ef56ba859182d234327f2a0e315aec1f20b4d4d&tag=!clicked";
head.appendChild(script);
          `,
        }}
      />

      <Head>
      <meta name="facebook-domain-verification" content="iniy7mzndmgdw8gpq92gh082kexra3" />
      </Head>
<Provider store={store}>
  <Component {...pageProps} />
</Provider>
    </>
  )
}

export default App
