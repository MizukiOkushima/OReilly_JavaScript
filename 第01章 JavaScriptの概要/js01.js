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

  // console.log(typeof x);

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

  // 角括弧の中に配列要素を列挙したり中括弧の中にオブジェクトのプロパティ名と値をマッピングしたりする構文を「初期化子」と呼びます

  // 演算子
  3 + 2                     // 5 加算
  3 - 2                     // 1 減算
  3 * 2                     // 6 乗算
  3 / 2                     // 1.5 除算
  points[1].x - points[0].x // 1 オペランドが複雑でも問題ない
  "3" + "2"                 // 32 +は数値の場合は加算、文字列の場合は連結

  // JavaScript には算術演算子を短縮表記する方法が定義されている
  let count = 0;            // 変数を定義する
  count++;                  // 変数をインクリメントする
  count--;                  // 変数をデクリメントする
  count += 2;               // 2を加算する count = count + 2; と同じ意味
  count *= 3;               // 3を乗算する count = count * 3; と同じ意味
  count                     // 6 変数名も式

  // 等値演算子や関係演算子はそれぞれ2つの値が等しいかどうか、等しくないかどうか
  // より小さいか、より大きいかなどを調べる
  // true または false に評価される
  x = 2;             // この等号は代入 等しいかどうかを調べているのではない
  let y = 3;
  // x === y                   // false ===は同値
  // x !== y                   // true !==は非同値
  // x < y                     // true <は小なり
  // x <= y                    // true <=小なりイコール
  // x > y                     // false >は大なり
  // x >= y                    // false >=は大なりイコール
  // "two" === "three"         // false 2つの文字列は異なる
  // "two" > "three"           // true "tw"はアルファベット順では"th"より後だから
  // false === (x > y)         // true falseはfalseと等しい

  // // 論理演算子は、論理値を組み合わせたり反転させたりする。
  // (x === 2) && (y === 3)    // true 両方の比較がtrue &&はANDを意味する
  // (x > 3) || (y < 3)        // false 両方の比較ともtrueではない ||はORを意味する
  // !(x === y)                // true !は論理値を反転させる


  // 関数は引数を渡して呼び出すことのできるJavaScriptコードブロック
  function plus1(x) {             // 「x」というパラメータを持つ「plus1」という関数を定義する
    return x + 1;                 // 引数として渡された値より1 大きい値を返す
  }                               // 関数は中括弧で囲む
  plus1(y)                        // 4 yは3なので関数を呼び出すと3+1の計算結果を返す
  let square1 = function(x) {      // 関数は値なので変数に代入できる
    return x * x;                 // 関数の値を計算する
  };                              // セミコロンで代入を終わらせる
  square1(plus1(y));               // 16 1つの式で2つの関数を呼び出す


  // アロー関数 ES6以降の書き方で短い方法での関数定義 無名関数を別の関数として渡すときによく使う
  // 上記コードのアロー関数版
  const plus2 = x => x + 1;          // 入力xに対してx + 1が出力される
  const square2 = x => x * x;         // 入力xに対してx * xが出力される
  plus2(y)                           // 4 関数の呼び出し方法は同じ
  square2(plus2(y))                   // 16


  // メソッド 関数がオブジェクトのプロパティに代入される関数のこと
  // すべてのJavaScript オブジェクト（配列も含む）はメソッドを持つ
  let a = [];                    // 空の配列を生成する
  a.push(1,2,3);                 // push()メソッドは配列に要素を1つ追加する
  a.reverse();                   // 別のメソッド reverseは要素の順序を反転させる


  // 「this」キーワードでメソッドが独自の定義が出来る
  // オブジェクトを参照できる この例の場合は points 配列を参照する。
  points.dist = function () { // 2 点間の距離を計算するメソッドを定義する。
    let p1 = this[0];                 // {x: 0, y: 0} メソッドが呼び出された配列の最初の要素
    let p2 = this[1];                 // {x: 1, y: 1} 「this」オブジェクトの2番目の要素
    let a = p2.x - p1.x;              // 1 X座標の距離
    let b = p2.y-p1.y;                // 1 Y座標の距離
    return Math.sqrt(a * a + b * b);  // ピタゴラスの定理 Math.sqrt()は平方根を計算する
  };

  points.dist()                       // 1.4142135623730951 2点間の距離


  // JavaScriptにはCやC++Javaなどで使われている条件文やループ文が用意されている
  function abs(x) {                  // 絶対値を計算する関数
    if (x >= 0) {                    // if文は比較がtrue の場合にこのコードを実行する
      return x;
    } else {                         // ここでif 節が終わる 省略可能なelse節は比較がfalse のときに実行される
      return -x;
    }                                 // 節に1文しかない場合は中括弧は省略できる
  }                                   // return文はif else中に含まれていることに注意

  abs(-10) === abs(10)                // true

  function sum(array) {               // 配列の要素の合計を計算する
    let sum = 0;                      // sumの初期値を0にする
    for(let x of array) {             // 配列をループし各要素をxに代入する
      sum += x;                       // sumに各要素の値を加算する
    }                                 // ここでループが終わる
    return sum;                       // sumを返す
  }

  sum(primes)                         //28 5番目までの素数の合計2+3+5+7+11

  function factorial(n) {             // 階乗を計算する関数
    let product = 1;                  // 1からスタート
    while(n > 1) {                    // ()中の式がtrueの間は{}中の文を繰り返す
      product *= n;                   // product = product * n; の短縮表記
      n--;                            // n = n - 1 の短縮表記
    }                                 // ループの最後
    return product;                   // 計算結果を返す
  }

  factorial(4)                        // 24 1*4*3*2

  function factorial2(n) {            // ループ方法を変えた関数
    let i, product = 1;               // 1からスタート
    for (i = 2; i <= n; i++) {        // iは2からnまで自動的にインクリメントされる
      product *= i;                   // ループごとに実行される 文は1行なので{}は必要ない
    }
    return product;                   // 階乗の計算結果を返す
  }

  factorial2(5)                       // 120 1*2*3*4*5


  // 簡単なオブジェクト指向の例 2次元座標を表現するJavaScriptクラスの定義
  // 原点からの距離を計算するdistance()メソッドを定義する
  class Point {                  // クラス名は大文字から記述するのが慣習
    constructor(x, y) {          // 新しいインスタンスを初期化するコンストラクタ関数
      this.x = x;                // thisキーワードで初期化中のオブジェクトを参照できる
      this.y = y;                // 関数の引数をオブジェクトのプロパティとして保存する
    }                            // return文は必要ない
    distance() {                 // 原点からの距離を計算するメソッド
      return Math.sqrt(          // x² + y² の平方根を返す
        this.x * this.x +        // thisが参照しているのは
        this.y * this.y          // distance メソッドが呼び出されているオブジェクト
      );
    }
  }

  // newキーワードとPoint()コンストラクタ関数を使ってPointオブジェクトを生成する
  let p = new Point(1, 1);       // 座標(1,1)

  // Pointオブジェクトp のメソッドを使う
  p.distance()                   // Math.SQRT2



};