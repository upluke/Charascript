import React from "react";
import ResultProfileBox from "./ResultProfileBox";
const ResultProfileContainer = ({ profiles }) => {
  return (
    <>
      {profiles.map((p, index) => (
        <ResultProfileBox
          key={p.profileId}
          profile={p.profile}
          checking={p.checking}
          index={index}
        />
      ))}
    </>
  );
};

export default ResultProfileContainer;
