// Shared metadata so every page's link preview keeps the site image.
export const SITE_DESCRIPTION =
    "Miru Jun is a software engineer at Applied Intuition. Projects, research, and publications in AI, XR, and robotics.";

const IMAGE = { url: "/portrait_840.jpg", width: 840, height: 840, alt: "Portrait of Miru Jun" };

export function pageMetadata(title, description = SITE_DESCRIPTION) {
    return {
        title,
        description,
        openGraph: { title, description, siteName: "Miru Jun", type: "website", images: [IMAGE] },
        twitter: { card: "summary", title, description, images: [IMAGE.url] },
    };
}
