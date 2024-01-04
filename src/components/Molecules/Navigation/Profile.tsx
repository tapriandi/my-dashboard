import React from "react";
import { ButtonCircle } from "my-comp-atoms";
import { MdOutlineLogout } from "react-icons/md";
import { People } from "my-assets/Image";

type Props = {
  className?: string;
  sideNavShow?: boolean;
};

export default function NavigationProfile(props: Props) {
  return (
    <div className={`${props.className} pb-10 flex flex-col items-center space-y-3`}>
      <ButtonCircle image={People} />
      <ButtonCircle className="bg-gray2 hover:bg-purple hover:text-white">
        <MdOutlineLogout className="text-xl" />
      </ButtonCircle>
    </div>
  );
}