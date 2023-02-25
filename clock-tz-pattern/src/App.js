//import logo from './logo.svg';
import './App.css';

function App() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  return (
    <div className="App">

      <table border="2px">
        <tr>
          <td>
            <th><caption>USA</caption></th>
            <tr>
              <table border="2px">
                <td>
                  <th>
                    <caption>The New TimeZones</caption>
                  </th>
                  <th>
                    <caption>UTC Timeset</caption>
                  </th>
                  <th>
                    <caption>TZ Code</caption>
                  </th>
                  <th>
                    <caption>States Tagged</caption>
                  </th>

                  <tr>
                    <td>Washington,DC</td>
                    <td></td>
                    <td>Washington :: UTC -5</td>
                    <td>Washington DC</td>
                  </tr>
                  <tr>
                    <td>State Time</td>
                    <td></td>
                    <td>OHIO :: EST</td>
                    <td>OHIO </td>
                  </tr>
                  <tr>
                    <td>Atlantic Time</td>
                    <td></td>
                    <td>Atlantic :: UTC -3</td>
                    <td>Atlantic</td>
                  </tr>
                  <tr>
                    <td>Pacific Time</td>
                    <td> </td>
                    <td>Hawaii Time</td>
                    <td>Hi</td>
                  </tr>
                </td>
              </table>

            </tr>
          </td>
        </tr>

        <tr>
          <td>
            <th><caption>Ukraine</caption></th>
            <tr>
            </tr>
          </td>
        </tr>
      </table>


    </div>
  );
}

export default App;
