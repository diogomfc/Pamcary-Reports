import { useEffect } from 'react';
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Router } from 'next/router';


export function useNProgress() {
  useEffect(() => {
    NProgress.configure({
      showSpinner: false,
      trickleSpeed: 300,
    });

    const handleRouteChange = (url: string) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };
    const handleRouteChangeComplete = (url: string) => {  
      console.log(`Loaded: ${url}`);
      NProgress.done();
    };
    const handleRouteChangeError = (err: any, url: string) => {
      if (err.cancelled) {
        console.log(`Route to ${url} was cancelled!`);
      }
      NProgress.done();
    };
    Router.events.on("routeChangeStart", handleRouteChange);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);
    Router.events.on("routeChangeError", handleRouteChangeError);
    return () => {
      Router.events.off("routeChangeStart", handleRouteChange);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
      Router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, [Router.events]);
}
