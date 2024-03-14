'use client';

import { useState } from "react";

// components 
import { ButtonMock } from "@/components/button-mock/ButtonMock";
import { ArticleTest } from "@/components/article-test/ArticleTest";
import { List } from "@/components/list/List";
import { Form } from "@/components/form/Form";
import { Checkbox } from "@/components/checkbox/Checkbox";
import { AsyncAwait } from "@/components/async-await/AsyncAwait";

export default function Home() {
  const [showText, setShowText] = useState<boolean>(false);

  const lis = ['item 1', 'item 2', 'item 3', 'item 4'];

  return (
    <main className={`flex flex-col justify-center items-center p-5`}>
      <h1>Hello World!</h1>
      <br/>
      <div className={`text-center border border-white p-3`}>
        <ButtonMock onClick={() => setShowText((val: boolean) => !val)}/>
        <br/><br/>
        <ArticleTest showText={showText}/>
      </div>
      <br/>
      <List lis={lis}/>
      <br/>
      <Form/>
      <br/>
      <Checkbox/>
      <br />
      <AsyncAwait/>
    </main>
  );
};
