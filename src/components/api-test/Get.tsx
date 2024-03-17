import { useEffect } from "react";

export const Get = () => {
  useEffect(() => {
    const fetchData = async () => {
      try{
        const request = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        console.log(await request.json());
        
      }catch(err){
        if(err instanceof Error) console.log(err.message);
      };
    };

    fetchData();
  }, []);
};