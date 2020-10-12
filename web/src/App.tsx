import React, { Suspense } from 'react';

// Components
import Loading from './components/Loading';

// Containers
import { BrowserRouter } from 'react-router-dom';
import Theme from './containers/Theme';

// Routes
import MainRoutes from './routes/main.routes';

const App: React.FC = () => {
  return (
    <Theme>
      <BrowserRouter>
        <Suspense fallback={Loading}>
          <MainRoutes />
        </Suspense>
      </BrowserRouter>
    </Theme>
  );
};

export default App;
