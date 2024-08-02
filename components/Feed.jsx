"use client";

import { useState, useEffect } from "react";
import RecordCard from "./RecordCard";

const RecordCardList = ({ data, handleRecordClick }) => {
  return (
    <div className="mt-16 record_layout">
      {data.map((post) => (
        <RecordCard
          key={post._id}
          post={post}
          handleRecordClick={handleRecordClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  //useState[searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {};

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/record");
      const data = await response.json();

      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search receipts and expenses details"
          //value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <RecordCardList data={posts} handleRecordClick={() => {}} />
    </section>
  );
};

export default Feed;
