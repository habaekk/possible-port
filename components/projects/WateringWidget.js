import React from 'react';

const WateringWidget = ({ project }) => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-4">Watering Widget</h1>
    <section className="mb-8">
        <p>Android Native Application, Kotlin, Android Studio</p>
    </section>
    
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Overview</h2>
      <p className="mb-4">1. <strong>Home Screen Widget:</strong> Allows you to log your water intake through a widget.</p>
      <p className="mb-4">2. <strong>Uses Local Data:</strong> You can review your water intake for the past 7 days.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Problem Solving</h2>
      <p className="mb-2">1. <strong>Reason for Development</strong></p>
      <p className="mb-4">This app was developed upon a friend's request.</p>
      <p className="mb-2">2. <strong>Data Consistency Between Widget and App</strong></p>
      <p className="mb-4">The water intake logged through the widget needed to be synchronized with the app data.</p>
      <p className="mb-2">3. <strong>Developer Account & Data Loss</strong></p>
      <p className="mb-4">Account suspension due to prolonged inactivity and data loss during MacBook migration.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Lessons Learned</h2>
      <p className="mb-4">1. <strong>Characteristics of Android Development and Differences from iOS Development</strong></p>
      <p className="mb-4">2. <strong>The Importance of Account and File Management</strong></p>
    </section>
  </div>
);

export default WateringWidget;
