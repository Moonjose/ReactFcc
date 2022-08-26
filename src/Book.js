export const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert('Added to cart!');
  };
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(author);
      }}
    >
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        Go
      </button>
    </article>
  );
};
