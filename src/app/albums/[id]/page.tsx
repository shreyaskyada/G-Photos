"use client";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useParams();

  console.log("paramas", params);

  return <div>Page</div>;
};

export default Page;