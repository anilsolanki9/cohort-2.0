import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const LIMIT = 20;

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(2); // start from 2 (tumhari requirement)
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loaderRef = useRef(null);

  // 🔹 Fetch data
  useEffect(() => {
    async function fetchImages() {
      if (loading || !hasMore) return;

      setLoading(true);

      try {
        const res = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${LIMIT}`);

        const data = res.data;

        setImages((prev) => [...prev, ...data]);

        // agar data kam aaya → end
        if (data.length < LIMIT) {
          setHasMore(false);
        }
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    }

    fetchImages();
  }, [page]);

  // 🔹 Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading && hasMore) {
        setPage((prev) => prev + 1);
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [loading, hasMore]);

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Infinite Scroll (Picsum)</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img) => (
          <div key={img.id} className="bg-zinc-800 rounded-xl overflow-hidden">
            <img src={img.download_url} alt="" className="h-48 w-full object-cover" />
            <p className="p-2 text-sm">{img.author}</p>
          </div>
        ))}
      </div>

      {/* 🔹 Loader / Sentinel */}
      <div ref={loaderRef} className="h-20 flex items-center justify-center">
        {loading && <p>Loading...</p>}
        {!hasMore && <p>No More Images 🚫</p>}
      </div>
    </div>
  );
};

export default App;
