import {Helmet} from "react-helmet-async";

const SEO = ({ title, description, path}) => {
    return (
        <Helmet>
            <title>{title} | rokartur.xyz</title>
            <meta property={"title"} content={`${title} | rokartur.xyz`}/>
            <meta property={"og:title"} content={`${title} | rokartur.xyz`}/>
            <meta name={"description"} content={description}/>
            <meta name={"og:description"} content={description}/>
            <meta property={"og:url"} content={`https://rokartur.xyz${path}`}/>
            <link rel={"canonical"} href={`https://rokartur.xyz${path}`}/>
        </Helmet>
    );
}

export default SEO;
