import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRates } from "../../redux/currencies/currenciesSlice";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Spinner } from "../Spinner/Spinner";

const repackArray = (data: any) => {
  const result = [];

  if (data) {
    for (const key in data) {
      const obj = { name: key, rate: data[key] };
      result.push(obj);
    }
    return result;
  }
};

export const Currencies = () => {
  const dispatch = useDispatch();
  const currencies = useTypedSelector((state) => state.rates.ratesData.rates);
  const isLoading = useTypedSelector((state) => state.rates.isLoading);

  const preparedCurrencies = repackArray(currencies);

  useEffect(() => {
    dispatch(fetchRates());
  }, []);

  const emptyTable = () => (
    <TableRow>
      <TableCell>Empty</TableCell>
    </TableRow>
  );

  return (
    <div>
      {isLoading ? (
        <div style={{ margin: "0 auto", width: "500px" }}>
          <Spinner />
        </div>
      ) : (
        <TableContainer component={Paper} style={{ width: "700px" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Rates</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {preparedCurrencies?.length
                ? preparedCurrencies.map((row: any) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">{row.rate}</TableCell>
                    </TableRow>
                  ))
                : emptyTable()}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};
