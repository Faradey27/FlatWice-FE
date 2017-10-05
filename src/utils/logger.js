import reactGA from 'react-ga';

class GoogleAnalytic {
  constructor() {
    reactGA.initialize('UA-107558735-1');
    this.logPageView();
  }

  logPageView = () => {
    const url = window.location.pathname + window.location.search;

    reactGA.set({ page: url });
    reactGA.pageview(url);
  }
}

export default GoogleAnalytic;
