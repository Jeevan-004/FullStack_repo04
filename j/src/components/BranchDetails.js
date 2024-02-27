// src/components/BranchDetails.js
import React from 'react';

const BranchDetails = ({ branch, branchDetails }) => {
  if (!branch || !branchDetails) {
    return <div>No information available for this branch.</div>;
  }

  const branchSlug = branch.toLowerCase().replace(/\s/g, '-');
  const branchInfo = branchDetails[branchSlug];

  if (!branchInfo) {
    return <div>No information available for this branch.</div>;
  }

  const { hod, description } = branchInfo;

  return (
    <div>
      <h2>{branch} Branch Details</h2>
      <img src={`/images/${branchSlug}-hod.jpg`} alt={`${branch} HOD`} />
      <p>HOD: {hod}</p>
      <p>{description}</p>
    </div>
  );
};

export default BranchDetails;
