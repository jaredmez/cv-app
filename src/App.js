import './styles/App.css';
import React from 'react'
import WorkExpCtn from './components/WorkExpCtn'
import PersonalInfoCtn from './components/PersonalInfoCtn'
import EduCtn from './components/EduCtn';

function App() {
  return (
    <div className="App">
      <header className="cv-header"> Cover Letter App </header>
      <div className="main-page-body">
        <PersonalInfoCtn />
        <EduCtn />
        <WorkExpCtn />
      </div>    

    </div>
  );
}

export default App;
