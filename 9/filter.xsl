<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <head>
        <title>Список Менеджерів</title>
        <style>
          table {
            border-collapse: collapse;
            width: 100%;
          }
          th, td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
          }
          th {
            background-color: #f2f2f2;
          }
        </style>
      </head>
      <body>
        <h2>Список Менеджерів</h2>
        <table>
          <tr>
            <th>Прізвище</th>
            <th>Ім'я</th>
            <th>По-батькові</th>
            <th>Адреса</th>
            <th>Телефон</th>
            <th>Посада</th>
            <th>Підрозділ</th>
          </tr>
          <xsl:apply-templates select="employees/employee[position='Менеджер']"/>
        </table>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="employee">
    <tr>
      <td><xsl:value-of select="lastName"/></td>
      <td><xsl:value-of select="firstName"/></td>
      <td><xsl:value-of select="middleName"/></td>
      <td>
        <xsl:value-of select="address/city"/>
        , <xsl:value-of select="address/street"/>
        , буд. <xsl:value-of select="address/house"/>
        , кв. <xsl:value-of select="address/apartment"/>
      </td>
      <td>
        Дом.: <xsl:value-of select="phone/home"/>
        , Моб.: <xsl:value-of select="phone/mobile"/>
      </td>
      <td><xsl:value-of select="position"/></td>
      <td><xsl:value-of select="department"/></td>
    </tr>
  </xsl:template>

</xsl:stylesheet>
