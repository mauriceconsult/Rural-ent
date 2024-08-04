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
  const [allPosts, setAllPosts] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/record");
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterRecords = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.receipt) ||
        regex.test(item.receiptDetails) ||
        regex.test(item.expense) ||
        regex.test(item.expenseDetails)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterRecords(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleRecordClick = (recordName) => {
    setSearchText(recordName);

    const searchResult = filterPrompts(recordName);
    setSearchedResults(searchResult);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a record or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      {/* All Records */}
      {searchText ? (
        <RecordCardList
          data={searchedResults}
          handleTagClick={handleRecordClick}
        />
      ) : (
        <RecordCardList data={allPosts} handleRecordClick={handleRecordClick} />
      )}
    </section>
  );
};

export default Feed;