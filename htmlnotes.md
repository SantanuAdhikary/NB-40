# HTML 

**what is html ?**

* html stands for *Hypertext Markup language*
* it is used for creating the structure of webpage.
* the structure we want to create for that we have many tags in html.

**what is hypertext**

* any text that contains link of any other webpage, is called as hypertext.

**why it is called as markup language**

* because by using html we are not writing any logics, only we are creating the structure.


### tags 

* tag is predefined word enclosed with angular braces.

* in html we have two types of tags.

                    tag

   paired tag                unpaired / self-closing tag


**paired tag**

* any tag that having both opening tag and closing tag is called as `paired tag`.
  
   eg:   <h1> welcome to html session   </h1>

   *syntax*
            <tagname>   </tagname>


**unpaired tag**
   
   * any tag that have only the opening tag , there is no closing tag is called as `unpaired tag`.

   *syntax:*
                 <tagname>
  
   *eg:*       <br>,<hr>,<img>,<meta>


### structure of HTML code

```html

<!DOCTYPE html>
<html >
    <head>
    
        <title> </title>
    </head>
    <body>
        
    </body>
</html>

```


<!DOCTYPE html> 
 
   * it is used to tell the browser which version of html we are using.

   * currenly we are using html version 5.


<html> </html>
   
 *  it is the root tag of html structure.
 * all the content should be inside this root tag.


<head> </head>

  * it is used to provide the meta information.

<title> <title>

  * it is used to give the name of the tab.

<body> </body>
 
  * the content we want to display in the browser, everything should be written inside this tag.



### Heading tags

* in html for providing headlines (heading/subheading) we need heading tags.

* there are 6 heading tags in html.

* <h1> </h1> to <h6> </h6>
* heading tags are `paired tag`.
* heading tags are *block level element*.


eg: 

```html


  <body>

            <h1> this is heading 1 </h1>
            <h2> this is heading 2 </h2>
            <h3> this is heading 3 </h3>
            <h4> this is heading 4 </h4>
            <h5> this is heading 5 </h5>
            <h6> this is heading 6 </h6>

 </body>
   
```

*note*  
 * <h1> </h1> tag is the biggest and <h6></h6> tag is the smallest.

 * the default size of <h1></h1> tag is `32 px`.


### paragraph tag

* in html if we want to write any text content, that should be written by using *paragraph tag*.

* `paragraph tag` is denoted by <p> </p>.

* this is `paired tag`.

* it is `block level element`.

* default size of <p></p> tag is 16px.


### formatting tags

* it is used to change the appearance / format of the text content.

*example*

**<b> </b>**
       this is used to make the content bold.

**<strong></strong>**
       it is also used to make the content bold but 
       this tag having **higher priority** compare to <b></b> tag.

**<i></i>**
      it is used to make the content italic.

**<em></em>**
      this tag is used to make the content italic same like <i></i> tag.

**<u></u>**
     this tag is used to provide underline for the text.

**<ins></ins>**
     it is also used to provide underline for the text.

**<mark></mark>**
     it is used to provide highlight for the text.

**<sup></sup>**
     it is used to write any content to the power.

**<sub></sub>**
     it is used to write the content in the base.

**<q></q>**
     it is used to provide double qoutes around the text.
     
**<pre></pre>**
    it is pre-formatted tag, inside this tag how we will write the content it will display as it is.

**<del></del>**
    it is used to give strike through the text.


--------------------------------------------------------

**<br>**
  
  *   this tag is used to break the line.
  *   it helps to move the content in the next line.
  *   it is unpaired tag.

**<hr>**
  
   * it is used to provide horizontal line. 
  *   it is unpaired tag.



### Elements 

* element is combination of tags and the content inside the tag.

*types of Elements*

 * we have 3 types of elements in html.

 * 1. **Block Level Element** 
 * 2. **Inline Level Element** 
 * 3. **Inline Block Level Element** 


 **Block Level Element**

 * these elements will be taking full width of its parent and all of them will be displayed in next line.

 * we can provide *height and width* for these elements.

 eg:  heading tags, <p></p> , <div></div>


