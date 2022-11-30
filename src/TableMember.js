const TableMember = (props) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Palvelu</th>
            <th>Omistaja-asiakas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Palvelupaketin kuukausivelotus</td>
            <td>Ilman kuluja</td>
          </tr>
          <tr>
            <td>Arvo-osuustili ja arvopaperisäilytys</td>
            <td><span className="material-symbols-sharp">done</span></td>
          </tr>
          <tr>
            <td>Ulkomaisten osakkeiden säilytys</td>
            <td><span className="material-symbols-sharp">done</span></td>
          </tr>
          <tr>
            <td>Raportointi</td>
            <td><span className="material-symbols-sharp">done</span></td>
          </tr>
          <tr>
            <td>Osake- ja markkina-analyysi</td>
            <td><span className="material-symbols-sharp">done</span></td>
          </tr>
          <tr>
            <td>Kansainvälinen analyysi</td>
            <td><span className="material-symbols-sharp">done</span></td>
          </tr>
          <tr>
            <td>Reaaliaikaiset kurssit, 5 tasoa</td>
            <td><span className="material-symbols-sharp">done</span></td>
          </tr>
          <tr>
            <td>Markkinoiden seurantatyökalu</td>
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
            <td>Reaaliaikaiset uutiset</td>
            <td>+5,00 €</td>
            <td>
              <input name="Extra feature" type="checkbox" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableMember;
