import React from "react";
import { useEffect, useState } from "react";
import { GameData, albumsCollection } from "../utils/utils";
import GameList from "./GameList";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

interface ItemListContainerProps {
  item: string;
}

const ItemListContainer: React.FC<ItemListContainerProps> = ({ item }) => {
  const [data, setData] = useState<GameData[]>([]);
  const { gameId } = useParams();

  useEffect(() => {
    // Reference to "albums" collection of Firestore db
    const albumsRef = collection(db, albumsCollection);

    // The image property is the url format version of the property name
    const docsRef = gameId
      ? query(albumsRef, where("image", "==", gameId))
      : albumsRef;

    // Get docsRef list documents from "albums" collection adding id parameter and adjusting to GameData type interface
    getDocs(docsRef).then((querySnapshot) => {
      const docs = querySnapshot.docs.map((doc) => {
        const docData = doc.data();
        return {
          id: doc.id,
          name: docData.name,
          image: docData.image,
          description: docData.description,
          albums: docData.albums,
        };
      });

      setData(docs);
    });
  }, [gameId]);

  return (
    <>
      {data && item === "game" && <GameList data={data} />}
      {data && item === "album" && <ItemList data={data} />}
    </>
  );
};

export default ItemListContainer;
