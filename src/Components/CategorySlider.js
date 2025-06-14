import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categories = [
  "All",
  "Music",
  "Podcasts",
  "Gopal Bhar",
  "Mixes",
  "Gaming",
  "Jaani",
  "News",
  "T-Series",
  "Naseeruddin Shah",
  "Mobile Legends: Bang Bang",
  "Comedy",
  "Movies",
  "Education",
  "Technology",
  "Travel",
  "Food",
  "Sports",
];

const CategorySlider = () => {
  const [active, setActive] = useState("All");
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 200;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Check and update arrow visibility
  const updateArrowVisibility = () => {
    const container = scrollRef.current;
    if (!container) return;

    setShowLeftArrow(container.scrollLeft > 10);
  };

  // Update on scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateArrowVisibility);
    updateArrowVisibility(); // initialize

    return () => container.removeEventListener("scroll", updateArrowVisibility);
  }, []);

  return (
    <div className="flex  items-center gap-2 px-4 py-2 bg-white pt-2 pb-8 z-10  sticky">
      {/* Left Arrow - Hidden Initially */}
      {showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          <FaChevronLeft />
        </button>
      )}

      {/* Scrollable Category Buttons */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-2 scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              active === category
                ? "bg-black text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default CategorySlider;