**Inline Level Element**

* these elements will be displaying in the same line. 

* we *can't provide height and width* for these.

* it is occupying the content area.


eg: <b></b>,<i></i>,<u></u>,<span></span>


**inline block level Element**

 * it is the combination of `inline and block level element`.

 * these elements will *display in same line but we can provide height and width*.

 eg:  <button></button>, <input></input>,<img>



 ### Attribute

 *  Attributes are used to provide additional information to the tags.

 * attributes should be written in the opening tags.

 *syntax*

   <tagname  attributename="value" > </tagname>


### <img> tag 

* it is used to add the image in the webpage.

* in this tag we have 4 attributes.

*src* : 
     it is used to provide the path of the image.

*alt* : 
     
     it is used to provide alternate message.

     if the image is not displaying, that time this alt message will display on the page.

*height , width :*
     
  used for resizing the image.


*  <img> tag is self-closing / unpaired tag.

* it is one *inline-block* level element.

### <marquee></marquee> tag

* it is used to make any content scrollable on the webpage.

* by default the content will scroll from right to left side.

*attributes of marquee tag*

**scrollamount**
    
* it is used to determine the speed of the scrolling content.

* by default value is `6`.

**direction**

* it is used to determine the direction of the scrolling content.

* value :=> `left`, `right`, `up`, `down`

**behavior**

* it is used to determine how the scrolling content will behave.

* value => `scroll` , `slide` , `alternate`

**loop**

* it determines how many times the content should scroll.

**height width**

* used to resize the marquee tag area.


### List 

* list is used to group the related elements together.

* in html we have 3 types of lists.

* *Ordered List*
  *Unordered List*
  *Description List*


**Ordered List**

 * ordered list is used to group and arrange the elements in particular order.

 * for creating this we need <ol></ol> tag.

 * inside <ol></ol> tag for writing the items we need <li> </li> tag.

 * these tags are *block level* element. 

 **attributes in <ol></ol> tag**

 *type* 
     this attribute is used to change the list-style.

     values are => 1 , a , A , i , I

     by default it takes number(1).

  *start*
     
     this is used to specify the starting value of the list-style.

   *reversed*
      
       it is used to display the list-style in reverse order.

*example*

  ```html

    <ol type="1" start="50" reversed>
       <li> java </li>
       <li> python </li>
       <li> js </li>
    </ol>

    <!-- output : 
      50. java 
      49. python
      48. js -->
  ```


  **Unordered List**

 * unordered list is created by using <ul></ul> tag. 

 * here we are grouping the elements together, but they are not arranged in specific order.

 * inside <ul></ul> tag for writing the items we need <li></li> tag.

 * by default it display the list-style as disc or bullet point.

 * here we can provide only *type* attribute.

 * we can give `disc`, `square` , `circle`, `none` as value of *type* attribute.

 *example*

 ```html
             <ul type="circle">
                 <li>sql</li>
                 <li>webtech</li>
                 <li>ad. java</li>    
             </ul>
 ```

 **Description List**

   * for creating description list we need <dl></dl> tag.

   * inside that we have to use <dt></dt> and <dd> </dd> tag.

  * <dt></dt> tag is used to provide the description term.

  * <dd></dd> tag is used to provide description definition for that term.


*example*

```html

      <dl>
          <dt> HTML </dt>
          <dd> Hypertext Markup Language </dd>
      </dl>
```
output: 

   HTML
      Hypertext Markup Language 


### <audio> </audio> tag

* this tag is used to add audio / music in our webpage.

**attributes**

*src* 
      it is used to provide the path of the audio

*controls*
    
    if we give this attribute then only audio will be visible in webpage and we can control (play,pause,skip) the audio.

*autoplay*
      
      for this attribute music will start automatically
      whenever our page will be loading.

*muted*
     
     it makes the audio mute.

