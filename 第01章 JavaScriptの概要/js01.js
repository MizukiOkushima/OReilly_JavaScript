"use strict";

// js1_1();
// js1_2();
js1_3();

//////////////////////////////////////////////////////////////////////////////////////
// 1.1 JavaScriptを体験する
//////////////////////////////////////////////////////////////////////////////////////

function js1_1() {

  let x = 2;
  let y = 3;
  console.log(x + y);               // 5
  console.log(x === 2 && y === 3);  // true
  console.log(x > 3 || y < 3);      // false

};

//////////////////////////////////////////////////////////////////////////////////////
// 1.2 Hello World
//////////////////////////////////////////////////////////////////////////////////////

function js1_2() {

  console.log("Hello World!");

};

//////////////////////////////////////////////////////////////////////////////////////
// 1.3 JavaScriptコードを見てみよう
//////////////////////////////////////////////////////////////////////////////////////

function js1_3() {
  let x;

  x = 1;              // number型
  x = 0.01;           // number型
  x = "hello world";  // string型
  x = 'JavaScript';   // string型
  x = true;           // boolean型
  x = false;          // boolean型
  x = null;           // object型(object型は言語エラーによる互換性維持)
  x = undefined;      // undefined型

  console.log(typeof x);

  // オブジェクト
  let book = {              // オブジェクトは{}で囲む
    topic: "JavaScript",    // topicプロパティは"JavaScript"という値を持つ
    edition: 7              // editionプロパティは7という値を持つ
  };

  book.topic                // JavaScript
  book["edition"]           // 7 この書き方でも上記書き方でも良い
  book.author = "Flanagan"; // 代入 新たなプロパティが作成される
  book.contents = {};       // {}は何も持たない空のオブジェクトを意味する

  book.contents?.ch01?.sect1// 条件付きでプロパティにアクセスするとき?を使う(ES2020)
                            // undefined book.contentsにはch01プロパティは存在しないため

  // 配列
  let primes = [2, 3, 5, 7];  // 4 つの値を持つ配列 []で囲む
  primes[0];                  // 2 配列の最初の要素（インデックス0）
  primes.length;              // 4 配列の要素数
  primes[primes.length - 1];  // 7 配列の最後の要素
  primes[4] = 9;              // 代入すると新たな要素が追加される
  primes[4] = 11;             // 既存の要素の場合は代入で値が更新される
  let empty = [];             // [] は要素が1つもない空の配列
  empty.length;               // 0

  // 配列やオブジェクトには、別の配列やオブジェクトを格納できる。
  let points = [
    { x: 0, y: 0 },           // 2つの要素を持つ配列 各要素はオブジェクト
    { x: 1, y: 1 }
  ];

  let data = {
    trial1: [
      [1, 2],                 // 2つのプロパティを持つオブジェクト 各プロパティの値は配列
      [3, 4]                  // その配列の要素もまた配列。
    ],
    trial2: [
      [2, 3],
      [4, 5]
    ],
  };
  
};
