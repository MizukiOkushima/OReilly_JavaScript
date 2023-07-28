"use strict";

js3_1();

//////////////////////////////////////////////////////////////////////////////////////
// 3.1 概要と定義
//////////////////////////////////////////////////////////////////////////////////////

// 型は大きく分けて基本型とオブジェクト型がある
// 基本型には数値型、文字列、論理型
// nullとundefinedは基本型の値だが数値でも文字列でも論理値でもない特殊な型
// Symbolという特殊型はES6から追加された
// 上記以外の値がオブジェクトでプロパティの集合体
// 書くプロパティは名前と値を持ち、数値、文字列など基本型の値やオブジェクトを保持できる
// 特殊なオブジェクトとしてグローバルオブジェクトがある
// 配列という特殊なオブジェクトも定義されている
// 配列は通常のオブジェクトとは異なる振る舞いもする
// Setオブジェクトは値の集合を表す
// Mapオブジェクトはキーと値のペアを保持する
// バイトなどバイナリデータの配列を扱いやすい型付き配列が用意されている
// RegExp型はテキストパターンを表す
// このテキストパターンを使って文字列に対してマッチング、検索、置換の操作が行える
// Date型は日付と時刻を表し、基本的な日付の計算が出来る
// ErrorとErrorのサブタイプはJavaScriptコードを実行したときに発生したエラーを表す
// JavaScriptでは関数やクラスは単なる構文ではなく、JavaScriptプログラムから関数やクラスを操作できるようになっている
// 基本型値ではないほかの値と同じように、関数やクラスも特別なオブジェクトである
// JavaScriptインタプリタは自動的にガベージコレクションを行いメモリを管理する
// プログラマはオブジェクトなど破棄やメモリ解放について悩む必要はない
// ある値がプログラム中から参照できなくなったときにインタプリタはその値がもう使われないと判断し自動的にメモリを開放します
// つまり必要以上にメモリを使い続けたくない場合には必要ではなくなった値を参照できなくなるようにプログラムを記述する必要がある
// JavaScriptはオブジェクト指向プログラミングスタイルに対応している
// オブジェクト指向とはグローバルに定義された関数を使ってさまざまな型の値を処理するのではなく、その型で定義されたメソッドを使って値を処理するような考え方
// 例えば配列aの要素をソートするにはsort()関数に配列aを引数として渡すのではなく次のように配列aのsort()メソッドを呼び出すのがオブジェクト指向の考え方

a.sort();     // sort(a)のオブジェクト指向的な記述


// JavaScriptの場合メソッドが持てるのはオブジェクトだけである
// 数値や文字列、論理値、Symbol値もメソッドを持つような振る舞いをする
// JavaScriptではnullとundefinedだけはメソッドを呼び出すことができない

// JavaScriptのオブジェクト型は可変型である
// 基本型は不変型である
// オブジェクトのプロパティや配列の要素の値はJavaScriptプログラムから変更可能
// 一方で数値、論理型、Symbol値、null、undefinedは変更することができない
// 例えば、数値の値を変更すること自体意味がない
// 文字列は文字の配列として考えられるので、値を変更できる型と思うかもしれないが文字列は不変型である
// 文字列に対してインデックスを指定して文字を参照可能だが、既存の文字列を変更する方法は用意されていない

// JavaScriptは必要に応じてある方から別の型へ自動変換される
// ==等値演算子では型変換が行われる
// ===同値演算子は型変換が行われないためこちらを使うことが推奨されている

// 定数 const
// 変数 let
// 変数 var は古い
// 定数と変数を宣言するときに代入される値の型を指定しない


//////////////////////////////////////////////////////////////////////////////////////
// 3.2 数値
//////////////////////////////////////////////////////////////////////////////////////

// 数値型は整数とおおよその実数を表す
// JavaScriptではIEEE754標準で規定された64bit浮動小数点形式で数値を表す
// 最大値 ± 1.7976931348623157 × 10^308
// 最小値 ± 5 × 10^−324

// 数値形式は −9,007,199,254,740,992(−2^53) ～ 9,007,199,254,740,992(2^53) までの整数は正確に表せる
// この範囲外の整数を使う場合、下位の制度は損なわれる

// 直接数字を記述する場合、数値リテラルという
// 数値リテラルの前にマイナス記号「-」を記述すると符号を反転できる


//////////////////////////////////////////////////////////////////////////////////////
// 3.2.1 整数リテラル
//////////////////////////////////////////////////////////////////////////////////////

// JavaScriptプログラム中では10進整数は数字を続けて記述できる

0
3
10000000

// 整数を16進数で記述することもできる
// 16進リテラルは先頭が 0x または 0X その後に一連の16進数値が続く
// 16進数値は0から9までの数字とaからf(またはAからF)までの英字
// 英字は10進の10から15に対応

0xff          // 255: (15*16 + 15)
0xBADCAFE     // 195939070

// ES6以降は2進数と8進数も指定可能
// 2進数 0b または 0B
// 8進数 0o または 0O

0b10101       // 21 : (1*16 + 0*8 + 1*4 + 0*2 + 1*1)
0o377         // 255: (3*64 + 7*8 + 7*1)


//////////////////////////////////////////////////////////////////////////////////////
// 3.2.2 浮動小数点リテラル
//////////////////////////////////////////////////////////////////////////////////////

