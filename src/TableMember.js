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
            <td>V</td>
          </tr>
          <tr>
            <td>Ulkomaisten osakkeiden säilytys</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Raportointi</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Osake- ja markkina-analyysi</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Kansainvälinen analyysi</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Reaaliaikaiset kurssit, 5 tasoa</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Markkinoiden seurantatyökalu</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Extra features</th>
            <th>Price</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Feature</td>
            <td>4,99 €</td>
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
