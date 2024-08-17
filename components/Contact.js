"use client";

import React, { useState } from 'react';

const iconSize = 72;
const copySize = 18;

const Contact = () => {
  const email = 'haback1493@gmail.com';
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000); // 2초 후에 아이콘을 다시 'Copy'로 변경
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <div className="flex justify-center items-center mb-6">
      <section id="contact" className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <div className="flex items-center justify-center mb-4">
          <p className="mr-1">Email: {email}</p>
          <button onClick={copyToClipboard} className="p rounded text-sm text-white">
            {copied ? (
              <img src="/images/check.png" alt="Copied" style={{ width: copySize, height: copySize }} />
            ) : (
              <img src="/images/copy.png" alt="Copy" style={{ width: copySize, height: copySize }} />
            )}
          </button>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="https://www.instagram.com/prenny1067" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram.svg" alt="Instagram" style={{ width: iconSize, height: iconSize }} />
          </a>
          <a href="https://github.com/habaekk" target="_blank" rel="noopener noreferrer">
            <img src="/images/github.png" alt="Github" style={{ width: iconSize, height: iconSize }} />
          </a>
          <a href="https://velog.io/@haback1" target="_blank" rel="noopener noreferrer">
            <img src="/images/velog.png" alt="Blog" style={{ width: iconSize, height: iconSize }} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
