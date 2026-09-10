"use client";
import { useState } from "react";
import { siteConfig } from "@/config/SiteConfig";
import ReviewCard from "./ReviewCard";
import LoadMoreButton from "./LoadMoreButton";

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showMoreReviews, setShowMoreReviews] = useState(false);
  const reviewsPerPage = 4;
  const sortedReviews = [...siteConfig.reviewsData.reviews].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const reviewsToShow = sortedReviews.slice(0, currentPage * reviewsPerPage);
  const hasMoreReviews = reviewsToShow.length < sortedReviews.length;

  const handleLoadMore = () => setCurrentPage((prev) => prev + 1);

  return (
    <section id="reviews" className="py-12 md:py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-10">
          <h2 className="font-bold text-2xl md:text-4xl text-gray-900">
            We&apos;re Rated 5/5 On Facebook
          </h2>
          <p className="text-gray-500 text-lg mt-2">
            Based on verified reviews
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsToShow.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>

        {hasMoreReviews && (
          <div className="flex justify-center mt-10">
            <LoadMoreButton onClick={handleLoadMore} />
          </div>
        )}

        {/* Read More - My Job Quote Reviews */}
        {!showMoreReviews && (
          <div className="flex justify-center mt-10">
            <button
              type="button"
              onClick={() => setShowMoreReviews(true)}
              className="flex items-center gap-2 rounded-md px-5 py-2.5 cursor-pointer text-white text-sm tracking-wider font-medium border-0 outline-none hover:opacity-90 transition-opacity duration-200"
              style={{ background: siteConfig.brand.primary }}
            >
              Read More Reviews
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 fill-current"
                viewBox="0 0 512 512"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L256 338.7 86.6 169.4c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l192 192z" />
              </svg>
            </button>
          </div>
        )}

        {showMoreReviews && (
          <div className="mt-12">
            <div className="text-center mb-10">
              <h2 className="font-bold text-2xl md:text-4xl text-gray-900">
                Also Rated 5/5 On My Job Quote
              </h2>
              <p className="text-gray-500 text-lg mt-2">
                Based on verified reviews
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {siteConfig.mjqrReviewsData.reviews.map((review) => (
                <ReviewCard
                  key={review.name}
                  review={review}
                  sourceImage={siteConfig.mjqrReviewsData.sourceImage}
                  sourceAlt={siteConfig.mjqrReviewsData.source}
                />
              ))}
            </div>

          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;
