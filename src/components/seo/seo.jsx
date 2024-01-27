import { Helmet } from 'react-helmet-async'

const SEO = ({ title, description }) => (
	<Helmet>
		<title>{title} | rokartur</title>
		<meta property={'title'} content={`${title} | rokartur`}/>
		<meta property={'og:title'} content={`${title} | rokartur`}/>
		<meta name={'description'} content={description}/>
		<meta name={'og:description'} content={description}/>
	</Helmet>
)

export default SEO
