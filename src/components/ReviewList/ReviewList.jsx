function ReviewList({ reviews }) {
  return (
    <div className="reviews">
      <h3>Reviews</h3>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="review">
            <p>
              <strong>{review.author}</strong>
            </p>
            <p>Rating: {"⭐".repeat(review.rating)}</p>
            <p>{review.comment}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
}

export default ReviewList;
