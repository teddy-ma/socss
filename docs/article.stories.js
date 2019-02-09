import { storiesOf } from '@storybook/html';

const stories = storiesOf('Article', module);

stories.add('post', () => {
  return `
  <article>
  <h1>Markdown 语法说明 (简体中文版)</h1>
  截取自 <a href="https://www.appinn.com/markdown/">https://www.appinn.com/markdown/</a>
  <h2>区块元素</h2>
  
  <h3>段落和换行</h3>
  
  <p>一个 Markdown 段落是由一个或多个连续的文本行组成，它的前后要有一个以上的空行（空行的定义是显示上看起来像是空的，便会被视为空行。比方说，若某一行只包含空格和制表符，则该行也会被视为空行）。普通段落不该用空格或制表符来缩进。</p>
  
  <p>「由一个或多个连续的文本行组成」这句话其实暗示了 Markdown 允许段落内的强迫换行（插入换行符），这个特性和其他大部分的 text-to-HTML 格式不一样（包括 Movable Type 的「Convert Line Breaks」选项），其它的格式会把每个换行符都转成 <code>&lt;br /&gt;</code> 标签。</p>
  
  <p>如果你<em>确实</em>想要依赖 Markdown 来插入 <code>&lt;br /&gt;</code> 标签的话，在插入处先按入两个以上的空格然后回车。</p>
  
  <p>的确，需要多费点事（多加空格）来产生 <code>&lt;br /&gt;</code> ，但是简单地「每个换行都转换为 <code>&lt;br /&gt;</code>」的方法在 Markdown 中并不适合， Markdown 中 email 式的 <a href="#blockquote">区块引用</a> 和多段落的 <a href="#list">列表</a> 在使用换行来排版的时候，不但更好用，还更方便阅读。</p>
  
  <h3>标题</h3>
  
  <p>Markdown 支持两种标题的语法，类 <a href="http://docutils.sourceforge.net/mirror/setext.html">Setext</a> 和类 <a href="http://www.aaronsw.com/2002/atx/">atx</a> 形式。</p>
  
  <p>类 Setext 形式是用底线的形式，利用 <code>=</code> （最高阶标题）和 <code>-</code> （第二阶标题），例如：</p>
  
  <pre>
<code>This is an H1
=============

This is an H2
-------------
</code>
  </pre>
  
<h3>区块引用 Blockquotes</h3>

<p>Markdown 标记区块引用是使用类似 email 中用 <code>&gt;</code> 的引用方式。如果你还熟悉在 email 信件中的引言部分，你就知道怎么在 Markdown 文件中建立一个区块引用，那会看起来像是你自己先断好行，然后在每行的最前面加上 <code>&gt;</code> ：</p>

  <pre>
<code>&gt; This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
&gt; consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
&gt; Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
&gt; 
&gt; Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
&gt; id sem consectetuer libero luctus adipiscing.
</code>
  </pre>
  
  <p>Markdown 也允许你偷懒只在整个段落的第一行最前面加上 <code>&gt;</code> ：</p>
  
  <pre>
<code>&gt; This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

&gt; Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.
</code>
  </pre>
  
  <p>区块引用可以嵌套（例如：引用内的引用），只要根据层次加上不同数量的 <code>&gt;</code> ：</p>
  
  <pre>
<code>&gt; This is the first level of quoting.
&gt;
&gt; &gt; This is nested blockquote.
&gt;
&gt; Back to the first level.
</code>
  </pre>
  
  <p>引用的区块内也可以使用其他的 Markdown 语法，包括标题、列表、代码区块等：</p>
  
  <pre>
<code>&gt; ## 这是一个标题。
&gt; 
&gt; 1.   这是第一行列表项。
&gt; 2.   这是第二行列表项。
&gt; 
&gt; 给出一些例子代码：
&gt; 
&gt;     return shell_exec("echo $input | $markdown_script");
</code>
  </pre>
  
  <p>任何像样的文本编辑器都能轻松地建立 email 型的引用。例如在 BBEdit 中，你可以选取文字后然后从选单中选择<em>增加引用阶层</em>。</p>
  
  <h3>列表</h3>
  
  <p>Markdown 支持有序列表和无序列表。</p>
  
  <p>无序列表使用星号、加号或是减号作为列表标记：</p>
  
  <pre>
<code>*   Red
*   Green
*   Blue
</code>
  </pre>
  
  <p>等同于：</p>
  
  <pre>
<code>+   Red
+   Green
+   Blue
</code></pre>

<p>也等同于：</p>

<pre>
<code>-   Red
-   Green
-   Blue
</code>
</pre>

<p>有序列表则使用数字接着一个英文句点：</p>

<pre>
<code>1.  Bird
2.  McHale
3.  Parish
</code>
  </pre>
  
  <p>很重要的一点是，你在列表标记上使用的数字并不会影响输出的 HTML 结果，上面的列表所产生的 HTML 标记为：</p>
  
  <pre>
<code>&lt;ol&gt;
&lt;li&gt;Bird&lt;/li&gt;
&lt;li&gt;McHale&lt;/li&gt;
&lt;li&gt;Parish&lt;/li&gt;
&lt;/ol&gt;
</code>
  </pre>
  
  <p>如果你的列表标记写成：</p>
  
  <pre>
<code>1.  Bird
1.  McHale
1.  Parish
</code>
  </pre>
  
  <p>或甚至是：</p>
  
  <pre>
<code>3. Bird
1. McHale
8. Parish
</code>
  </pre>
  
  <p>你都会得到完全相同的 HTML 输出。重点在于，你可以让 Markdown 文件的列表数字和输出的结果相同，或是你懒一点，你可以完全不用在意数字的正确性。</p>
  
  <p>如果你使用懒惰的写法，建议第一个项目最好还是从 1. 开始，因为 Markdown 未来可能会支持有序列表的 start 属性。</p>
  
  <p>列表项目标记通常是放在最左边，但是其实也可以缩进，最多 3 个空格，项目标记后面则一定要接着至少一个空格或制表符。</p>
  
  <p>要让列表看起来更漂亮，你可以把内容用固定的缩进整理好：</p>
  
  <pre>
<code>*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
    viverra nec, fringilla in, laoreet vitae, risus.
*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
    Suspendisse id sem consectetuer libero luctus adipiscing.
</code>
  </pre>
  
  <p>但是如果你懒，那也行：</p>
  
  <pre>
<code>*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
viverra nec, fringilla in, laoreet vitae, risus.
*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
Suspendisse id sem consectetuer libero luctus adipiscing.
</code>
  </pre>
  
  <p>如果列表项目间用空行分开，在输出 HTML 时 Markdown 就会将项目内容用 <code>&lt;p&gt;</code> 
  标签包起来，举例来说：</p>
  
  <pre>
<code>*   Bird
*   Magic
</code></pre>

<p>会被转换为：</p>

  <pre>
<code>&lt;ul&gt;
&lt;li&gt;Bird&lt;/li&gt;
&lt;li&gt;Magic&lt;/li&gt;
&lt;/ul&gt;
</code>
  </pre>
  
  <p>但是这个：</p>
  
  <pre>
<code>*   Bird

*   Magic
</code></pre>

<p>会被转换为：</p>

  <pre>
<code>&lt;ul&gt;
&lt;li&gt;&lt;p&gt;Bird&lt;/p&gt;&lt;/li&gt;
&lt;li&gt;&lt;p&gt;Magic&lt;/p&gt;&lt;/li&gt;
&lt;/ul&gt;
</code>
  </pre>
  
  <p>列表项目可以包含多个段落，每个项目下的段落都必须缩进 4 个空格或是 1 个制表符：</p>
  
  <pre>
<code>1.  This is a list item with two paragraphs. Lorem ipsum dolor
sit amet, consectetuer adipiscing elit. Aliquam hendrerit
mi posuere lectus.

Vestibulum enim wisi, viverra nec, fringilla in, laoreet
vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
sit amet velit.

2.  Suspendisse id sem consectetuer libero luctus adipiscing.
</code>
  </pre>
  
  <p>如果你每行都有缩进，看起来会看好很多，当然，再次地，如果你很懒惰，Markdown 也允许：</p>
  
  <pre>
<code>*   This is a list item with two paragraphs.

    This is the second paragraph in the list item. You're
only required to indent the first line. Lorem ipsum dolor
sit amet, consectetuer adipiscing elit.

*   Another item in the same list.
</code>
  </pre>
  
  <p>如果要在列表项目内放进引用，那 <code>&gt;</code> 就需要缩进：</p>
  
  <pre>
<code>*   A list item with a blockquote:
&gt; This is a blockquote
&gt; inside a list item.
</code>
  </pre>
  
  <p>如果要放代码区块的话，该区块就需要缩进<em>两次</em>，也就是 8 个空格或是 2 个制表符：</p>
  
  <pre>
<code>*   一列表项包含一个列表区块：

        &lt;代码写在这&gt;
</code>
  </pre>
  
  <p>当然，项目列表很可能会不小心产生，像是下面这样的写法：</p>
  
  <pre>
<code>1986. What a great season.
</code>
  </pre>
  
  <p>换句话说，也就是在行首出现<em>数字-句点-空白</em>，要避免这样的状况，你可以在句点前面加上反斜杠。</p>
  
  <pre>
<code>1986\. What a great season.
</code>
  </pre>
  
 
  <hr />
  
  <h2>区段元素</h2>
  
  <h3>链接</h3>
  
  <p>Markdown 支持两种形式的链接语法： <em>行内式</em>和<em>参考式</em>两种形式。</p>
  
  <p>不管是哪一种，链接文字都是用 [方括号] 来标记。</p>
  
  <p>要建立一个<em>行内式</em>的链接，只要在方块括号后面紧接着圆括号并插入网址链接即可，如果你还想要加上链接的 title 文字，只要在网址后面，用双引号把 title 文字包起来即可，例如：</p>
  
  <pre>
<code>This is [an example](http://example.com/ "Title") inline link.

[This link](http://example.net/) has no title attribute.
</code>
  </pre>
  
  <p>会产生：</p>
  
  <pre>
<code>&lt;p&gt;This is &lt;a href="http://example.com/" title="Title"&gt;
an example&lt;/a&gt; inline link.&lt;/p&gt;

&lt;p&gt;&lt;a href="http://example.net/"&gt;This link&lt;/a&gt; has no
title attribute.&lt;/p&gt;
</code>
  </pre>
  
  <p>如果你是要链接到同样主机的资源，你可以使用相对路径：</p>
  
  <pre>
<code>See my [About](/about/) page for details.
</code>
  </pre>
  
  <p><em>参考式</em>的链接是在链接文字的括号后面再接上另一个方括号，而在第二个方括号里面要填入用以辨识链接的标记：</p>
  
  <pre>
<code>This is [an example][id] reference-style link.
</code>
  </pre>
  
  <p>你也可以选择性地在两个方括号中间加上一个空格：</p>
  
  <pre>
<code>This is [an example] [id] reference-style link.
</code>
  </pre>
  
  <p>接着，在文件的任意处，你可以把这个标记的链接内容定义出来：</p>
  
  <pre>
<code>[id]: http://example.com/  "Optional Title Here"
</code>
  </pre>
  
  <p>链接内容定义的形式为：</p>
  
  <ul>
  <li>方括号（前面可以选择性地加上至多三个空格来缩进），里面输入链接文字</li>
  <li>接着一个冒号</li>
  <li>接着一个以上的空格或制表符</li>
  <li>接着链接的网址</li>
  <li>选择性地接着 title 内容，可以用单引号、双引号或是括弧包着</li>
  </ul>
  
  <p>下面这三种链接的定义都是相同：</p>
  
  <pre>
<code>[foo]: http://example.com/  "Optional Title Here"
[foo]: http://example.com/  'Optional Title Here'
[foo]: http://example.com/  (Optional Title Here)
</code>
  </pre>
  
  <p><strong>请注意：</strong>有一个已知的问题是 Markdown.pl 1.0.1 会忽略单引号包起来的链接 title。</p>
  
  <p>链接网址也可以用方括号包起来：</p>
  
  <pre>
<code>[id]: &lt;http://example.com/&gt;  "Optional Title Here"
</code>
  </pre>
  
  <p>你也可以把 title 属性放到下一行，也可以加一些缩进，若网址太长的话，这样会比较好看：</p>
  
  <pre>
<code>[id]: http://example.com/longish/path/to/resource/here
    "Optional Title Here"
</code>
  </pre>
  
  <p>网址定义只有在产生链接的时候用到，并不会直接出现在文件之中。</p>
  
  <p>链接辨别标签可以有字母、数字、空白和标点符号，但是并<em>不</em>区分大小写，因此下面两个链接是一样的：</p>
  
  <pre>
<code>[link text][a]
[link text][A]
</code>
  </pre>
  
  <p><em>隐式链接标记</em>功能让你可以省略指定链接标记，这种情形下，链接标记会视为等同于链接文字，要用隐式链接标记只要在链接文字后面加上一个空的方括号，如果你要让 "Google" 链接到 google.com，你可以简化成：</p>
  
  <pre>
<code>[Google][]
</code>
  </pre>
  
  <p>然后定义链接内容：</p>
  
  <pre>
<code>[Google]: http://google.com/
</code>
  </pre>
  
  <p>由于链接文字可能包含空白，所以这种简化型的标记内也许包含多个单词：</p>
  
  <pre>
<code>Visit [Daring Fireball][] for more information.
</code>
  </pre>
  
  <p>然后接着定义链接：</p>
  
  <pre>
<code>[Daring Fireball]: http://daringfireball.net/
</code>
  </pre>
  
  <p>链接的定义可以放在文件中的任何一个地方，我比较偏好直接放在链接出现段落的后面，你也可以把它放在文件最后面，就像是注解一样。</p>
  
  <p>下面是一个参考式链接的范例：</p>
  
  <pre>
<code>I get 10 times more traffic from [Google] [1] than from
[Yahoo] [2] or [MSN] [3].

[1]: http://google.com/        "Google"
[2]: http://search.yahoo.com/  "Yahoo Search"
[3]: http://search.msn.com/    "MSN Search"
</code>
  </pre>
  
  <p>如果改成用链接名称的方式写：</p>
  
  <pre>
<code>I get 10 times more traffic from [Google][] than from
[Yahoo][] or [MSN][].

[google]: http://google.com/        "Google"
[yahoo]:  http://search.yahoo.com/  "Yahoo Search"
[msn]:    http://search.msn.com/    "MSN Search"
</code>
  </pre>
  
  <p>上面两种写法都会产生下面的 HTML。</p>
  
  <pre>
<code>&lt;p&gt;I get 10 times more traffic from &lt;a href="http://google.com/"
title="Google"&gt;Google&lt;/a&gt; than from
&lt;a href="http://search.yahoo.com/" title="Yahoo Search"&gt;Yahoo&lt;/a&gt;
or &lt;a href="http://search.msn.com/" title="MSN Search"&gt;MSN&lt;/a&gt;.&lt;/p&gt;
</code>
  </pre>
  
  <p>下面是用行内式写的同样一段内容的 Markdown 文件，提供作为比较之用：</p>
  
  <pre>
<code>I get 10 times more traffic from [Google](http://google.com/ "Google")
than from [Yahoo](http://search.yahoo.com/ "Yahoo Search") or
[MSN](http://search.msn.com/ "MSN Search").
</code>
  </pre>
  
  <p>参考式的链接其实重点不在于它比较好写，而是它比较好读，比较一下上面的范例，使用参考式的文章本身只有 81 个字符，但是用行内形式的却会增加到 176 个字元，如果是用纯 HTML 格式来写，会有 234 个字元，在 HTML 格式中，标签比文本还要多。</p>
  
  <p>使用 Markdown 的参考式链接，可以让文件更像是浏览器最后产生的结果，让你可以把一些标记相关的元数据移到段落文字之外，你就可以增加链接而不让文章的阅读感觉被打断。</p>
  
  <h3>强调</h3>
  
  <p>Markdown 使用星号（<code>*</code>）和底线（<code>_</code>）作为标记强调字词的符号，被 <code>*</code> 或 <code>_</code> 包围的字词会被转成用 <code>&lt;em&gt;</code> 标签包围，用两个 <code>*</code> 或 <code>_</code> 包起来的话，则会被转成 <code>&lt;strong&gt;</code>，例如：</p>
  
  <pre>
<code>*single asterisks*

_single underscores_

**double asterisks**

__double underscores__
</code>
  </pre>
  
  <p>会转成：</p>
  
  <pre>
<code>&lt;em&gt;single asterisks&lt;/em&gt;

&lt;em&gt;single underscores&lt;/em&gt;

&lt;strong&gt;double asterisks&lt;/strong&gt;

&lt;strong&gt;double underscores&lt;/strong&gt;
</code>
  </pre>
  
  <p>你可以随便用你喜欢的样式，唯一的限制是，你用什么符号开启标签，就要用什么符号结束。</p>
  
  <p>强调也可以直接插在文字中间：</p>
  
  <pre>
<code>un*frigging*believable
</code>
  </pre>
  
  <p>但是<strong>如果你的 <code>*</code> 和 <code>_</code> 两边都有空白的话，它们就只会被当成普通的符号</strong>。</p>
  
  <p>如果要在文字前后直接插入普通的星号或底线，你可以用反斜线：</p>
  
  <pre>
<code>\*this text is surrounded by literal asterisks\*
</code>
  </pre>
  
  <h3 id="img">图片</h3>
  
  <p>很明显地，要在纯文字应用中设计一个「自然」的语法来插入图片是有一定难度的。</p>
  
  <p>Markdown 使用一种和链接很相似的语法来标记图片，同样也允许两种样式： <em>行内式</em>和<em>参考式</em>。</p>
  
  <p>行内式的图片语法看起来像是：</p>
  
  <pre>
<code>![Alt text](/path/to/img.jpg)

![Alt text](/path/to/img.jpg "Optional title")
</code>
  </pre>
  
  <p>详细叙述如下：</p>
  
  <ul>
  <li>一个惊叹号 <code>!</code></li>
  <li>接着一个方括号，里面放上图片的替代文字</li>
  <li>接着一个普通括号，里面放上图片的网址，最后还可以用引号包住并加上
  选择性的 'title' 文字。</li>
  </ul>
  
  <p>参考式的图片语法则长得像这样：</p>
  
  <pre>
<code>![Alt text][id]
</code>
  </pre>
  
  <p>「id」是图片参考的名称，图片参考的定义方式则和连结参考一样：</p>
  
  <pre>
<code>[id]: url/to/image  "Optional title attribute"
</code>
  </pre>
  
  <p>到目前为止， Markdown 还没有办法指定图片的宽高，如果你需要的话，你可以使用普通的 <code>&lt;img&gt;</code> 标签。</p>
  
  <hr />
    
  </article>
  `;
});

