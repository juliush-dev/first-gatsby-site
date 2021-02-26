import React from 'react';
import Header from '../components/header';
import { Link } from 'gatsby';

export default function Home() {
  return (
    <div style={{ color: 'purple' }}>
      <Link to="/contact/">contact</Link>
      <Header headerText="Hello gatsby!" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/200x200" alt="" />
    </div>
  );
}