// JavaScript内では浮動小数点リテラルを使って実数を記述する
// 浮動小数点リテラルは小数部や指数も使用可能
// 浮動小数点リテラルは先頭が整数部、次に小数点、その次に小数部という形式
// 指数は先頭が英文字 e または E 、その次に + または - （あってもなくてもよい）、その次に整数指数という形式 小数部を後ろに記述する
// 浮動小数点リテラルの値は選考する整数部と小数部の数値に10を指数部で指定された回数だけ掛けた値になる

[10進数値][.10進数値][(E | e)[(+| -)]10進数値]

// 実例

3.14
2345.6789
.333333333333333333
6.02e23             // 6.02 × 10²³
1.4738223E-32       // 1.4738223 × 10-³²


// 数値リテラルの区切り文字
// 数値リテラル中ではアンダースコアが使用可能
// 長い数値リテラルをアンダースコアで区切って読みやすくできる

let billion = 1_000_000_000;    // アンダースコアで3 桁ごとに区切る
let bytes = 0x89_AB_CD_EF;      // バイト単位で区切る
let bits = 0b0001_1101_0111;    // ニブル単位で区切る
let fraction = 0.123_456_789;   // 小数部でも使用できる


//////////////////////////////////////////////////////////////////////////////////////
// 3.2.3 JavaScriptでの算術演算
//////////////////////////////////////////////////////////////////////////////////////

// JavaScriptでの基本的な算術演算子 + - * / %
// ES6から ** べき乗も使用可能

// 算術演算子以外にも複雑な数学演算を行う関数や定数がたくさん用意されている
// 関数と定数は Math という名前のオブジェクトのプロパティとして定義されている

Math.pow(2, 53)              // 9007199254740992: 2 の 53乗
Math.round(.6)               // 1.0: 最近傍の整数に変換
Math.ceil(.6)                // 1.0: 整数に切り上げ
Math.floor(.6)               // 0.0: 整数に切り捨て
Math.abs(-5)                 // 5: 絶対値
Math.max(x, y, z)            // 引数の中から最大値を返す
Math.min(x, y, z)            // 引数の中から最小値を返す
Math.random()                // 0 以上 1.0 未満の擬似乱数を返す
Math.PI                      // π: 円周率
Math.E                       // e: 自然対数の底
Math.sqrt(3)                 // 3**0.5: 3の平方根
Math.pow(3, 1 / 3)           // 3**(1/3): 3の立方根
Math.sin(0)                  // 三角関数 Math.cos やMath.atan なども
Math.log(10)                 // 10 の自然対数
Math.log(100) / Math.LN10    // 底が 10 の 100 の対数（100 の常用対数）
Math.log(512) / Math.LN2     // 底が 2 の512 の対数
Math.exp(3)                  // Math.E の3 乗

// ES6 から下記の関数も使用可能

Math.cbrt(27)                // 3: 立方根
Math.hypot(3, 4)             // 5: 引数を自乗したものの総和の平方根
Math.log10(100)              // 2: 常用対数
Math.log2(1024)              // 10: 底が 2 の対数
Math.log1p(x)                // (1+x) の自然対数 x が小さい値の場合、こちらが正確
Math.expm1(x)                // Math.exp(x)-1; Math.log1p() の逆関数
Math.sign(x)                 // 引数が0より小さいで0 0より大きいで-1 0、1を返す
Math.imul(2, 3)              // 6: 32 ビット整数の高速乗算
Math.clz32(0xf)              // 28: 32 ビットバイナリ表現での先頭の0 の数
Math.trunc(3.9)              // 3: 小数部を削除して整数に変換する
Math.fround(x)               // 最近傍の32 ビット浮動小数点を返す
Math.sinh(x)                 // 双曲線正弦関数 Math.cosh()、Math.tanh() も
Math.asinh(x)                // 逆双曲線正弦関数 Math.acosh()、Math.atanh() も

// JavaScriptでは算術演算中にオーバーフローやアンダーフローが発生した場合や、0除算を行った場合でもエラーが発生しない
// 算術演算の結果が表現可能な最大値より大きくなった場合（オーバーフロー）、算術演算の結果は無限大（Infinity）という特殊な値になる
// 同様にある負数の絶対値が表現可能な負数の絶対値の最大値を超えた場合、演算結果は特殊な無限大負値（-Infinity）になる
// 無限大にどんな値を加算、減算、乗算、除算しても無限大のまま（符号は変わる場合はある）

// 算術演算の結果の絶対値が表現可能な最小よりも0に近づいた場合、アンダーフローが発生する
// この場合、JavaScriptは0を返す
// 負の値に対してアンダーフローが発生した場合、JavaScriptは「負の0」という特殊な値を返す
// 「負の0」は通常の0と区別がつかないので気にする必要はない

// 0除算もJavaScriptではエラーにならない
// 無限大や負の無限大が返されるだけであるが例外がある
// それは0を0で割ったときで計算結果が不定となり、特殊な値NaN（not-a-number）になる
// 無限大を無限大で割った場合や、負数の平方根を求めた場合、数値に変換できないオペランドに対して算術演算を行った場合にもNaNという結果になる

