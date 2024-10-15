import React from 'react';

const WateringWidget = ({ project }) => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-4">Watering Widget</h1>
    <section className="mb-8">
        <p>Android Native Application, Kotlin, Android Studio</p>
    </section>
    
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Overview</h2>
      <p className="mb-4">1. <strong>Home Screen Widget:</strong> Allows you to track your water intake through a widget.</p>
      <p className="mb-4">2. <strong>Local Data Storage:</strong> You can view your water intake data for the past 7 days.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Problem Solving</h2>
      <p className="mb-2">1. <strong>Motivation for Development</strong></p>
      <p className="mb-4">This app was developed at the request of a friend.</p>
      <p className="mb-2">2. <strong>Data Consistency Between Widget and App</strong></p>
      <p className="mb-4">Ensuring that the water intake logged through the widget is synchronized with the app data.</p>
      <p className="mb-2">3. <strong>Developer Account & Data Loss</strong></p>
      <p className="mb-4">Challenges faced due to account suspension from prolonged inactivity and data loss during the migration to a new MacBook.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Lessons Learned</h2>
      <p className="mb-4">1. <strong>Key Differences Between Android and iOS Development</strong></p>
      <p className="mb-4">2. <strong>The Importance of Proper Account and Data Management</strong></p>
    </section>
  </div>
);

export default WateringWidget;
