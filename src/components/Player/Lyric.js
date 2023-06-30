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
    <div>
      {/* <p>{song.lyric}</p> */}
      <p>{lyric ? song.lyric : ""}</p>
      <p>{lyric}</p>
    </div>
  );
};

export default Lyric;
