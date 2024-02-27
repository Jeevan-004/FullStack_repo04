// src/pages/CampusCommunity.js
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './CampusCommunity.css';
import BranchDetails from '../components/BranchDetails';
import branchDetailsData from '../data/branchDetailsData';

const branches = [
  'Civil Engineering', 'Mechanical Engineering', 'Electrical and Electronics Engineering',
  'Electronics and Communication Engineering', 'Industrial Engineering and Management',
  'Computer Science and Engineering', 'Electronics and Telecommunication Engineering',
  'Information Science and Engineering', 'Electronics and Instrumentation Engineering',
  'Medical Electronics Engineering', 'Chemical Engineering', 'Bio-Technology',
  'Computer Applications (MCA)', 'Management Studies and Research Centre', 'Mathematics Department',
  'Physics Department', 'Chemistry Department', 'Aerospace Engineering', 'Machine Learning (AI and ML)',
  'Computer Science and Engineering (DS)', 'Computer Science and Engineering (IoT and CS)',
  'Artificial Intelligence and Data Science', 'Computer Science and Business Systems',
];


const CampusCommunity = () => {
  console.log('Branch Details Data:', branchDetailsData);

  return (
    <div className="campus-community-container">
      <h2>Campus Community</h2>
      <div className="box-container">
        {branches.map((branch, index) => (
          <Link to={`/campus-communities/${branch.toLowerCase().replace(/\s/g, '-')}`} key={index}>
            <div className="campus-box">
              <img src={`/images/${branch.toLowerCase().replace(/\s/g, '-')}.jpg`} alt={branch} />
              <h3>{branch}</h3>
            </div>
          </Link>
        ))}
      </div>

      <Routes>
        {branches.map((branch, index) => (
          <Route
            key={index}
            path={`/campus-communities/${branch.toLowerCase().replace(/\s/g, '-')}`}
            element={<BranchDetails branch={branch} branchDetails={branchDetailsData} />}
          />
        ))}
      </Routes>
    </div>
  );
};

export default CampusCommunity;
