
type TList = {
  lis: string[]
};

export const List = ({ lis }: TList) => {
  return (
    <div>
      {lis.length > 0 ? 
        <ul>
          {lis.map((item, i) => <li key={i}>{item}</li>)}
        </ul> 
        : <p>No item to show...</p>}
    </div>
  );
};