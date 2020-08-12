import React from 'react';
import Lottie from 'react-lottie';

import astronaut from '../../assets/lotties/lf30_editor_oMzySJ.json';
import './styles.scss';

export default function LoginPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: astronaut,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div id="container">
      <div className="wrapper">
        <div className="wrapper-side">
          <div className="side-text">
            <h1>Welcome to Orbitta</h1>
            <h2>See your data everywhere</h2>
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        </div>

        <div className="wrapper-form">
          <div className="container-wrapper-form">
            <h1>Log in</h1>

            <div className="wrapper-inputs">
              <input type="text" placeholder="User" />
              <input type="password" placeholder="Password" />
            </div>

            <button>Enter Orbitta</button>
          </div>
        </div>
      </div>
    </div>
  );
}
