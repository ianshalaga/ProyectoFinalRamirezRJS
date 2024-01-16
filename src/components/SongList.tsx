import SongDetail from "./SongDetail";
import { SongData } from "../utils/utils";

interface SongListProps {
  songs: SongData[];
}

const SongList: React.FC<SongListProps> = ({ songs }) => {
  return (
    <ul>
      {songs.map((song) => (
        <SongDetail key={song.id} song={song} />
      ))}
    </ul>
  );
};

export default SongList;
