import { Collapse } from '@mui/material';
import React from 'react';

export default function InfoTabs({ children, active }) {
  return <Collapse in={active}>{children}</Collapse>;
}
