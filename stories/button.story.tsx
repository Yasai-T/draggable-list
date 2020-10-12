import React from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Button",
};

const onClick = action("hello");

export const Button = () => {
  return <button onClick={onClick}>hello</button>;
};
