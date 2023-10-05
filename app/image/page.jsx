import Image from "next/image";
import React from "react";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/upload", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const page = async () => {
  const { image } = await getTopics();
  return (
    <div>
      {image.map((item) => (
        <div key={item._id}>
          <Image src={`/${item.image}`} width={200} height={200} alt="image" />
        </div>
      ))}
    </div>
  );
};

export default page;
