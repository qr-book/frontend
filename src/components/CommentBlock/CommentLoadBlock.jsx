import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    speed={2}
    viewBox="0 0 780 120"
    backgroundColor="#e2b392"
    foregroundColor="#dda177"
  >
    <rect x="0" y="0" rx="10" ry="10" width="780" height="110" />
  </ContentLoader>
);

export default MyLoader;
