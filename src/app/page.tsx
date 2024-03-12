'use client';

import { useState } from "react";

// components 
import { ButtonMock } from "@/components/button-mock/ButtonMock";
import { ArticleTest } from "@/components/article-test/ArticleTest";
import { List } from "@/components/list/List";

export default function Home() {
  const [showText, setShowText] = useState<boolean>(false);

  const lis = ['item 1', 'item 2', 'item 3', 'item 4'];

  return (
    <main className={`flex flex-col justify-center items-center p-5`}>
      <h1>Hello World!</h1>
      <br />
      <ButtonMock onClick={() => setShowText((val: boolean) => !val)}/>
      <br />
      <ArticleTest showText={showText}/>
      <br />
      <List lis={lis}/>
    </main>
  );
};
