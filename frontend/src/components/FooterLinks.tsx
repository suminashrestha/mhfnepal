import React from "react";

const FooterLinks = ({
  children,
  title,
  type="",
}: {
  children: React.ReactNode;
  title: string;
  type?: string;
}) => {
  return (
    <div className="flex gap-3 items-center">
      {children}
      <span>
        {type === "" ? title : <a href={`${type}:${title}`}>{title}</a>}
      </span>
    </div>
  );
};

export default FooterLinks;
