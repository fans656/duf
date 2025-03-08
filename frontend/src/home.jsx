import React, { useEffect } from 'react';
import { Action, Form, Code, dialog } from 'fansjs/ui';

import { api } from 'src/api';

export default function() {
  const hosts = api.useGet('/api/host/list') || [];
  return (
    <div>
      {hosts.map((host, index) => (
        <Code key={index}>{JSON.stringify(host)}</Code>
      ))}
    </div>
  );
}
