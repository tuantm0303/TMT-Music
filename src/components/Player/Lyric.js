import React, { useEffect, useState } from "react";
import { songsApi } from "../../services/song";

const Lyric = ({ id, lyric }) => {
  const [song, setSong] = useState({});

  useEffect(() => {
    (async (id) => {
      const { data } = await songsApi.read(id);
      setSong(data);
    })(id);
  }, [id]);

  return (
    <div>Lyric: {lyric ? song.lyric : ""}</div>
  );
};

export default Lyric;
