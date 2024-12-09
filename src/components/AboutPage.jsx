import Image from "next/image";
import Link from "next/link";
import styles from "./aboutPage.module.css";
export const AboutPage = () => {
    return (
        <div className="min-h-screen bg-white text-black">
            <Link href="/">
            <Image className="m-4" src="/jpmorgan.svg" href="\" alt="JPMC logo" width={180} height={38} priority/>
            </Link>
            <h1 className={styles.heading}>ScoutUp</h1>
        <section className="ml-4">
        <section className="mb-4">
            <h2 className={styles.subtitle}>Project Overview</h2>
            <p>
            Scoutup is designed to uncover hidden opportunities in the startup
            ecosystem. By analyzing publicly available investment data, like the
            Crunchbase 2013 dataset, the project builds a recommendation model to
            help investors identify promising startups. The system provides
            insights based on past investments and patterns of similar investors,
            creating actionable recommendations.
            </p>
        </section>

        <section className="mb-4">
            <h2 className={styles.subtitle} >Business Impact</h2>
            <p>
            Scoutup supports JPMorgan Chase's Corporate Investment Banking goals
            by enhancing the suite of data and analytics tools offered to
            institutional investors. By enabling smarter investment decisions,
            the project helps uncover high-potential startups, fostering
            innovation and driving growth in the startup landscape.
            </p>
        </section>

        <section>
            <h2 className={styles.subtitle}>Approach</h2>
            <ul>
            <li>Incorporating additional datasets for richer insights.</li>
            <li>
                Applying machine learning techniques to build and refine the
                recommendation model.
            </li>
            <li>
                Continuously evaluating system performance to ensure relevance and
                accuracy for investors.
            </li>
            </ul>
            <p>
            Scoutup exemplifies the use of advanced analytics to transform
            decision-making in the startup investment space.
            </p>
        </section>
        </section>
        </div>
    );
};
