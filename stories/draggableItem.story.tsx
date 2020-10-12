import React, { FC } from "react";
import { DraggableListContainer as Component } from "../src/draggableListContainer";
import { itemFactory } from "../src/itemFactory";

export default {
  title: "DraggableItem",
};

export const DraggableListContainer: FC = () => {
  const items = itemFactory.buildList(10);
  return <Component items={items} />;
};
