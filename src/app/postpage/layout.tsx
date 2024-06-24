import React from "react";

export default function Layout({ children }: Props) {
  return <>{children}</>;
}

interface Props {
  children: React.ReactNode;
}
