import React from "react";

interface AuthorProps {
  author: string;
  portfolio: string;
}

const Author: React.FC<AuthorProps> = ({ author, portfolio }) => {
  return (
    <p className="">
      Sitio creado por{" "}
      <a className="text-pink-400" href={portfolio} target="_blank">
        {author}
      </a>{" "}
      2024.
    </p>
  );
};

export default Author;
