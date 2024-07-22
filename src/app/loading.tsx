import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen h-full w-full flex items-center justify-center">
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-32 h-32 border-4 border-primary border-double rounded-full animate-spin"
      ></div>
    </div>
  );
};

export default Loading;
