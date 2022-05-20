import React from "react";
import Head from "next/head";
import Header from "../Header";

interface Props {
  pageTitle?: string;
}
const Layout: React.FC<Props> = ({ children, pageTitle }) => {
  return (
    <React.Fragment>
      {pageTitle && (
        <Head>
          <title className="text-5xl">{pageTitle}</title>
        </Head>
      )}
      <div className="mb-10">
        <Header />
      </div>
      <div className="container mx-auto">
        <main className="">{children}</main>
      </div>
    </React.Fragment>
  );
};
export default Layout;
