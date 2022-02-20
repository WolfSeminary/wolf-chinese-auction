import React from "react";
import Winner from "./Winner";
//import RafflesTable from './RafflesTable';
import TitleAppBar from "./TitleAppBar";
import RafflesTable from "./RaflesTable";

export default function RafflesPage() {
  return (
    <>
      <TitleAppBar />
      <RafflesTable />
      <Winner />
    </>
  );
}
