import React from "react";

interface PageIntroProps {
  title: string;
  content: string;
}

const PageIntro = ({ title, content }: PageIntroProps) => {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      <h2 className="text-4xl mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default PageIntro;
