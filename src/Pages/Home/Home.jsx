import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Home.module.css";
import Pagenation from "../../Component/Pegination /Pagenation";
import Banner from "../../Component/Mainpage/Banner/Banner";
import Card from "../../Component/Mainpage/Card/Card";
import Navbar from "../../Component/Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { pageMinus, pagePlus, pageAction } from "../../Slice/Homeslice";

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [movieData, setMovieData] = useState([]);
  const [textQuery, setTextQuery] = useState("");
  const [searchedRes, setSearchedRes] = useState([]);
  const [totalPage, setTotalPage] = useState()

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.Home);

  const Apiresponse = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=b7f77b88848378309fc867cd549a0964&page=${selector.page}`
      )
      .then((data) => {
        setMovieData(data.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const searchMovie = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=b7f77b88848378309fc867cd549a0964&language=en-US&query=${textQuery}`
    );
    const searchdata = await response.data.results;
    setSearchedRes(searchdata);
  };
  

  const onChangeHandler = (e) => {
    setTextQuery(e.target.value, "handler");
  };

  useEffect(() => {
    setLoading(true);
    Apiresponse();
  }, [selector.page]);
  const nextPage = () => {
    dispatch(pagePlus())
}

const prevPage = () => {
    dispatch(pageMinus())
}

const pageNumber = (i) => {
    dispatch(pageAction(i))
}
  return (
    <>
      <Navbar onChangeHandler={onChangeHandler} searchMovie={searchMovie} />

      <Banner />
      <div className={style.maincontainer}>
        {searchedRes.length > 0 ? <h1>SearchData</h1> : <h1>Trending</h1>}

        <div className={style.Moviecontainer}>
          {searchedRes.length === 0
            ? movieData.map((res, ind) => {
                return <Card info={res} ind={ind} key={ind} />;
              })
            : searchedRes.map((res, ind) => {
                return <Card info={res} ind={ind} key={ind} />;
              })}
        </div>

        {searchedRes == 0 ? (
            <Pagenation pageNumber={selector.page}
            goToCurrentPage={pageNumber}
            nextPage={nextPage}
            prevPage={prevPage}
            page={selector.page}
            totalPage={totalPage}
            pageLimit={10} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};
