import React from 'react';
import {Link} from "react-router-dom";
import "./Header1.css";

function Header1() {
  return (
    <div class="header1">
      <div class="leftSide">
        <div class="links">
          <Link to="/">Home</Link>
          <Link to="/html">Html</Link>
          <Link to="/css">CSS</Link>
          <Link to="/javascript">JavaScript</Link>
          <Link to="/reactj">React</Link>
          <Link to="/java">Java</Link>
          <Link to="/advjava">Advance Java</Link>
          <Link to="/android">Android</Link>
          <Link to="/python">Python</Link>
          <Link to="/c">C</Link>
          <Link to="/cpp">C++</Link>
          <Link to="/sql">Sql</Link>
          <Link  to="/compiler">Compiler</Link>
        </div>
      </div>
    </div>  
  );
}

export default Header1;