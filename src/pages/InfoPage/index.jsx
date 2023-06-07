import Navbar from "components/Navbar";
import React from "react";
import { Icon } from "utils/Icons";

function InfoPage() {
  return (
    <div className="mx-auto h-screen flex flex-col">
      <div className="top-4 left-2 z-10 absolute ">
        <div className=" text-white p-0 items-center h-12 flex gap-1">
          <div>
            <Icon name="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