// JavaScriptにはInfinityとNaNというグローバル変数が予め定義されている
// それぞれ正の無限大と不定値（not-a-number）が格納されている
// Numberオブジェクトにも同様のプロパティが存在する

Infinity                      // 表現できないくらい大きな正数（無限大）
Number.POSITIVE_INFINITY      // 同じく無限大
1 / 0                         // Infinity
Number.MAX_VALUE * 2          // Infinity; オーバーフローが発生
-Infinity                     // 絶対値が表現できないくらい大きな負数（負の無限大）
Number.NEGATIVE_INFINITY      // 同じく負の無限大
-1 / 0                        // -Infinity
-Number.MAX_VALUE * 2         // -Infinity

NaN                           // 不定値
Number.NaN                    // 同じ値の別の表記方法
0 / 0                         // NaN
Infinity / Infinity           // NaN

Number.MIN_VALUE / 2          // 0: アンダーフローが発生
-Number.MIN_VALUE / 2         // -0: 負の0
-1 / Infinity                 // -0: これも負の0
-0

// ES6 のNumber には、以下のようなプロパティも定義されている。

Number.parseInt()             // グローバルなparseInt()関数と同じ
Number.parseFloat()           // グローバルなparseFloat()関数と同じ
Number.isNaN(x)               // xがNaN値かどうかを返す
Number.isFinite(x)            // xが有限な数値かどうかを返す
Number.isInteger(x)           // xが整数かどうかを返す
Number.isSafeInteger(x)       // xが -(2**53) から 2**53 までの整数かどうかを返す
Number.MIN_SAFE_INTEGER       // -( 2 ** 53 -1)
Number.MAX_SAFE_INTEGER       // 2 ** 53 -1
Number.EPSILON                // 2 ** -52: 数値間の差異の中で、最小の差異

// javaScriptのNaN値にはどの値と比較しても等しいと判定されない
// NaN値同士でも等しく判定されない
// x === NaN と記述してもNaN値であるか判定できない
// x != x と記述するか、 Number.isNaN(x) を使う（この式はxがNaNのときにtrueになる）

// グローバル関数の isNaN() は Number.isNaN() と同じ動きをする
// 引数がNaN値か引数が数値に変換できない場合にこの関数はtrueを返す
// 同様に Number.isFinite() は引数がNaN、無限大、負の無限大ではない数値の場合trueを返す
// グローバル関数の isFinite() 関数は引数が有限の数値か、有限の数値に変換出来る場合にtrueを返す

// 負の0は少し特徴がある
// 負の0は通常の0と等しいと判定される
// JavaScriptの同値演算子でも等しいと判定されるため、事実上区別できない
// 除算を使ったときのみ違いが生じる

let zero = 0;         // 通常の0
let negz = -0;        // 負の0
zero === negz         // true: 通常の0 と負の0 は等しい
1 / zero === 1 / negz // false: 無限大と負の無限大は等しくない


//////////////////////////////////////////////////////////////////////////////////////
// 3.2.4 2進浮動小数点と丸め誤差
//////////////////////////////////////////////////////////////////////////////////////

// 実数は無限に存在する
// JavaScriptの浮動小数点形式では有限個（正確には18,437,736,874,454,810,627 個）しか表現できない
// つまりJavaScriptで実数を処理する場合、殆どの場合で実数を近似表現することになる

// JavaScriptを始めとする言語はIEEE-754浮動小数点表現形式は2進数表記
// このため 1/2 1/8 1/ 1024 などの小数は正確表現できる
// しかし金融計算など 1/10 1/100 など10進数は2進浮動小数点表現形式では0.1のような値も正確に表現できない

// JavaScriptの数値は制度が重ブウに高いので0.1をほぼ近似表現が出来る
// しかし数値を正確に表現できないため問題が生じる場合がある

let x = .3 - .2;        // 30セントから20セントを減算する
let y = .2 - .2;        // 20セントから10セントを減算する
x === y                 // false: 2つの値は同じではない
x === .1                // false: .3-.2は.1と等しくない

// 丸め誤差のため、.3と.2の差分の近似表現と.2と.1の差分の近似表現には同じ値にならない
// この問題はJavaScript特有の問題ではないため、2進浮動小数点数値を扱う言語なら同じ問題が発生する
// xとyの値はほぼ同じで両方とも正しい値に非常に近い値になっている
// 計算結果が問題となる場合はほぼないが、等しいかどうかを比較したときにだけ問題がある

// 浮動小数点近似がプログラム上問題となる場合は、スケールを調整して整数を使うようにすること
// 上記例だとドル単位で計算する代わりにセント単位で計算するようにする


//////////////////////////////////////////////////////////////////////////////////////
// 3.2.5 BigIntによる任意精度整数
//////////////////////////////////////////////////////////////////////////////////////

// BigInt ES2020で追加されたJavaScriptの最新機能の1つに新しい数値型
// BigIntは値が整数である数値型である
// 64ビット整数を表せるようにするため追加された
// 64ビット整数は他のプログラミング言語やAPIで使用されている型であるためJavaScriptでも使えるようにしなければならなかった
// 64ビット整数だけでなく必要であればBigInt値には数千桁や数百万桁の数字を格納可能
// ただしBigIntの実装はタイミング攻撃に耐性がないため暗号に使うのは避ける

