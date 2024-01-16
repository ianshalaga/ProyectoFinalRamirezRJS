import { SongData } from "../utils/utils";

interface SongProps {
  song: SongData;
}

const SongDetail: React.FC<SongProps> = ({ song }) => {
  return (
    <li className="flex flex-row justify-start items-center gap-3">
      <p className="font-thin">{song.id}</p>
      <p className="font-semibold">{song.name}</p>
      <p className="font-serif text-sky-900">{song.duration}</p>
      <p className="font-light">{song.notes}</p>
    </li>
  );
};

export default SongDetail;
