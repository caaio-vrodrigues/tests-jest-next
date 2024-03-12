type TArticleTest = {
  showText: boolean
};

export const ArticleTest = ({ showText }: TArticleTest) => {
  return (
    <article className={`flex flex-col justify-center items-center border 
    border-white p-3`}>
      <h1>Testando Mock</h1>
      <br />
      {showText && 
        <p>Hello World! I am Caio.</p>}
    </article>
  );
};