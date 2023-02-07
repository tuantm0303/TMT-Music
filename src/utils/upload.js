import axios from "axios";

export const handleUploadFile = async (file, type = "image") => {
  const CLOUDINARY_API = `https://api.cloudinary.com/v1_1/dw78kmsie/${type}/upload`;
  const fd = new FormData();
  fd.append("upload_preset", type === "images" ? "images" : "audios");
  fd.append("file", file);
  type === "video" && fd.append("resource_type", "video");
  const {
    data: { url },
  } = await axios.post(CLOUDINARY_API, fd, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return url;
};
