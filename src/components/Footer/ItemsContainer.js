import { Item } from "./Item";
import { DISCOVER, COMMUNITY, DEVELOPERS, SUPPORT } from "./Menus";

const ItemsContainer = () => {
  return (
    <>
      <Item Links={DISCOVER} title="DISCOVER" />
      <Item Links={COMMUNITY} title="COMMUNITY" />
      <Item Links={DEVELOPERS} title="DEVELOPERS" />
      <Item Links={SUPPORT} title="SUPPORT" />
    </>
  );
};

export default ItemsContainer;
