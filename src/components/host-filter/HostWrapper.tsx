"use client";

import { useGetInstituteId } from "./GetInstituteId";

const HostWrapper = ({ children }: { children: React.ReactNode }) => {
  const { getHost } = useGetInstituteId();
  getHost();

  return <>{children}</>;
};

export default HostWrapper;
