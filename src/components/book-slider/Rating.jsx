import React from "react";

export default function Rating({rating, reviews}) {

    const handleRating = (rating) => {
        const stars = [];
        const filledStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
    
        for (let i = 0; i < filledStars; i++) {
          stars.push(<i key={`star-${i}`} className="bi bi-star-fill"></i>);
        }
    
        if (hasHalfStar) {
          stars.push(<i key="half-star" className="bi bi-star-half"></i>);
        }
    
        const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
          stars.push(<i key={`empty-star-${i}`} className="bi bi-star"></i>);
        }
    
        return stars;
      };

  return (

    <div className="rating">
      {handleRating(rating)}{" "}
      <span className="reviews">({reviews}) reviews</span>
    </div>
    
  );
}
