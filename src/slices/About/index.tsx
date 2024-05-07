import Bounded from "@/components/bounded";
import Button from "@/components/button";
import Heading from "@/components/heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Avatar from "./avatar";
import styles from "./avatar.module.css";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr, 1fr]">
        <Heading as="h1" size="xl" className="col-start-1">
          {slice.primary.heading}
        </Heading>
        <div className="prose prose-xl prose-slate prose-invert col-start-1">
          <PrismicRichText field={slice.primary.description} />
        </div>
        <Button
          linkField={slice.primary.button_link}
          label={slice.primary.button_text}
        />
        <Avatar
          image={slice.primary.avatar}
          className="row-start-2 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
      <Heading as="h2" size="md" className="mt-4">
        My Skills
      </Heading>
      <div className={styles.container}>
        <ul className={styles.ul}>
          <li className={styles.li}>HTML</li>
          <li className={styles.li}>Tailwind CSS</li>
          <li className={styles.li}>JavaScript</li>
          <li className={styles.li}>TypeScript</li>
          <li className={styles.li}>Express js</li>
          <li className={styles.li}>Node js</li>
          <li className={styles.li}>React</li>
          <li className={styles.li}>Next js</li>
          <li className={styles.li}>three js</li>
          <li className={styles.li}>PostgreSQL</li>
          <li className={styles.li}>Supabase</li>
          <li className={styles.li}>GSAP</li>
          <li className={styles.li}>Spanish</li>
          <li className={styles.li}>French</li>
          <li className={styles.li}>Catalan</li>
        </ul>
      </div>
    </Bounded>
  );
};

export default About;
