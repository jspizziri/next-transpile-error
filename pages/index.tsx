import { useState, useEffect } from 'react';
import Dita from '@d-i-t-a/reader';

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const [stuff, setStuff] = useState<any>([]);

  useEffect(() => {
    // add some sort of bogus usage of the @d-i-t-a/reader package to
    // force inclusion
    setStuff(Object.keys(Dita));
  }, []);

  return (
    <div>{JSON.stringify(stuff)}</div>
  );
}
