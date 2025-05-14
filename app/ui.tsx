'use client'


import MovieCardList from "components/movie-card-list"
import { useQuery } from "@tanstack/react-query"

export default function UI(){
  
  return (<main className="mt-16">
    <MovieCardList/>
  </main>)
}