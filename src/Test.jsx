import React from 'react';
import { createContext, useContext } from 'react';

const MyContext = createContext();

export default function Test({ children }) {
  const ctx = useContext(MyContext);
  return <div>{children}</div>;
}