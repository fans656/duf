import React from 'react';
import { App } from 'fansjs/ui';

import Home from './home';
//import Projects from './projects';
//import Hosts from './hosts';
//import Deploys from './deploys';

export default function() {
  return (
    <App>
      {[
        {name: 'home', comp: <Home/>, path: '/'},
        //{name: 'projects', comp: <Projects/>},
        //{name: 'deploys', comp: <Deploys/>},
        //{name: 'hosts', comp: <Hosts/>},
      ]}
    </App>
  );
}