*loop*
      
      this attribute helps to play the audio infinite time in a loop.


### <video> </video> tag
 
 * this tag is used to display the video on the webpage.

 **attributes**

 *src, controls, loop, autoplay, muted* these attributes are same like <audio></audio> tag.

 *poster*
      
      this attribute is used to provide image / thumbnail
      for the video.

      in this attribute we have to provide the path of the image.

  *height , width*
      
      used for resizing of the video.


### <iframe> </iframe> tag 

*  <iframe> </iframe> tag is used to add different webpage in our current webpage.

* it is *inline block level* element.

**attributes**

*src* 
     in this attribute we have to provide the path of the webpage we want to add in our webpage.

*frameborder*
     
     it is used to provide outline/border around the content.

     by default value is 0.

*height width*
    
    used to provide the size of the content.



### anchor tag

* anchor tag is denoted by <a></a> tag.

* it is used to create hyperlink.

* it is `inline level` element.

**attributes**

  *href* 
        it is used to take the path where we want to navigate.

        it helps to navigate / re-direct from one page to another page or in the same page one section to another section.

 *target*
    
* by default if we click any hyperlink it opens in the same tab, if we want to open in the different tab we need `target` attribute.

*target="_blank"* is used to open in the next tab.

*title*
    when we hover(keeping mouse cursor on the element) then `title` attribute helps to display some message.


*example*

```html

 <a href="https://instagram.com/santanuadhikary673" target="_blank" title="my insta"> go to my profile </a>

```

**how to navigate in the same page**

*step 1*
     in which tag we want to navigate there we have to give `id` attiribute.

*step 2*
      
 which value we are giving for the id attribute, that same value we have to provide in the `href` attribute with `#` symbol.

 *example*

 ```html
       
       <a href="#myself">about me</a>
       <a href="#projects">about my project</a>
       <a href="#education">my eduction</a>

       <h3 id="myself"> about me </h3>
       <p> large para is there</p>

       <h3 id="projects"> about project </h3>
       <p> large para is there</p>

       <h3 id="education"> my education </h3>
       <p> large para is there</p>
 ```


 ### Table in HTML

 * table is combination of rows and columns.

 * for creating table in html, we need <table></table> tag.

 * inside table if we want to create row, we need <tr></tr> tag.

 * inside row for giving data we need <td></td> tag.

 * for providing heading data in table we need <th></th> tag.

 * for giving the caption/name/title of the table we need <caption></caption> tag.

 **attributes in <table></table> tag**

 *1. border*
          it is used to provide border/outline around the total table.

 *2. height,width*
          used to resize the table length.

 *3 cellspacing*
           it is used to provide the space between the cells.
 
 *4. cellpadding*
           it is used to provide space inside the cell between the content and border.


**attribute for <td></td> and <th></th>**

*rowspan*
     this attribute is used to combine two or more than two rows.

*colspan* 
    this is used to combine two or more than two columns.


*note*
    we have some extra tags in table like 
    <thead></thead>,
    <tbody></tbody>, 
    <tfoot></tfoot>


### <div></div> tag

* it is one block level element used to make division.

* inside this tag we can write inline / block and inline-block level elements.

* we can provide height and width.

### <span> </span> tag

* it is one `inline level` element, used to select some part of block level element.

* we can't provide height and width.


# CSS

## Introduction of CSS

* CSS stands for `Cascading Style Sheets`.
* it is used to style and arrange the elements in the webpage.

* by using html we can create only the structure of the webpage after that if we want to style we need css.

**how many ways we can write css**

* we can write css in 3 ways. 

1. *inline css*
2. *internal css*
3. *external css*

**inline css**
 
* it is the process of writing css inside the html tags.
* for this we need *style* attribute.

eg: 
```html
          <h1 style="color:red">welcome to css </h1>
```

**internal css**

* it is the process of writing the css in the same html file.

* for this we need <style></style> tag.

* <style></style> tag should be placed inside        <head></head> tag.

*example*

