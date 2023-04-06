import React from 'react';

import { usePapaParse } from 'react-papaparse';
import xlsx from 'xlsx';

export default function App() {
  const { readRemoteFile } = usePapaParse();
  const link = 'link of csv';

  const handleReadRemoteFile = () => {
    readRemoteFile(link, {
      header: true,
      complete: (results) => {
        //console.log(typeof(results));
        const JsonObject = JSON.stringify(results);
        console.log(JsonObject);
        // const bject = JSON.parse(JSON.stringify(results));
        // console.log(bject);
        // const data = results;
        // const workbook = xlsx.read(data, { type: 'array' });
        // // const sheetName = workbook.SheetNames[0];
        // // const worksheet = workbook.Sheets[sheetName];
        // const json = xlsx.utils.sheet_to_json(workbook);
        // console.log(json);
      },
    });
  };

  return <button onClick={() => handleReadRemoteFile()}>readRemoteFile</button>;
}
