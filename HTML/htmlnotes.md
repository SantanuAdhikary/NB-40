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
