import { useState } from 'react';
import { Jupyter, Notebook, CellSidebarRun } from '@datalayer/jupyter-react';
import { Box } from '@primer/react';

import './App.css';

const App = () => {

  return (
    <>
      <Box>
        <Jupyter startDefaultKernel={true}>
        <Notebook
                path="/ping.ipynb"
                CellSidebar={CellSidebarRun}
              />
        </Jupyter>
      </Box>
    </>
  );
}

export default App;
