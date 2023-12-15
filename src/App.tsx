import { useState } from 'react';
import { Jupyter, Notebook, CellSidebarRun } from '@datalayer/jupyter-react';
import { Box } from '@primer/react';
import { AppsIcon, CpuIcon } from '@primer/octicons-react';
import { UnderlineNav } from '@primer/react/drafts';
import CellComponents from './examples/cell/CellComponents';
import OutputsComponents from './examples/outputs/OutputsComponents';
import JupyterLabHeadlessApp from './examples/labapp/JupyterLabHeadlessApp';

import './App.css';

const App = () => {
  const [tab, setTab] = useState(0);
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
