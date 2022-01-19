1. Open `week-2/assignments/assignment.xml` in your browser. Are there any errors? Explain the error and fix it.
A. ![I have executed the xml and got the error at effectivedate the error is caused due to the space between them and i have rectified the error](/week-2/assignments/1.jpg).
![I have rectified the errors and executed the file again and here is the validation](/week-2/assignments/2.jpg).
2. What is the use of CDATA block in this document?
A. CDATA is a section in XML which is used to interpret character data. It treats the text data as raw text in character format.
3. Add comment line to the end of file which contains you name and student id.
A. <!-- HEMANTH N01494378--> i have added it to the end of the xml file.
4. Identify prolog, document body, and epilog in the document. Are there any processing instructions?
A. prolog in the document

<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>
document body
Information which is in between the following tag  in assignment.xml is treated as document body
<menuInfo> </menuInfo>
epilog 
Epilog contains any final comments or processing instructions
Epilog in assignment.xml
<!-- HEMANTH N01494378--> 
processing instruction in assignment.xml
<?xml-stylesheet type="text/css" href="style.css"?>

5. Add inline DTD for this document.
A. The inline DTD is as following and i have updated it to the original xml file.
   <!DOCTYPE menuInfo 
[
  <!ELEMENT menuInfo (title, summary,effectiveDate, menu+)>
  <!ELEMENT menu (category, menuItem+)>
  <!ELEMENT menuItem (itemName,description,price,indicator*)>
  <!ELEMENT itemName (originalName, oldName*)>
  <!ELEMENT title (#PCDATA)>
  <!ELEMENT summary (#PCDATA)>
  <!ELEMENT effectiveDate (#PCDATA)>
  <!ELEMENT category (#PCDATA)>
  <!ELEMENT originalName (#PCDATA)>
  <!ELEMENT oldName (#PCDATA)>
  <!ELEMENT description (#PCDATA)>
  <!ELEMENT price (#PCDATA)>
  <!ELEMENT indicator (#PCDATA)>
]>
6. Verify that file is well-formed and valid.
A. ![Here you can find the xml file validation after the executing with DTD](/week-2/assignments/3.jpg).
7. Create `style.css` file and link it to the file. Add the following styles to the .css:
A. I have linked the css file and added the required styles for it.