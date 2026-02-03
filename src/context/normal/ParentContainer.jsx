import React from "react";
import ChildComponent from "./ChildComponent";
import { FontSizeProvider } from "./FontSizeContext";
import ChildInputComponent from "./ChildInputComponent";

const ParentContainer = () => {
  return (
    <div>
      <FontSizeProvider>
        {/* <ChildComponent /> */}
        <ChildInputComponent />
      </FontSizeProvider>
    </div>
  );
};

export default ParentContainer;