// BigIntリテラルは数字文字列の最後に小文字のnを記述する
// 数字文字列の前にも記述しない場合は10進数になる
// 先頭に 0b 0o 0x を記述するとそれぞれ 2進数 8進数 16進数になる

1234n                 // それほど大きくないBigIntリテラル
0b111111n             // 2進数のBigIntリテラル
0o7777n               // 8進数のBigIntリテラル
0x8000000000000000n   // 2n**63n: 64ビット整数

// 次のように BigInt() 関数を使えば通常の数値や文字列をBigInt値に変換できる

BigInt(Number.MAX_SAFE_INTEGER)     // 9007199254740991n
let string = "1" + "0".repeat(100); // 1の後に100個0が続く文字列
BigInt(string)                      // 10n**100n: 1グーゴル（10の100乗）


// 通常のJavaScript数値と同じようにBigInt値を使って算術演算ができる
// 除算については小数部は0方向に丸められる

1000n + 2000n           // 3000n
3000n - 2000n           // 1000n
2000n * 3000n           // 6000000n
3000n / 997n            // 3n: 商は3
3000n % 997n            // 9n: 余りは9
(2n ** 131071n) - 1n    // 39457桁の素数

// BigInt値に対して + - * / % ++ 演算子が使用可能
// ただしオペランドにBigInt値と通常の数値を組み合わせて使うことはできない
// 理由はある数値型が別の数値よりも汎用的なものであれば2つの型をオペランドに混ぜて使っても汎用的な型の値を返せばよいので簡単だが、
// BigInt型と通常の数値型ではどちらもより汎用的な型ではないためである
// BigInt型は非常に大きな値を表現できるため通常の数値型よりも汎用的にみえるかもしれない
// しかしBigInt型が表せるのは整数型のみである
// この点では通常の数値型の方が汎用的である
// この問題を解決できないため、JavaScriptでは算術演算子で2つの型を混ぜて使うことを禁止することにした

// 一方、比較演算子に対しては2つの型を混ぜて使うことが可能（==と===の違いについては注意 後の章に記載）

1 < 2n                  // true
2 > 1n                  // true
0 == 0n                 // true
0 === 0n                // false: === では型が同じかどうかも調べるため

// ビット演算子ではBigInt型のオペランドが使用可能
// ただしMathオブジェクトの関数に関してはBigInt型は使用不可能


//////////////////////////////////////////////////////////////////////////////////////
// 3.2.6 日付と時刻
//////////////////////////////////////////////////////////////////////////////////////

// JavaScriptでは日付と時刻を表現や操作するDateクラスが用意されている
// JavaScriptのDate値はオブジェクトだが1970年1月1日から経過日数（ミリ秒単位）を表すタイムスタンプ数値表現もある

let timestamp = Date.now();     // 現在時刻のタイムスタンプ（数値）
let now = new Date();           // 現在時刻のDateオブジェクト
let ms = now.getTime();         // ミリ秒単位のタイムスタンプに変換
let iso = now.toISOString;      // 標準形式の文字列に変換


//////////////////////////////////////////////////////////////////////////////////////
// 3.3 テキスト
//////////////////////////////////////////////////////////////////////////////////////

// テキストを表すJavaScriptの型が文字列
// 文字列は16ビット値が順序付けられて並べらてた不変データでそれぞれUnicodeの文字を表す
// 文字列の長さを文字列に含まれる16ビット値の数になる
// JavaScriptの文字列は配列と同じように最初の文字を0としてインデックスする
// つまり最初の16ビット値が位置0、2番目の16ビット値が位置1、以降同様
// 空文字列は長さが0の文字列になる
// JavaScriptには1文字列を表すような特別な方は用意されていない
// 16ビット値を1つだけ表すには長さ1の文字列を使う

// 文字列、符号位置（コードポイント）、JavaScript文字列
// JavaScriptではUnicode文字集合のUTF-16エンコーディングを使用する
// JavaScriptの文字列は符号なし１６ビット値の並びである
// よく使われるUnicode文字（「基本多言語面」の文字群）は16ビットの符号位置で表せるので文字列の1つの要素として表現可能
// 16ビットで収まらない符号位置を持つようなUnicode文字はUTF-16の規則に従って2つの16ビット値の並び（サロゲートペア）として表す
// つまり長さ2（2つの16ビット値）のJavaScript文字列が表しているのが1文字のUnicode文字という場合もある

let euro = "€";
let love = "❤";
euro.length     // 1: この文字は16ビットの要素1つからなる
love.length     // 2: UTF-16で❤は \ud83d\udc99 として表す


// JavaScriptで定義されているさまざまな文字列操作メソッドは文字に対してではなく16ビットの値に対して処理を行う
// サロゲートペアに対しても特別な処理は行わない
// また文字列の正規化も行わない
// さらに文字列がUTF-16として正しい形式かどうかも確認しない

// ES6では文字列は反復可能である
// 文字列に対して for/ofループや、...演算子を使った場合、16ビット値ではなく文字列の実際の文字に対して反復処理が行われる


//////////////////////////////////////////////////////////////////////////////////////
// 3.3.1 文字列リテラル
//////////////////////////////////////////////////////////////////////////////////////

