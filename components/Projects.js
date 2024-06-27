import React from 'react';

const Projects = () => (
  <section id="projects" className="p-8">
    <h2 className="text-2xl font-bold mb-4">Projects</h2>
    <div>
      <h3 className="text-xl font-semibold">Moon Shape Widget</h3>
      <p>XCode, Swift, SwiftUI, Widget Kit, ARKit</p>
      <p>IPhone application that can show the moon phase as a lock screen widget</p>
      <p>Free ver.: <a href="https://apps.apple.com/app/moon-shape-widget/id1665266588" target="_blank" rel="noopener noreferrer">https://apps.apple.com/app/moon-shape-widget/id1665266588</a></p>
      <p>Paid ver.: <a href="https://apps.apple.com/app/moon-shape-pro/id6450383619" target="_blank" rel="noopener noreferrer">https://apps.apple.com/app/moon-shape-pro/id6450383619</a></p>
    </div>
    <div className="mt-4">
      <h3 className="text-xl font-semibold">Watering Widget</h3>
      <p>Android Studio, Kotlin</p>
      <p>Android application that can record daily intaken water cups with widget</p>
      <p>Free ver.: <a href="https://play.google.com/store/apps/details?id=com.bada.widgetprac" target="_blank" rel="noopener noreferrer">https://play.google.com/store/apps/details?id=com.bada.widgetprac</a></p>
    </div>
    <div className="mt-4">
      <h3 className="text-xl font-semibold">Right-Left-</h3>
      <p>Python, NLP, Bag of Words</p>
      <p>Python program that gets string as an input and determines whether the sentence is politically right or left</p>
      <p>GitHub: <a href="https://github.com/habaekk/Right-Left-" target="_blank" rel="noopener noreferrer">https://github.com/habaekk/Right-Left-</a></p>
    </div>
    <div className="mt-4">
      <h3 className="text-xl font-semibold">SwingBy-RL</h3>
      <p>Reinforcement Learning, Unity, ml-agents</p>
      <p>Teach machine to learn swing-by in the space made with Unity, ml-agents</p>
      <p>GitHub: <a href="https://github.com/habaekk/SwingByRL" target="_blank" rel="noopener noreferrer">https://github.com/habaekk/SwingByRL</a></p>
    </div>
    <div className="mt-4">
      <h3 className="text-xl font-semibold">Story and Draw</h3>
      <p>Game, Visual novel, Python, Renpy</p>
      <p>Playable visual novel game</p>
      <p>Google Play: <a href="https://play.google.com/store/apps/details?id=com.bada.draw" target="_blank" rel="noopener noreferrer">https://play.google.com/store/apps/details?id=com.bada.draw</a></p>
    </div>
  </section>
);

export default Projects;
