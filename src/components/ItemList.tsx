import {
  GameData,
  toUrlFormat,
  albumsImagesPath,
  imagesExtension,
} from "../utils/utils";
import Item from "./Item";
import { urls } from "../utils/routes";

interface ItemListProps {
  data: GameData[];
}

const ItemList: React.FC<ItemListProps> = ({ data }) => {
  return (
    <>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((game) =>
          game.albums.map((album) => (
            <Item
              key={game.id + game.name + album.id + album.name}
              name={album.name}
              image={albumsImagesPath + album.image + imagesExtension}
              url={
                urls.item +
                "/" +
                game.id +
                "_" +
                toUrlFormat(game.name) +
                "_" +
                toUrlFormat(album.name)
              }
            />
          ))
        )}
      </section>
    </>
  );
};

export default ItemList;
