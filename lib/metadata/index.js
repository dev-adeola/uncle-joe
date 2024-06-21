import app from "@/config/app";



const generateMetadata = (metadata, options) => {
    let title = metadata?.title ?? app.name;
    const description = metadata?.description ?? app.description;

    if (options?.withSuffix) {
        title += ` | ${app.name}`;
    }

    const metadataResult = {
        ...metadata,
        title,
        description,
        keywords: metadata?.keywords ?? app.keywords,
        applicationName: app.name,
        metadataBase: metadata?.metadataBase ?? new URL('http://localhost:3000'),
        openGraph: {
            title,
            description,
            type: 'website',
            siteName: app.name
        }
    };

    return metadataResult;
};

export default generateMetadata;