```html

     <head>
         
          <style>
                  h2{
                     color:green;
                  }
          </style>

      </head>
          
```

**external css**

* here first we have to create separate css file and that should be linked with the html file.

* the css file extension will be  filename.css

* <link> tag is used to connect the html and css file.

* it should be written inside <head></head> tag.


*example*

  <link rel="stylesheet" href="path of css file">


**Note**

 *inline css* having the **higher Priority**.

 *internal* and *external css* having the **same priority** , which one we are writing at the end will be applied.


## Font Property

* font properties are used to change the appreance of the text content.

 **properies name**

 *1. font-size* : used to change the size of the font.

 *2. font-weight* : used to make the font bold or lighter.
                    here we can give number also as value (100 - 900)

*3. font-style* : 
                it is used to change the style of the font.

*4. font-family* : 
                 it is used to change the font family of the text.


*example*

```css
       p{
                font-size: 25px;
                font-weight: bold;
                font-style: italic;
                font-family: sans-serif;
          }
```

## Selectors 

 * Selectors are used to select the html elements to provide css/styling.

 *syntax*

     selectorname
     {
          // css property
     }


* in CSS we have 5 types of Selectors.

1. Simple Selector
2. Combinator Selector 
3. Pseudo Class Selector
4. Pseudo Element Selector
5. Attribute Selector

### 1. Simple Selector 

 * in Simple Selector we have 5 types.

  i. tagname selector
 ii. id selector
iii. class selector
 iv. universal selector
  v. group selector

**i. tagname selector**
   
* here we are targetting the elements by the name of tag.

* it targets all the elements having the same tag name.

**ii. id selector**
   
   * it is used to target any element individually.

   * id value should be unique.

   * we have to use `#` symbol to target by the id.

 **iii. class selector**

 * when we want to apply same css to more than one element we can give same class attribute to all of them.

 * in css we have to use `.` symbol for target the elments by the class name.

 **iv. universal selector**

 * it is used to target all the elements that is written in the html document.

 * in css we have to use `*` symbol for this.

 **v. group selector**

 * it is used to target more than one elements without providing any extra attribute.

 * for this we have to use `,` symbol.

 *example*

 ```html

    <h1> first heading 1 </h1>
    <h1> second heading 1 </h1>

    <p id="para1"> para 1</p>
    <p> para 2</p>

    <h2 class="dark"> this is heading 2 </h2>
    <h3 class="dark"> this is heading 2 </h3>
    <h4 class="dark"> this is heading 2 </h4>
 ```

 ```css
 
  /* 1. tagname selector  */

    h1{
        color : red;
    }

    /* 2. Id selector  */

    #para1{
     color:green;
    }
   
  /* 3. class name selector */

    .dark{
     color:blue;
    }

     /* 4. universal selector  */

     *{
          text-align : center;
     }

      /* 5. group selector  */

     h1 , #para1 , .dark
      {
           font-style:italic;
      }
 ```


 ### 2. Combinator Selector 

 * it is the combination of two or more than two simple selectors.

 **1. descendant Selector**

      <div class="header">
         
         <h1> hi </h1>

           <div class = "section">
              <h1> bye </h1>
           </div>
          
      </div>

      .header h1{
          text-align : center;
      }

 * this selector is used to target all the descendants of a particular element.

 * it targets the child,grand-child,great-grand-child and so on.

      
**2. Direct Child Selector**

* this selector is used to target direct/immediate children of the parent element.

eg: 
     .header > h1{
          color:red;
     }

     .header > .section > h1{
          color:green;
     }

**3. adjacent sibling**

  <ul>
      <li id="first"> list 1 </li>
      <li> list 2 </li>
      <li> list 3 </li>
      <li> list 4 </li>
      <li> list 5 </li>
  </ul>

  ul > #first+li{
     color:red;
  }

  * it will target the immediate next sibling element.

  * it targets only one element.


  **4. general sibling**
    
    it will target all the siblings after that selected element.

    eg:
      
      ul > #first ~ li{
          font-style:italic;
      }