// JavaScriptプログラム中に文字列を記述するときは単一引用符（’）または二重引用符（"）またはバッククォート（`）で文字列を囲む
// 単一引用符で囲まれた文字列の中に二重引用符やバッククォート文字を挿入したり、
// 二重引用符で囲まれた文字列の中に単一引用符を挿入したりすることができる

""  // 空文字列 0文字の文字からなる文字列
'testing'
"3.14"
'name="myform"'
"Wouldn't you prefer O'Reilly's book?"
"τ is the ratio of a circle's circumference to its radius"
`"She said 'hi'", he said.`

// ES6からバッククォートで文字列を囲めるようになった
// またバッククォートで文字列を囲んだ場合には文字列リテラルの中にJavaScriptの式を埋め込む（補間する）ことが可能
// 後の章で解説

// 元々JavaScriptでは文字列リテラルは一行で記述しなければならなかった
// そのため長い文字列を記述する場合、+演算子を使って文字列を連結するコードがよく使われている
// しかし、ES5以降では文字列を複数の行に分割することができる
// 分割する場合には各行の末尾にバックスラッシュ（\）を記述する
// バックスラッシュやバックスラッシュの後の改行文字も文字列リテラルに含まれない
// 単一引用符や二重引用符で囲んだ文字列リテラルに改行文字を含めたい場合には、\nという文字並びを記述する
// ES6から追加されたバッククォートで囲む文字列リテラルの場合、文字列を複数行に分割でき、改行文字も文字列リテラルの一部になる

// 2行文字列を1行で記述
'two\nlines'
// 1行文字列を3行で記述
"one\
long\
line"
// 2行文字列を2行で記述
`the newline character at the end of this line
is included literally in this string`

// 文字列を単一引用符で囲んでいる場合、英語の短縮形や所有格に注意すること
// 例えば「can’t」や「O’Reilly’s」などの文字列
// アポストロフィは単一引用符と同じ文字なので単一引用符で囲んだ文字列中にアポストロフィが含まれる場合、
// バックスラッシュ（\）を使ってエスケープする必要がある

// クライアントサイドJavaScriptプログラミングではJavaScriptコードにHTML文字列を埋め込んだり、
// HTML文字列にJavaScriptコードを埋め込んだりすることがよくある
// JavaScriptと同様にHTMLも文字列を記述するときに単一引用符と二重引用符を使うことができる
// このためJavaScriptとHTMLでは文字列の囲み方を変えるように習慣づけるとよい
// 例えば、JavaScriptでは単一引用符で文字列を囲むようにし、HTMLでは二重引用符で文字列を囲むようにする

// 「Thank you」という文字列を単一引用符で囲んでJavaScript式に挿入し、
// 全体はHTMLイベントハイライト属性として二重引用符で囲んだ例
<button onclick="alert('Thank you')">Click Me</button>


//////////////////////////////////////////////////////////////////////////////////////
// 3.3.2 文字列リテラルのエスケープシーケンス
//////////////////////////////////////////////////////////////////////////////////////

// JavaScriptの文字列ではバックスラッシュ（\）を特別な意味で使用する
// バックスラッシュの直後に特定の文字を記述すると文字列内では記述できない文字を表せられる
// 例えば \n は改行文字を表すエスケープシーケンスである

// \' については単一引用符またはアポストロフィそのものを示すエスケープシーケンスである
// これは単一引用符に囲まれた文字列リテラルの中にアポストロフィを含めいたときに使用する
// なおエスケープは通常の解釈をしないという意味である
// つまり文字列の終端を表すという単一引用符の解釈を変更してそのままの記号、
// つまりアポストロフィそのものとして使用する意味になる

'You\'re right, it can\'t be a quote'

// Unicode文字を16進数で指定して、任意の文字を表す汎用的なエスケープシーケンスもある
// 例えば \xA9 は著作権者表示の記号
// このエスケープシーケンスはUnicode文字コードでA9（16進数）の文字を表す
// 同様に、 \u を使えば4桁の16進数で任意のUnicode文字を指定できる
// 中括弧を使えば1桁から6桁の16進数で任意のUnicode文字を指定できる
// 例えば \u03c0は π を表す
// また \u{1f600} は 😀 の絵文字を表す

// JavaScriptエスケープシーケンスの文字の前にバックスラッシュを記述した場合、
// バックスラッシュは単純に無視される（今後、将来のバージョンでエスケープシーケンスは増える可能性はある）
// 例えば \# と記述した場合は # と同じ意味になる
// 前章のES5で改行の直前にバックスラッシュを記述することで文字列のリテラルを複数行にまたがって記述可能

// JavaScriptエスケープシーケンス
\0      // NUL文字（\u0000）
\b      // バックスペース（\u0008）
\t      // 水平タブ（\u0009）
\n      // 改行（\u000A）
\v      // 垂直タブ（\u000B）
\f      // 改頁（\u000C）
\r      // 復帰（\u000D）
\"      // 二重引用符（\u0022）
\’      // アポストロフィまたは単一引用符（\u0027）
\\      // バックスラッシュ（\u005C）
\xnn    // 2桁の16進数nnで指定するUnicode文字
\unnnn  // 4桁の16進数nnnnで指定するUnicode文字
\u{n}   // 符号位置nで指定するUnicode文字　nは0から10FFFFまでの1桁から6桁の16進数（ES6）


