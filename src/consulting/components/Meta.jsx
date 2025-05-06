import { Helmet } from "react-helmet";

const Meta = ({ title }) => {
  // Extract the pathname (e.g., '/post/my-first-post')
  const pathSegments = title.pathname.split("/");

  // Extract the last part (the page name)
  const pageName = pathSegments[pathSegments.length - 1];
  return (
    <Helmet>
      <title>
        {pageName
          ? `${pageName.toUpperCase()} | SRIYOG Consulting`
          : "SRIYOG Consulting"}
      </title>
      <meta name="description" />
    </Helmet>
  );
};

export default Meta;
