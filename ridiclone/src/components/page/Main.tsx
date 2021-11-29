import React from "react";
import BookCuration from "../BookCuration";
import Footer from "../Footer";
import Header from "../Header";
import SquareButton from "../SquareButton";
import Template from "../Template";
import { ReactComponent as Heart } from "../../assets/icon/heart.svg";

const Main= ()=>(
    <>
        <Template>
           <BookCuration
            header="오늘 리디의 발견"
            books={[
                {
                  id: 1,
                  title: "Diabetes",
                  author: "Loukes",
                  thumbnail: "https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg",
                  rating: 3,
                },
                {
                  id: 1,
                  title: "Diabetes",
                  author: "Loukes",
                  thumbnail: "https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg",
                  rating: 3,
                  canRent: true,
                },
                {
                  id: 1,
                  title: "Diabetes",
                  author: "Loukes",
                  thumbnail: "https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg",
                  rating: 3,
                },
                {
                  id: 1,
                  title: "Diabetes",
                  author: "Loukes",
                  thumbnail: "https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg",
                  rating: 3,
                  canRent: true,
                },
                {
                  id: 1,
                  title: "Diabetes",
                  author: "Loukes",
                  thumbnail: "https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg",
                  rating: 3,
                  canRent: true,
                },
              ]}
            />
        </Template>
        
    </>
)
export default Main