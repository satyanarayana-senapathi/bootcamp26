import React from "react";

const Image = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <img {...props} data-testid="testImage" />;
};

export default Image;
