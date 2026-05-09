/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import SkillPath from './components/home/SkillPath';
import TipsLibrary from './components/home/TipsLibrary';
import Dashboard from './components/home/Dashboard';
import Community from './components/home/Community';
import LeadCapture from './components/home/LeadCapture';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-tactical-bg">
      <Navbar />
      <main>
        <Hero />
        <SkillPath />
        <TipsLibrary />
        <Dashboard />
        <Community />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  );
}
