Explain your thought process for these 2 declarations?
I have created DDT and XSD for assignemnt.xml file. 
assignment.xsd:
![validation of xsdd](/week-3/assignments/images/3.jpg). 
In assignment.xml file we are havvinig "catalog" as the root element and it is havving elements and attributes 
hence we are going to use both simple and complex types
catalog,product, catalog_item ... these come under simple type
product_id, description, product_image, gender ... these come under complex type
Most of them will have type as string where as price has the decimal value so it attains decimal as its type
here many elements are having uninque data so it is prefered to use #required.
assignment.ddt
I am unaware of whats the error is and could not able to determine the correct DTD for the following
xml file. I have written the DTD in assignment.dtd.
