import React from "react";
import Image from "next/image";
export const LoadingSpinner = () => {
  return (
    <Image
      src="/images/loading.gif"
      width={200}
      height={200}
      alt="loading spinner"
    />
  );
};
