
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Facebook Pixel Code
const fbPixelScript = document.createElement('script');
fbPixelScript.innerHTML = `
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '581961359233767');
  fbq('track', 'PageView');
`;
document.head.appendChild(fbPixelScript);

const fbPixelNoscript = document.createElement('noscript');
const fbPixelImg = document.createElement('img');
fbPixelImg.height = 1;
fbPixelImg.width = 1;
fbPixelImg.style.display = 'none';
fbPixelImg.src = 'https://www.facebook.com/tr?id=581961359233767&ev=PageView&noscript=1';
fbPixelNoscript.appendChild(fbPixelImg);
document.head.appendChild(fbPixelNoscript);

// Google Ads Tag
const googleAdsScript = document.createElement('script');
googleAdsScript.async = true;
googleAdsScript.src = 'https://www.googletagmanager.com/gtag/js?id=AW-10888031582';
document.head.appendChild(googleAdsScript);

const googleAdsConfigScript = document.createElement('script');
googleAdsConfigScript.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-10888031582');
`;
document.head.appendChild(googleAdsConfigScript);

createRoot(document.getElementById("root")!).render(<App />);
