
export default async function fetchAPI () {
  try{
    const request = await fetch('https://jsonplacccccccccceholder.typicode.com/todos/1');
    const data = await request.json();
    return data;
  }
  catch(err){
    if(err instanceof Error){
      // console.log(err.message);
      return 'errrrrroooooooooouu...';
    };
    
    return null;
  };
};