//////////////////////////////////////////////////////////////////////////////////////
// 3.3.3 文字列の操作
//////////////////////////////////////////////////////////////////////////////////////

// JavaScriptには文字列を連結する機能がある
// 数値に対して+演算子を適用すると加算が実行される
// 文字列に+演算子を適用すると前の文字列に後文字列が連結される

let msg = "Hello, " + "world"; // "Hello, world"になる。
let greeting = "Welcome to my blog," + " " + name;

// 文字列は同値演算子（===）、非同値演算子（!==）で比較可能
// 2つの文字列が全く同じ16ビット値の並びである場合のみ2つの文字列は同じと判定される
// また。文字列は < <= > >= 演算子で比較することもできる
// 文字列の比較は単純に16ビット値を比較することで行われる
// ロケール対応の比較やソートについては後の章で解説

// ある文字列の長さはその文字列に含まれる16ビット値の数で表せられる
// 文字列の長さはその文字列のlengthプロパティで調べられる

s.length

// lengthプロパティ以外にも文字列に対して呼び出すことのできるAPIが数多く存在する

let s = "Hello, world";     // 例となるテキスト

// 文字列の一部を取得
s.substring(1,4)            // "ell": 2番目と3番目と4番目の文字
s.slice(1,4)                // "ell": 同じ処理
s.slice(-3)                 // "rld": 最後から3文字
s.split(", ")               // ["Hello", "world"]: 区切り文字で文字列を分割

// 文字列の検索
s.indexOf("l")              // 2: 最初のlの位置
s.indexOf("l", 3)           // 3: 3文字目以降で最初のlの位置
s.indexOf("zz")             // -1: sには「zz」という文字列は含まれていない
s.lastIndexOf("l")          // 10: 最後のlの位置

// 論理値を返す検索関数（ES6以降）
s.startsWith("Hell")        // true: この文字列から始まっている
s.endsWith("!")             // false: sの末尾はこの文字列ではない
s.includes("or")            // true: sには「or」という文字列が含まれている

// 一部を変更した文字列を作成。
s.replace("llo", "ya")      // "Heya, world"
s.toLowerCase()             // "hello, world"
s.toUpperCase()             // "HELLO, WORLD"
s.normalize()               // UnicodeのNFC正規化を行う（ES6）
s.normalize("NFD")          // NFD正規化を行う 「NFKC」「NFKD」も使える

// 文字列中の個々の文字（16ビット）の処理
s.charAt(0)                 // "H": 最初の文字
s.charAt(s.length-1)        // "d": 最後の文字
s.charCodeAt(0)             // 72:  指定した位置の文字の16ビット値
s.codePointAt(0)            // 72:  16ビットよりも大きな符号位置にも使える（ES6）

// ES2017で追加された文字列パディング関数
"x".padStart(3)             // "  x": 左側に空白を追加して3文字にする
"x".padEnd(3)               // "x  ": 右側に空白を追加して3文字にする
"x".padStart(3, "*")        // "**x": 左側に「*」を追加して、3文字にする
"x".padEnd(3, "-")          // "x--": 右側に「-」を追加して、3文字にする

// 空白を削除する関数 （trim()のみES5から ほかはES2019から）
" test ".trim()             // "test": 先頭と末尾の空白を削除
" test ".trimStart()        // "test ": 左側の空白を削除 trimLeftと記述してもよい
" test ".trimEnd()          // " test": 右側の空白を削除 trimRightと記述してもよい

// そのほかの文字列メソッド
s.concat("!")               // "Hello, world!": 代わりに+演算子を使うだけでもよい
"<>".repeat(5)              // "<><><><><>": 文字列を繰り返して結合する（ES6）

// JavaScriptでは文字列は不変である
// replace()やtoUpperCase()などのメソッドでは新しい文字列が返される
// メソッドを呼び出した文字列を変更する変更するわけではない

// 文字列を読み出しのみの配列のように扱うことも可能
// つまりcharAt()メソッドを使うかわりに、角括弧を使って文字列中の個々の文字（16ビット値）にアクセス可能

let s = "hello, world";
s[0]                    // "h"
s[s.length-1]           // "d"


//////////////////////////////////////////////////////////////////////////////////////
// 3.3.4 テンプレートリテラル
//////////////////////////////////////////////////////////////////////////////////////

// ES6以降は文字列をバッククォートで囲むことができる

let s = `hello world`;

// これは単なる文字列リテラル構文ではない
// なぜならこの文字列中にJavaScriptの任意の式を含めることができるためである
// バッククォートで囲まれた文字列の値は、この式を評価し式の値を文字列に変換し、
// 文字列リテラルと結合したものになる
// このような文字列をテンプレートリテラルと呼ぶ

let name = "Bill";
let greeting = `Hello ${ name }.`; // greeting == "Hello Bill."

// ${ } で囲まれた部分はJavaScriptの式として扱われる
// 中括弧の外側は通常の文字列リテラルになる
// 中括弧の中の式は評価され、文字列に変換されテンプレートリテラルに挿入される
// ${ から } までがこの文字列で置き換えられる

// テンプレートリテラルには複数式を含めることもできる
// 通常の文字列で使用できるエスケープ文字も使用可能
// また特別なエスケープ文字を使わなくても複数行にまたがって記述できる

