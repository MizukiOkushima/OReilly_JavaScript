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

//////////////////////////////////////////////////////////////////////////////////////
// 4.2 オブジェクトと配列の初期化子
//////////////////////////////////////////////////////////////////////////////////////

// オブジェクトと配列の初期化子とは、新たに生成されるオブジェクトや配列の値となる式のことである
// このような初期化子は「オブジェクトリテラル」や「配列リテラル」と呼ばれることがある
// しかし、本当のリテラルとは異なり単項式ではない
// なぜならプロパティの値や要素の値を指定するために複数の式が含まれるからである
// 配列の初期化子のほうがいくぶん単純であるためこちらから解説する

// 配列初期化子とは、カンマで区切った式のリストを角括弧で囲んだものである
// 配列の初期化子の値は、新たに生成された配列になる
// この配列の要素は、カンマで区切られた式の値に初期化される

[]          // 空の配列 角括弧中に式がない場合、要素がないことを意味する
[1+2, 3+4]  // 要素を2つ持つ配列 1つ目の要素が3 2つ目の要素が7

// 配列初期化子中の要素として、配列初期化子を記述しても構わない
// この場合、入れ子になった配列が生成される

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// 配列初期化子が評価されるたびに、配列初期化子中の要素の式も評価される
// つまり、配列初期化子の値は、評価されるたびに異なる可能性がある

// 未定義の要素を配列リテラル中に含めたい場合、カンマの値を省略する
// 例えば、次の例は要素を5つもつが、3つの要素は未定義の要素になる

let sparseArray = [1,,,,5];

// 配列初期化子の最後の式の後にカンマを1つ記述しても構わない
// この場合、未定義要素は作成されない
// ただし、最後の式より後のインデックスに対して配列アクセスを行うと、未定義値と評価される

// オブジェクト初期化子は、配列初期化子と同じような書式だが、角括弧の代わりに中括弧を使い、
// 各式の前にはプロパティ名とコロンを記述する

let p = {x: 2.3, y: -1.2};     // 2つプロパティを持つオブジェクト
let q = {};                     // プロパティを持たない空のオブジェクト
q.x = 2.3; q.y = -1.2;          // これでqはpと同じプロパティを持つ

// ES6ではオブジェクトリテラルにもっと高機能な構文が使える
// 詳しくは6.10章で解説
// オブジェクトリテラルは次のように入れ子にできる

let rectangle = {
    upperLeft: {x: 2, y: 2},
    lowerRight: {x: 4, y: 5}
};

// オブジェクト初期化子（オブジェクトリテラル）と配列初期化子（配列リテラル）については6章、7章で解説

//////////////////////////////////////////////////////////////////////////////////////
// 4.3 関数定義式
//////////////////////////////////////////////////////////////////////////////////////

// 関数定義式は、JavaScriptの関数を定義する
// この式の値は新たに定義される関数になる
// オブジェクト初期化子が「オブジェクトリテラル」と呼ばれるのと同じように、関数定義式も「関数リテラル」と呼ぶ
// 関数定義式は、一般的にはfunctionキーワードに続いて、カンマで区切って0個以上の識別子（パラメータ名）を丸括弧中に記述し、
// 中括弧中にJavaScriptコードブロック（関数本体）を記述する

// この関数は引数として渡された値の自乗を返す
let square = function(x) {
    return x * x;
};

// 関数定義式には無名を記述できる
// 関数は、関数定義式のかわりに、関数分を使って定義することもできる
// また、ES6以降では「アロー関数」というコンパクトな構文を使うこともできる
// 関数定義の詳細については8章で解説

//////////////////////////////////////////////////////////////////////////////////////
// 4.4 プロパティアクセス式
//////////////////////////////////////////////////////////////////////////////////////

// プロパティアクセス式は、オブジェクトプロパティの値、または配列の要素の値に評価される
// JavaScriptにはプロパティ用に2つの構文が用意されている

式.識別子
式[式]

// 前者の方法では、式の後にピリオドと識別子を記述している
// 式がオブジェクトを指定し、識別子でアクセスしたいプロパティの名前を指定する
// 後者の方法では、最初の式（オブジェクトまたは配列になる）の後に、角括弧で囲んだ式が続く
// この2番目の式で、アクセスしたいプロパティ名や、アクセスしたい配列要素のインデックスを指定する

let o = {x: 2, y: {z: 3}};      // 例となるオブジェクト
let a = [o, 4, [5, 6]];         // オブジェクトを含む配列の例
o.x                             // 1: 式oのプロパティxの値
o.y.z                           // 3: 式0.yのプロパティzの値
o["x"]                          // 1: オブジェクトoのプロパティxの値
a[1]                            // 4: 式aのインデックス1の要素の値
a[2]["1"]                       // 6: 式a[2]のインデックス1の要素の値
a[0].x                          // 1: 式a[0]のプロパティxの値

