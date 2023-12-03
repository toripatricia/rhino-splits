import React from 'react';
import RSnavbrand from '../assets/RSnavbrand.png';
import Image from 'next/image';

export default function NavBarAuth() {
  return (
    <div id="top-nav">
      <Image src={RSnavbrand} alt="logo" height="75px" width="200px" />
    </div>
  );
}
