const TableMember = (props) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Features</th>
            <th>Member</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Price</td>
            <td>Free</td>
          </tr>
          <tr>
            <td>Feature 1</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Feature 2</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Feature 3</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Feature 4</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Feature 5</td>
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
