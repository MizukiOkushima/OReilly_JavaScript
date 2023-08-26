"use strict";

//////////////////////////////////////////////////////////////////////////////////////
// 4.1 単項式
//////////////////////////////////////////////////////////////////////////////////////

// 最も単項な式は他の式を含まない式である
// このような式を単項式と呼ぶ
// JavaScriptでの単項式としてはリテラル（定数値）、JavaScriptのキーワード、変数参照がある

// リテラルとしてはプログラム中に直接埋め込まれた定数値である

1.23        // 数値リテラル
"hello"     // 文字列リテラル
/pattern/   // 正規表現リテラル

// JavaScriptでの数値リテラルは3.2章で解説済み
// 文字列リテラルについては3.3章で解説済み
// 正規表現リテラルについては3.3.5章で概要を解説済み
// 詳細については11.3章で解説する

// JavaScriptの予約語には単項式として使えるものがある

true        // 論理値のtrueの値に評価される
false       // 論理値のfalseの値に評価される
null        // null値に評価される
this        // 「現在の」オブジェクトに評価される

// true, false, nullについては3.4章と3.5章で解説済み
// 他のキーワードと異なり、thisは定数ではない
// プログラム中のさまざまな場所で、さまざまな値に評価される
// thisキーワードはオブジェクト指向プログラミングでよく使われるキーワードである
// メソッド本体でthisを使えば。メソッドが呼び出されたオブジェクトを参照できる
// thisについて詳しくは4.5章、8章(8.2.2章)、9章で解説する

// 最後に紹介する単項式は変数や定数、グローバルオブジェクトのプロパティ参照である

i           // 変数iの値に評価される
sum         // 変数sumの値に評価される
undefined   // グローバルオブジェクトの「undefined」プロパティの値に評価される

// プログラム中に識別子が現れた場合、JavaScriptは変数または定数、グローバルオブジェクトのプロパティと認識し、値を検索する
// 該当する名前の変数が存在しない場合、存在しない変数を評価するとReferenceErrorがスローされる