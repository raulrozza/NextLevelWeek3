import React from 'react';

// Containers
import Theme from './containers/Theme';

// Routes
import Landing from './pages/Landing';

const App: React.FC = () => {
  return (
    <Theme>
      <Landing />
    </Theme>
  );
};

export default App;
