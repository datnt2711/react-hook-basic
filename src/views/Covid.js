import React, { useEffect, useState } from "react";
import "./Covid.scss";
import moment from "moment";
import axios from "axios";

function Covid() {
  const [dataCovid, setDataCovid] = useState([]);
  useEffect(async () => {
    let res = await axios.get(
      "https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z"
    );
    let data = res && res.data ? res.data : [];
    if (data && data.length > 0) {
      data.map((item) => {
        item.Date = moment(item.Date).format("DD/MM/YYYY");
        return item;
      });
    }
    setDataCovid(data);
  }, []);

  return (
    <>
      <h4>Covid 19 tracking in VietNam</h4>
      <table>
        <thead>
          <tr>
            <td>Date</td>
            <td>Country</td>
            <td>Active</td>
            <td>Confirmed</td>
            <td>Deaths</td>
          </tr>
        </thead>
        <tbody>
          {dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <>
                  <tr key={item.ID}>
                    <td>{item.Date}</td>
                    <td>{item.Country}</td>
                    <td>{item.Active}</td>
                    <td>{item.Confirmed}</td>
                    <td>{item.Deaths}</td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default Covid;
