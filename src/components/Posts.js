const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul className="list-group mb-4">
      {posts &&
        posts.map((el, index) => {
          return (
            <li key={el.id + index} className="list-group-item">
              {el.title}
            </li>
          );
        })}
    </ul>
  );
};

export default Posts;