### 3. Pseudo Class Selector

* Pseudo Class Selectors are used to define the special state of an element.

* It is represented using `:` (colon) symbol.

* Syntax

```css
          selector:pseudo-class{
          /* css property */
          }
```

* Some commonly used pseudo class selectors are:

1. :hover
2. :active
3. :focus
4. :nth-child()
5. :visited
6. :link
7. :first-child
8. :last-child



**1. :hover**

* It is applied when the user places the mouse pointer over an element.

* Mostly used for buttons, links, cards, images, etc.

```html
<button>Click Me</button>
```

```css
button:hover{
    background-color: black;
    color: white;
}
```



**2. :active**

* It is applied when the user clicks and holds the element.

```css
button:active{
     background-color: red;
}
```


**3. :focus**

* It is applied when an input field or form element gets focus.

```html
<input type="text" placeholder="Enter Name">
```

```css
input:focus{
   background-color: green;
}
```


**4 :nth-child()**

* It is used to select an element based on its position.

```css
li:nth-child(2){
    color:blue;
}
```

* We can also use keywords like `odd` and `even`.

```css
li:nth-child(2n){
    background-color:lightgray;
}

li:nth-child(2n+1){
    background-color:lightblue;
}
```



**5. :visited**

* It is used to style the links that the user has already visited.

```css
a:visited{
    color:purple;
}
```



**6. :link**

* It is used to style the links that are not yet visited.

```css
a:link{
    color:blue;
}
```



**7. :first-child**

* It selects the first child of its parent.

```html
<ul>
    <li>Apple</li>
    <li>Mango</li>
    <li>Orange</li>
</ul>
```

```css
li:first-child{
    color:red;
}
```



**8. :last-child**

* It selects the last child of its parent.

```css
li:last-child{
    color:green;
}
```



### 4. Pseudo Element Selector

* Pseudo Element Selectors are used to style a specific part of an element.

* It is represented using `::` (double colon).

* Syntax

```css
selector::pseudo-element{
    /* css property */
}
```

* Commonly used pseudo elements are:

1. ::before
2. ::after
3. ::first-letter
4. ::first-line
5. ::selection
6. ::marker
7. ::placeholder



**1. ::before**

* It inserts content before the selected element.

```html
<h2>Welcome</h2>
```

```css
h2::before{
    content:"😊 ";
}
```


**2. ::after**

* It inserts content after the selected element.

```css
h2::after{
    content:" 🚀";
}
```


**3. ::first-letter**

* It is used to style only the first letter of a text.

```html
<p>Lorem ipsum dolor sit amet.</p>
```

```css
p::first-letter{
    font-size:40px;
    color:red;
}
```



**4. ::first-line**

* It is used to style only the first line of a paragraph.

```css
p::first-line{
    color:blue;
    font-style:italic;
    font-weight:bold;
}
```

**5. ::selection**

* It is used to style the text selected by the user.

```css
::selection{
    background:black;
    color:white;
}
```

**6. ::marker**

* It is used to style the list style of the list.

```css
ul > li::marker{
   color:red;
}
```


**7. ::placeholder**

* It is used to style the placeholder text of input elements.

```html
<input type="text" placeholder="Enter Name">
```

```css
input::placeholder{
    color:gray;
    font-style:italic;
}
```


### 5. Attribute Selector

* Attribute Selectors are used to select HTML elements based on their attributes or attribute values.

* Syntax

```css
selector[attribute]{
    /* css property */
}
```

* We have different types of attribute selectors.

1. [attribute]
2. [attribute="value"]



**1. [attribute]**

* It selects all elements that contain the specified attribute.

```html
<input type="text">
<input type="password">
```

```css
input[type]{
    border:2px solid red;
}
```


**2. [attribute="value"]**

* It selects elements whose attribute value exactly matches the given value.

```html
<input type="text">
<input type="password">
```

```css
input[type="password"]{
    background-color:lightgray;
}
```
