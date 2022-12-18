import axios from "axios";
import React, { useEffect, useState } from "react";
import { AdminDuyuruApi } from "../../components/apis/api";
import Loading from "../../components/loading/Loading";
import Home from "../home/Home";
import AllDuyuru from "./AllDuyuru";
import "./duduyuru.css";

function DuDuyuru() {
  //const [duyuruFilter, setDuyuruFilter] = useState("BUGUNDU");
  const [duyuru, setDuyuru] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(AdminDuyuruApi).then((res) => {
      setDuyuru(res.data);
      setLoading(false);
    });
  }, []);



  return (
    <Home>
      <section id="features" className="features">
        {
          loading ? (
            <Loading />
          ) : (
            <AllDuyuru duyuru={duyuru} />
          )
        }
      </section>
    </Home>
  );
}

export default DuDuyuru;
