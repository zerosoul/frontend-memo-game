import React, { Suspense } from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';

import Alert from './components/Alert';
import Header from './components/Header';
import Footer from './components/Footer';
import AddHomePopup from './components/AddHomePopup';
import Loading from './components/Loading';
import PlayTimer from './components/PlayTimer';
import Share from './components/Share';
const FinishAlert = React.lazy(() => import('./components/FinishAlert'));
const Ribbon = React.lazy(() => import('./components/Ribbon'));
const Background = React.lazy(() => import('./components/ParticlesBackground'));
const Cards = React.lazy(() => {
  const tmp = import('./containers/Cards');
  return new Promise(r => {
    setTimeout(() => {
      return r(tmp);
    }, 20);
  });
});
const Options = React.lazy(() => {
  const tmp = import('./containers/Options');
  return new Promise(r => {
    setTimeout(() => {
      return r(tmp);
    }, 20);
  });
});

const App = () => {
  return (
    <Provider store={store}>
      <Share />
      <Alert />
      <PlayTimer />
      <Header />

      <Suspense fallback={<Loading />}>
        <Options />
        <FinishAlert />
        <Ribbon />
        <Background />
        <Cards />
      </Suspense>
      <AddHomePopup />
      <Footer />
    </Provider>
  );
};
export default App;
