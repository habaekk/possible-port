import React from 'react';
import Project from '../types/Project';

const MoonShapeWidget: React.FC<{ project: Project }> = ({ project }) => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
    <section className="mb-8">
        <p>iOS Native Application, SwiftUI, XCode</p>
    </section>
    
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Overview</h2>
      <p className="mb-4">1. <strong>iPhone Lock Screen Widget:</strong> Displays the moon phase image of the day on the lock screen.</p>
      <p className="mb-4">2. <strong>Calendar Function:</strong> Allows users to track the changes in the moon&apos;s phases according to dates.</p>
      <p className="mb-4">3. <strong>AR Feature:</strong> When pointing at a flat surface, it shows the moon&apos;s position in the sky.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Problem Solving</h2>
      <p className="mb-2">1. <strong>Reason for Development</strong></p>
      <p className="mb-4">iOS 16 Update - Created an app that utilizes lock screen widgets.</p>
      <p className="mb-2">2. <strong>Moon Phase Widget Logic</strong></p>
      <p className="mb-4">API - Utilized the Korea Astronomy and Space Science Institute&apos;s lunar calendar API to fetch lunar dates and calculate the moon&apos;s phase.</p>
      <p className="mb-2">3. <strong>AR Logic</strong></p>
      <p className="mb-4">ARKit - Predicted the moon&apos;s position in the sky.</p>
      <p className="mb-2">4. <strong>Incorporating User Feedback</strong></p>
      <p className="mb-1">Full-sized widget images.</p>
      <p className="mb-2">Widget images adjusted to match background color.</p>
      <p className="mb-2">5. <strong>Story Board vs SwiftUI</strong></p>
      <p className="mb-2">Which to use ?</p>


    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Achievements</h2>
      <p className="mb-2">1. <strong>Ranked 1st in the App Store&apos;s Weather Category for Both Free and Paid Apps</strong></p>
      <p className="mb-4">image</p>
      <p className="mb-2">2. <strong>2k Downloads for the Free App</strong></p>
      <p className="mb-4">image</p>
    </section>

    {/* Additional details about Moon Shape Widget */}
  </div>
);

export default MoonShapeWidget;
