import Image from "next/image";
import React from "react";
import { Asset } from "../../contracts/common/asset.type";

interface Props {
  asset: Asset;
  classes?: string;
}

const Asset: React.FC<Props> = ({ asset, classes }) => {
  const { width, height, preview, name } = asset;
  return (
    <Image
      height={height}
      width={width}
      src={preview}
      alt={name || ""}
      className={`${classes}`}
    />
  );
};
export default Asset;
