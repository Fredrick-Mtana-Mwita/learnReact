function Impression() {
  const impression = {
    likes: 23,
    comments: 10,
    shares: 5,
  };
  return (
    <div className="icons">
      <p className="like">
        <i class="bi bi-hand-thumbs-up"></i> {impression.likes} Likes
      </p>
      <p className="comment">
        <i class="bi bi-chat"></i> {impression.comments} Comments
      </p>
      <p className="share">
        <i class="bi bi-share"></i> {impression.shares} Shares
      </p>
    </div>
  );
}

export default Impression;
