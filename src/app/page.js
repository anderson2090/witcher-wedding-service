"use client";

import WeddingCard from "@/components/WeddingCard";

const HomePage = () => {
  return (
    <>
      <style jsx global>{`
        body {
          background: #f8f2d2;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
      `}</style>
      <WeddingCard />
    </>
  );
};

export default HomePage;
