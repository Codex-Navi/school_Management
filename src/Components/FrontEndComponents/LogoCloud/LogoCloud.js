import React from 'react';
import './logocloud.css'

function LogoCloud(props) {
  return (
    <div className="logocontainer">
    <h1 className="title">Trusted by Leading Educational Institutions Worldwide</h1>
    <div className="logos">
      <div className="logo-item">
        <img src="https://storage.googleapis.com/a1aa/image/tiScue9iLTUqB3U2kHryO32V0eloddudDnCRTxZpib8.jpg" alt="Transistor logo" />
        <span>Transistor</span>
      </div>
      <div className="logo-item">
        <img src="https://storage.googleapis.com/a1aa/image/JIh-3kW8OarlNDI5cIoJhY8p4gVl9m703v-aIZnLHRE.jpg" alt="Reform logo" />
        <span>Reform</span>
      </div>
      <div className="logo-item">
        <img src="https://storage.googleapis.com/a1aa/image/3IuYc0YPE25gfGuGMkanncrVMnku4P2nSaHw8NLZklI.jpg" alt="Tuple logo" />
        <span>Tuple</span>
      </div>
      <div className="logo-item">
        <img src="https://storage.googleapis.com/a1aa/image/1XE7ItTLEkpSl70KbxTHu7_HSIi9ophGSmyA6W7OKX8.jpg" alt="SavvyCal logo" />
        <span>SavvyCal</span>
      </div>
      <div className="logo-item">
        <img src="https://storage.googleapis.com/a1aa/image/_MZRVjwfsRG5RljAi3QA4vbIVLme-OvZzlF0HftIKAc.jpg" alt="Statamic logo" />
        <span>statamic</span>
      </div>
    </div>
  </div>
  );
}

export default LogoCloud;