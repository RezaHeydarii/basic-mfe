import React from "react";

export const useData = () => {
  return [
    { title: "Test", id: 1 },
    { title: "Test2", id: 2 },
    { title: "Test3", id: 3 },
  ] as const;
};
