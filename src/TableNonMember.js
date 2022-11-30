const TableNonMember = (props) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Palvelu</th>
            <th>Muut asiakkaat</th>
            <th>Omistaja-asiakas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Palvelupaketin kuukausiveloitus</td>
            <td>2,99 €</td>
            <td>Ilman kuluja</td>
          </tr>
          <tr>
            <td>Arvo-osuustili ja arvopaperisäilytys</td>
            <td><span className="material-symbols-sharp">done</span></td>
            <td><span className="material-symbols-sharp">done</span></td>
          </tr>
          <tr>
            <td>Ulkomaisten osakkeiden säilytys</td>
            <td>Katso hinnasto <span className="material-symbols-sharp default">open_in_new</span></td>
            <td><span className="material-symbols-sharp">done</span></td>
          </tr>
          <tr>
            <td>Raportointi</td>
            <td><span className="material-symbols-sharp">done</span></td>
            <td><span className="material-symbols-sharp">done</span></td>
          </tr>
          <tr>
            <td>Osake- ja markkina-analyysi</td>
            <td><span className="material-symbols-sharp">done</span></td>
            <td><span className="material-symbols-sharp">done</span></td>
          </tr>
          <tr>
            <td>Kansainvälinen osakeanalyysi</td>
            <td><span className="material-symbols-sharp">done</span></td>
            <td><span className="material-symbols-sharp">done</span></td>
          </tr>
          <tr>
            <td>Reaaliaikaiset kurssit, 1 tarjoustaso</td>
            <td><span className="material-symbols-sharp">done</span></td>
            <td><span className="material-symbols-sharp">done</span></td>
          </tr>
          <tr>
            <td>Reaaliaikaiset kurssit, 5 tarjoustasoa</td>
            <td>Lisäpalvelu</td>
            <td><span className="material-symbols-sharp">done</span></td>
          </tr>
          <tr>
            <td>Reaaliaikaiset uutiset</td>
            <td>Lisäpalvelu</td>
            <td>Lisäpalvelu</td>
          </tr>
          <tr>
            <td>Markkinoiden seurantatyökalu</td>
            <td><span className="material-symbols-sharp not-included">close</span></td>
            <td><span className="material-symbols-sharp">done</span></td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Lisäpalvelut</th>
            <th>Kuukausiveloitus</th>
            <th>Valitse</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Reaaliaikaiset kurssit, 5 tarjoustasoa</td>
            <td>+5,00 €</td>
            <td>
              <input name="Reaaliaikaiset kurssit, 5 tarjoustasoa" type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>Reaaliaikaiset uutiset</td>
            <td>+5,00 €</td>
            <td>
              <input name="Reaaliaikaiset uutiset" type="checkbox" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableNonMember;
