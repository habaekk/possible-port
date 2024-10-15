'use client';

import React, { useState } from 'react';

const iconSize = 48;

const Contact = () => {
  const email = 'haback1493@gmail.com';
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="flex items-center justify-center mb-4">
        <p className="mr-1">Email: {email}</p>
        <button onClick={copyToClipboard} className="p-1 rounded text-sm text-white">
          {copied ? (
            <img src="/images/check.png" alt="Copied" width={18} height={18} />
          ) : (
            <img src="/images/copy.png" alt="Copy" width={18} height={18} />
          )}
        </button>
      </div>
      <div className="flex justify-center space-x-4">
        <a href="https://www.instagram.com/prenny1067" target="_blank" rel="noopener noreferrer">
          <img src="/images/instagram.svg" alt="Instagram" width={iconSize} height={iconSize} />
        </a>
        <a href="https://github.com/habaekk" target="_blank" rel="noopener noreferrer">
          <img src="/images/github.png" alt="Github" width={iconSize} height={iconSize} />
        </a>
        <a href="https://velog.io/@haback1" target="_blank" rel="noopener noreferrer">
          <img src="/images/velog.png" alt="Blog" width={iconSize} height={iconSize} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