// 次のテンプレートリテラルの例では4つのJavaScriptの式とUnicodeエスケープシーケンスと
// 少なくとも4つの改行文字が含まれている（「少なくとも」と意味は式の評価結果に改行文字が含まれている場合もあるため）

let errorMessage = `\
\u2718 Test failure at ${filename}:${linenumber}:
${exception.message}
Stack trace:
${exception.stack}
`;

// 最初の行のバックスラッシュは最初の改行をエスケープしている
// このためこの文字列は改行ではなく、Unicodeの✘文字（\u2718）から始まる


//////////////////////////////////////////////////////////////////////////////////////
// 3.3.4.1 タグ付きテンプレートリテラル
//////////////////////////////////////////////////////////////////////////////////////

// テンプレートリテラルにはあまり使われない強力な機能がある
// 最初のバッククォートの前に関数名（タグ）をつけると
// テンプレートリテラル中のテキストや式の値が関数に渡される
// このタグ付きテンプレートリテラルの値は関数からの戻り値になる
// 例えば文字列に対してHTMLやSQLのエスケープを適用したい場合に使用する

// ES6にはString.raw()というタグ関数が組み込まれている
// この関数はバックスラッシュエスケープ処理を行わずにバッククォートないのテキストをそのまま帰す

`\n`.length             // 1: この文字列は1文字の改行文字
String.raw`\n`.length   // 2: バックスラッシュ文字とnという文字

// タグ付きテンプレートリテラルのタグ部分は関数だが、関数呼び出しのための丸括弧は記述しない
// この構文のときにはバッククォート文字が丸括弧の代わりになる

// タグ付きテンプレートリテラルのタグ関数は独自に定義することが可能
// コンストラクションのように使えばJavaScriptに対して新たなリテラル構文を追加したかのようになる


//////////////////////////////////////////////////////////////////////////////////////
// 3.3.5 パターンマッチング
//////////////////////////////////////////////////////////////////////////////////////

// JavaScriptではテキストパターンを表したりマッチングするために正規表現（RegExp）というデータ型が用意されている
// JavaScriptではRegExpは基本型ではないが、数値や文字列と同じようにリテラル構文があるため一見基本型のよう見える
// 正規表現リテラル構文は複雑でまたAPIも簡単ではない
// 正規表現については後の章で解説
// RegExpは非常に協力でテキスト処理でよく使われる

// スラッシュで囲んだ文字列が正規表現リテラルになる
// 2つ目のスラッシュのあとには、パターンの意味を変更する文字を記述可能

/^HTML/;            // 文字列の先頭のHTMLという文字列にマッチ
/[1-9][0-9]*/;      // 0以外の数字の後に続く任意の個数の数字にマッチ
/\bjavascript\b/i;  // 大文字小文字区別なしに「javascript」という単語にマッチ

// RegExpオブジェクトには便利なメソッドがたくさん用意されている
// 文字列にはRegExpを引数として利用するメソッドが用意されている

let text = "testing: 1, 2, 3";  // 例となるテキスト
let pattern = /\d+/g;           // 1個以上の数字列にすべてマッチ
pattern.test(text)              // true: マッチする部分が存在する
text.search(pattern)            // 9: 最初にマッチした文字の位置
text.match(pattern)             // ["1", "2", "3"]: すべてのマッチを含む配列
text.replace(pattern, "#")      // "testing: #, #, #"
text.split(/\D+/)               // ["","1","2","3"]: 数字以外の文字で配列に分割


//////////////////////////////////////////////////////////////////////////////////////
// 3.4 論理値
//////////////////////////////////////////////////////////////////////////////////////

// 論理値は真か偽か、オンかオフか、はいかいいえかなどの値を表すもの
// 論理値型が取りうる値は2つしかない
// これらは true と false という予約語で表現する

// JavaScriptプログラムで論理値がよく使われるのは比較の返す値としてである
// この式は変数aの値が数値4に等しいかどうか調べる
// 等しい場合、この比較の結果は論理値の true となる
// 等しくない場合 false となる

a === 4


// 論理値はJavaScriptの制御構造でよく使われる
// 例えばJavaScriptの if / else 文では論理値が true のときにある操作を実行し、
// 論理値が false のときに別の操作を実行することが可能
// 論理値を生成する比較式と組み合わせて使うのが一般的である

// このコードはまずaが4に等しいか調べる
// 等しい場合、bに1加える
// 等しくない場合、aに1加える
if (a === 4) {
    b = b + 1;
} else {
    a = a + 1;
}

// JavaScriptの値はすべて論理値に変換できる
// 以下の値は false に変換されるため false と記述したときと同じ動作をする
undefined
null
0
-0
NaN
""          // 空文字列

// この他の値はすべてオブジェクト（配列）を含めて true で変換され true と記述したのと同じになる
// まとめるとJavaScriptが論理値を必要とする場面で false に変換される値は false と同じ意味になる
// また true に変換される値は true と同じ意味になる

// 次の例は変数oにはオブジェクトかnull値が格納されているとすると
// oがnullではにことはif文を使って明示的にテストができる
// 非同値演算子（!==）はoとnullを比較して true または false に評価する
if(o !== null){
    // 処理
}

