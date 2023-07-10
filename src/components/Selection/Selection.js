import { useSelector } from "react-redux";
import Song from "../Player/Song";
import './Selection.scss';

const Selection = () => {
  const { songs } = useSelector((state) => state.songReducer)

  return (
    <>
      <div className="izpvahmjbl">Mới Phát Hành</div>
      <div className="hditkilyzd">
        <button className="etxecsjvcl">Tất cả</button>
        <button className="etxecsjvcl">Việt Nam</button>
        <button className="etxecsjvcl">Quốc tế</button>
      </div>
      <div className="ltmmijfpsd">
        {songs.map((item, index) => (
          <div className="jtdqcjiino" key={index}>
            <Song
              image={item?.image}
              title={item?.title}
              singer={item?.singerId?.fullname}
              time={item?.time}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Selection;
