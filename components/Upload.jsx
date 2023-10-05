"use client";
import React, { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(file);
    const data = new FormData();
    data.set("file", file);
    data.set("title", title);
    const result = await fetch("http://localhost:3001/api/upload", {
      method: "POST",
      body: data,
    });
    console.log(result);
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center flex-col">
        <h1>Upload image</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            name="file"
            onChange={(e) => setFile(e.target.files?.[0])}
          />
          <input
            type="text"
            placeholder="inter here name"
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit">Upload Image</button>
        </form>

        <div>{/* <Output /> */}</div>
      </div>
    </>
  );
};

export default Upload;
