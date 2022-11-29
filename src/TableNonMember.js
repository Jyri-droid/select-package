const TableNonMember = (props) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Non-member</th>
            <th>Member</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Price</td>
            <td>4,99 €</td>
            <td>Free</td>
          </tr>
          <tr>
            <td>Feature 1</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Feature 2</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Feature 3</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Feature 4</td>
            <td>Extra feature</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Feature 5</td>
            <td>Extra feature</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Feature 6</td>
            <td>No</td>
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
            <td>Feature 4</td>
            <td>+4,99 €</td>
            <td>
              <input name="Extra feature 4" type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>Feature 5</td>
            <td>+4,99 €</td>
            <td>
              <input name="Extra feature 5" type="checkbox" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableNonMember;
