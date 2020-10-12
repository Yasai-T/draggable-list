import { random } from "faker";
import { Factory } from "rosie";
import { Item } from "./draggableListContainer";

export const itemFactory = Factory.define<Item>("item").attrs({
  id: () => random.uuid(),
  text: () => random.words(),
});
