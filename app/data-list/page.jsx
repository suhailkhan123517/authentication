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
  const { titleImage } = await getTopics();
  return (
    <div>
      {titleImage.map((item) => (
        <div key={item._id}>
          <Image src={`/${item.image}`} width={200} height={200} alt="image" />
          <h1 className="text-3xl font-bold">{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default page;
