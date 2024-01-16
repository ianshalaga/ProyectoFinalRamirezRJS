import {
  GameData,
  toUrlFormat,
  gamesImagesPath,
  imagesExtension,
} from "../utils/utils";
import GameItem from "./GameItem";
import { urls } from "../utils/routes";

interface GameListProps {
  data: GameData[];
}

const GameList: React.FC<GameListProps> = ({ data }) => {
  return (
    <>
      <p className="p-8">
        ¡Consigue las bandas sonoras originales de los juegos clásicos de
        Project Soul!
      </p>

      <section className="flex flex-row justify-around w-full">
        {data.map((game) => (
          <GameItem
            key={game.id}
            name={game.name}
            image={gamesImagesPath + game.image + imagesExtension}
            url={urls.category + "/" + toUrlFormat(game.name)}
            description={game.description}
          />
        ))}
      </section>
    </>
  );
};

export default GameList;
