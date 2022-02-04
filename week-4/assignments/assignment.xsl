<?xml version="1.0" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match= "/">
    <html>
      <body> 
        <h2>Catalog</h2><!-- As per the given instruction created main title-->
        <ul>
          <hgroup>
            <h3><xsl:value-of select="concat('Product ID: ', //product/@product_id)"/></h3> <!-- Product id is given as H3-->
            <p><xsl:value-of select="//product/@description"/></p><!-- description is given as paragraph-->
          </hgroup>
          <xsl:for-each select="//product">
            <li>
              <article style="margin-bottom: 50px;"> <!--items are listed as article -->
               
                <table border="1"> <!-- table border and items to be displayed inside of the table as columns-->
                  <tr>
                    <th>Item number</th> 
                    <th>Price</th> 
                    <th>Gender</th> 
                    <th>Small</th> 
                    <th>Medium</th> 
                    <th>Large</th> 
                    <th>Extra Large</th> 
                  </tr> 
                  
                  <xsl:for-each select="//catalog_item"> 
                    <tr>
                      <td><xsl:value-of select="item_number"/></td>
                      <td><xsl:value-of select="price"/></td>
                      <td>
                        <xsl:choose>
                          <xsl:when test= "@gender = 'Men'">M</xsl:when><!-- for gender we are taking the condition to desply as M and W-->
                          <xsl:otherwise>W</xsl:otherwise>
                        </xsl:choose>
                      </td>
                      <td>
                       <xsl select="size"> <!-- created a table small items inside the main table -->
                        <table border='1'>
                          <xsl:if test="size/@description = 'Small'">
                            <tr>
                              <th>Color</th>
                              <th>Image</th>
                            </tr>
                          
                            <xsl:for-each select="size[@description='Small']/color_swatch"> 
                              <tr>
                                <td><xsl:value-of select="."/></td>
                                <td><xsl:value-of select="./@image"/></td>
                              </tr>
                            </xsl:for-each>
                          </xsl:if>
                        </table>
                       </xsl>
                      </td>
                      <td>
                       <xsl select="size"> <!-- created a table for medium items inside of the main table -->
                        <table border='1'>
                          <xsl:if test="size/@description = 'Medium'">
                            <tr>
                              <th>Color</th>
                              <th>Image</th>
                            </tr>
                          
                            <xsl:for-each select="size[@description='Medium']/color_swatch"> 
                              <tr>
                                <td><xsl:value-of select="."/></td>
                                <td><xsl:value-of select="./@image"/></td>
                              </tr>
                            </xsl:for-each>
                          </xsl:if>
                        </table>
                       </xsl>
                      </td>
                      <td>
                       <xsl select="size"><!-- created a table for large items inside of the main table -->
                        <table style="margin:auto;" border='1'>
                          <xsl:if test="size/@description = 'Large'">
                            <tr>
                              <th>Color</th>
                              <th>Image</th>
                            </tr>
                          
                            <xsl:for-each select="size[@description='Large']/color_swatch"> 
                              <tr>
                                <td><xsl:value-of select="."/></td>
                                <td><xsl:value-of select="./@image"/></td>
                              </tr>
                            </xsl:for-each>
                          </xsl:if>
                        </table>
                       </xsl>
                      </td>
                      <td>
                       <xsl select="size"><!-- created a table for extra large items inside of the main table-->
                        <table border='1'>
                          <xsl:if test="size/@description = 'Extra Large'">
                            <tr>
                              <th>Color</th>
                              <th>Image</th>
                            </tr>
                          
                            <xsl:for-each select="size[@description='Extra Large']/color_swatch"> 
                              <tr>
                                <td><xsl:value-of select="."/></td>
                                <td><xsl:value-of select="./@image"/></td>
                              </tr>
                            </xsl:for-each>
                          </xsl:if>
                        </table>
                       </xsl>
                      </td>

                        
                    </tr>
                  </xsl:for-each> 
                </table>
              </article>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>