// nullは falseに変換されオブジェクトは true に変換されるという規則を使えば次のように比較し省略できる
// 最初に書いた文ではif文の本体はoがnull以外の場合のみ実行される
// これに対して次の文は少し条件が緩くなる
// oが false でないか、 false に変換されるような値（nullやundefinedなど）でない場合にif文の本体が実行される
// どちらかのif文が適切かはoに代入されることになる値による
// null値であるかどうかを0や""であるかと区別する必要がある場合は明示的に比較をする必要がある
if(o){
    // 処理
}

// 論理値にはtoString()メソッドがある
// このメソッドを使えば論理値を文字列（"true", "false"）に変換可能
// このほかにはあまり便利なメソッドはない
// ただし重要な論理演算子が3つ用意されている

// &&演算子は論理AND演算を行う
// 両方のオペランドがtrueに変換されている値の場合にのみ true と評価する
// それ以外は false
// ||演算子は論理OR演算を行う
// どちらかのオペランドが true に変換される値であれば true と評価する
// 両方のオペランドが false に変換される値であれば false と評価する
// 3つ目の演算子は単項!演算子で論理NOT演算を行う
// オペランドが false に変換される値であれば true と評価する
// 逆にオペランドが true に変換される値であれば false と評価する

if ((x === 0 && y === 0) || !(z === 0)) {
    // xとyの両者が0か、zが0以外の場合
}


//////////////////////////////////////////////////////////////////////////////////////
// 3.5 nullとundefined
//////////////////////////////////////////////////////////////////////////////////////

// JavaScript言語のキーワードのnullは値が存在しないことを表す特殊な値
// nullに対してtypeof演算子を使うとobjectという文字列が返される
// つまりnullは「オブジェクトが存在しない」ということを表す特別なオブジェクト値として見なされる
// しかし、実際はnullはnullというオブジェクト型の唯一なメンバーと見なされており、
// オブジェクトだけでなく数値や文字列に対しても「値がない」ことを示すために使われる
// ほとんどのプログラム言語にはJavaScriptのnullに相当するものが用意されている
// Null nil None など

// JavaScriptには値がないことを表す値がもう1つあり、未定義（undefined）値
// 「値が存在しないこと」を表す
// 初期化されていない変数の値や、存在しないオブジェクトプロパティや配列の要素を読みだしたときの値がundefined
// 戻り値のない関数が返す値もundefined
// undefinedはあらかじめ定義されたグローバル定義
// なおnullとは異なり予約語ではないが、実際に大きな違いはない
// undefined値に対してtypeof演算子を使うと、未定義を表す「undefined」が返される

// このような違いがあるにも関わらず、nullとundefinedは両者とも値がないことを表すので同一のものとして扱うことができる
// 等値演算子==は両者等しいと判定する（両者を区別したいときは同値演算子===を使用すること）
// 両者ともfalseに変換される値である
// 論理値が必要な場合ではfalseと同じように扱われる
// nullもundefinedもプロパティやメソッドを持っていない
// 実際に.や[]を使ってプロパティやメソッドにアクセスしようとするとTypeErrorが発生する

// undefinedはシステムレベルで予期せぬある意味エラーのような場合を表すもので
// nullはプログラムレベルで予定通りに値がない場合を表すものと考える
// 可能な限りnullやundefinedを使わないようにするが、変数やプロパティへ代入や、
// 関数へ引数として渡すとき、関数から戻り値として返すとき、どちらかを使う必要がある場合にnullを使うようにしている
// プログラマによってはこれは反対にnullを使わないようにしてundefinedを使う人もいる


//////////////////////////////////////////////////////////////////////////////////////
// 3.6 Symbol
//////////////////////////////////////////////////////////////////////////////////////

// Symbolは文字列ではないプロパティ名としてES6から導入された
// Symbolを理解するにはJavaScriptの基本的なオブジェクトがどういうものかを理解する必要がある
// JavaScriptの基本的なオブジェクトは順序のないプロパティを集めたもので、各プロパティは名前と値を持つ
// プロパティ名は一般的には文字列（ES6より前までは文字列のみであった）
// ES6以降ではSymbolが利用可能

let strname = "string name";        // プロパティ名として使う文字列
let symname = Symbol("propname");   // プロパティ名として使うSymbol
typeof strname                      // "string": strname は文字列型
typeof symname                      // "symbol": symname はSymbol型
let o = {};                         // 新しいオブジェクトを生成する
o[strname] = 1;                     // 文字列名を使ってプロパティを定義する
o[symname] = 2;                     // Symbol名を使ってプロパティを定義する
o[strname]                          // 1: 文字列名のプロパティにアクセスする
o[symname]                          // 2: Symbol名のプロパティにアクセスする

// Symbol型にはリテラル構文がない
// Symbol値を得るにはSymbol()関数を使う
// この関数は同じ値を二度返すことはない
// 同じ引数を渡した場合でも、同じ値は返されない
// つまりSymbol()関数を呼び出してSymbol値を得るようにすれば、
// オブジェクトに対して新しいプロパティを追加するときにこのSymbol値をプロパティ名として安全に使うことができる
// 同じプロパティ名で既存のプロパティを上書きする心配がないためである
// 同じようにSymbol値のプロパティ名を使っていればこのSymbolを共有しない限り、
// プログラム中のほかのモジュールが誤ってプロパティを上書きすることがなくなる


function js3_1() {

}