// どちらのプロパティアクセス式を使っても、.や[の前の式がまず評価される
// 評価した値がnullやundefinedになった場合、TypeErrorがスローされる
// この2つの値はJavaScriptでプロパティを持てないからである
// オブジェクト式の後に、ドットと識別子が続く場合、識別子で指定されたプロパティ名が検索され、この値がプロパティアクセス式全体の値となる
// オブジェクト式の後に角括弧が続く場合、2番目の式を評価し文字列に変換する
// この文字列と同じ名前のプロパティの値が、プロパティアクセス式全体の値になる
// どちらの場合も、指定された名前のプロパティが存在しない場合は、プロパティアクセス式の値はundefinedになる

// 2つの方法を比べると、.識別子構文の方が簡単である
// ただし、この形式が使えるのは、アクセスしたいプロパティの名前が識別子として使え、またプロパティを書くときにその名前を知っているときだけである
// 例えば、プロパティ名が予約語であったり、空白や句読点文字を含んでいたりする場合や、
// （配列などで）数値の場合は、角括弧を使って記述しなければならない
// また、プロパティ名が静的に決まるのではなく、計算結果できまるような場合にも角括弧が使われる（6.3.1章参照）
// オブジェクトとプロパティについては6章で解説
// 配列と要素については7章で解説

//////////////////////////////////////////////////////////////////////////////////////
// 4.4.1 条件付きプロパティアクセス
//////////////////////////////////////////////////////////////////////////////////////

// ES202では次に示すようなプロパティアクセス式が新たに2種類追加された

式?.識別子
式?.[式]

// JavaScriptではnullとundefinedだけがプロパティを持たない値である
// .や[]という通常のプロパティアクセス式を使った場合、左側の式がnullやundefinedに評価された場合、TypeErrorがスローされてしまう
// ?.や?.[]構文を使うとこのようなエラーを防ぐことができる

// a?.bを例にとって説明する
// もしもaがnullまたはundefinedの場合、この式はundefinedと評価され、プロパティbをアクセスしない
// もしもaが何らかの値を保つ場合、a?.bはa.bを評価したのと同じ値に評価される
// （もしも、aがbという名前のプロパティを持たない場合、この値はundefinedになる）

// この形式のプロパティアクセス式は「オプショナルチェイニング」と呼ばれることもある
// 次のように長く連結（チェイン）されたプロパティアクセス式で使えるものだからである

let a = { b: null };
a.b?.c.d                // undefined

// aはオブジェクトなので、a.bは正当なプロパティアクセス式である
// しかし、a.bの値はnullなので、a.b.cはTypeErrorをスローする
// .の代わりに?.を使うことでTypeErrorがスローされないようになり、a.b?.cはundefinedと評価される
// また、(a.b?.c).dという式は、undefined値のプロパティにアクセスすることになるので、TypeErrorがスローされる
// ただし、丸括弧をつけないでa.b?.c.dと記述した場合は、単純にundefinedと評価され、TypeErrorはスローされない
// これが「オプショナルチェイニング」の非常に重要な機能である
// ?.の左辺にある式がnullまたはundefinedの場合、式全体が即座にundefinedと評価される
// 以降のプロパティアクセスは行われない

// もちろんa.bがオブジェクトでこのオブジェクトがcという名前のプロパティを持っていない場合、a.b?.c.dはTypeErrorをスローする
// この場合は、次のように条件付きプロパティアクセスをもう1つ追加する

let a = { b: {} };
a.b?.c?.d           // undefined

// []の代わりに?.[]と記述しても条件付きプロパティアクセスが行われる
// a?.[b][c]という式では、aの値がnullまたはundefinedの場合、式全体が即座にundefinedと評価される
// この場合、bやcという式は評価されない
// どちらかの式が副作用を持つような式の場合も、その副作用は実行されない

let a;          // この変数を初期化し忘れている
let index = 0;
try {
    a[index++]; // TypeErrorをスローする
} catch(e) {
    index       // 1: TypeErrorがスローされる前にインクリメントが実行される
}
a?.[index++]    // undefined: aがundefinedなので
index           // 1: ?.[]は即座に値を評価するのでインクリメントは行われない
a[index++]      // !TypeError: 未定義値にインデックスは指定できない

// 条件付きプロパティアクセス(?.と?.[])はJavaScriptの最新機能の1つである
// 2020年初頭段階では、この構文は主要ブラウザの最新バージョンまたはβバージョンでサポートされている

