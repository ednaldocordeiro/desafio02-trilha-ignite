import { Button } from "./Button"

import {GenreResponseProps} from '../App'
import { ButtonHTMLAttributes, SetStateAction } from "react";

interface SideBarProps {
  genres: GenreResponseProps[],
  onSelectGenre: (id: number) => void;
  selectedGenreId: number
}

export function SideBar({genres, onSelectGenre, selectedGenreId}: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onSelectGenre(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}