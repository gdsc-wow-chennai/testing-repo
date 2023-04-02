import Head from "next/head";

let SeoComponent = ({ title, description, image }) => {
    return (<Head>
        <meta property="title" content={title} />
        <meta property="og:title" content={title} />
        <meta property="description" content={description} />
        <meta property="image" content={image} />
        <meta property="og:image" content={image} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Student Networking, GoogleStudents, CampusConnect"/>
    </Head>)
}

export default SeoComponent