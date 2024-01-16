import { useEffect, useState } from "react";
import { toUrlFormat, AlbumData, albumsCollection } from "../utils/utils";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [noItem, setNoItem] = useState(false);
  const { albumId: gameUrl } = useParams();

  let gameId = "";
  // let gameName = "";
  let albumName = "";

  if (gameUrl) {
    const url = gameUrl.split("_");
    gameId = url[0];
    // gameName = url[1];
    albumName = url[2];
  }

  useEffect(() => {
    // Reference to a Firebase document with id: gameId
    const docRef = doc(db, albumsCollection, gameId);

    // Get de db document and filter by album
    getDoc(docRef).then((docSnapshot) => {
      const doc = docSnapshot.data();
      if (doc) {
        const album = doc.albums.find(
          (album: AlbumData) => toUrlFormat(album.name) === albumName
        );
        setItem(album);
      } else {
        setNoItem(true);
      }
    });

    // fetch(dataPath)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const game = data.find(
    //       (game: GameData) => toUrlFormat(game.name) === gameName
    //     );
    //     const album = game.albums.find(
    //       (album: AlbumData) => toUrlFormat(album.name) === albumName
    //     );
    //     setItem(album);
    //   });
  }, [gameUrl]);

  // return item && <ItemDetail item={item} />;

  return (
    <>
      {item && <ItemDetail item={item} />}
      {noItem && <p>Producto inexistente</p>}
    </>
  );
};

export default ItemDetailContainer;
