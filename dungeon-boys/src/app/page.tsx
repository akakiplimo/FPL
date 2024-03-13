"use client"
require('dotenv').config();
import styles from "./page.module.css";
import React, { useEffect, useState } from "react";
import { FplApiResponse, fetchData } from "../../utils/api";
import Table from "@/components/Tables";

const Home: React.FC = () => {
  const [classicData, setClassicData] = useState<FplApiResponse | null>(null);
  const [classicStandings, setClassicStandings] = useState<FplApiResponse | null>(null);
  const [headToHeadData, setHeadToHeadData] = useState<FplApiResponse | null>(null);
  const [hTHStandings, setHTHStandings] = useState<FplApiResponse | null>(null);

  const playerIDs = classicStandings;
  

  useEffect(() => {
    const fetchClassicLeagueData = async () => {
      try {
        const endpoint = `${process.env.API_URL}/leagues-classic/1246710/standings`;
        const result = await fetchData(endpoint);
        setClassicData(result);
        setClassicStandings(result?.standings?.results);
      } catch (error) {
        console.log('err: ', error)
      }
    };

    const fetchHTHLeagueData = async () => {
      try {
        const endpoint = `${process.env.API_URL}/leagues-h2h-matches/league/1246920/?page=1`;
        const result = await fetchData(endpoint);
        setHeadToHeadData(result);
        // setHTHStandings(result?.standings?.results);
      } catch (error) {
        console.log('err: ', error)
      }
    };

    fetchClassicLeagueData();
    fetchHTHLeagueData();
  }, []);

  return (
    <main className={styles.main}>
      <h1 style={{textAlign: "center"}}>{classicData?.league?.name || 'Loading...'}</h1>
      {classicData ? (
        <>
          <Table leagueName='Classic League' standings={classicStandings} />
          <br/>
          <Table leagueName='Head To Head League' />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}

export default Home;
