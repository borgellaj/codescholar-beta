import React from "react";
const Footer = () => (
<div className="bg-grey-dark">
    <div className="wrapping split-wrap">	
      <div className="split text-white">
        <a
          href="http://codescholarly.com/"
          className="font-bold no-underline text-white"
        >
          Code Scholar.ly
        </a>. 2018 All Rights Reserved
      </div>
      <div className="split">
        <a href="https://www.facebook.com/codescholarly/" className="font-bold no-underline text-white" target="_blank">Facebook</a>
        <a href="https://twitter.com/codescholarly?lang=en" className="font-bold no-underline text-white" target="_blank">Twitter</a>
        <a href="https://github.com/Codescholarly" className="font-bold no-underline text-white" target="_blank">GitHub</a>		
      </div>
    </div>
  </div>
);

export default Footer;