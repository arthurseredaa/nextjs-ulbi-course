import Link from "next/link";

import styles from './custom_link.module.scss';
import classNames from "classnames";

const CustomLink = ({href, text, isActive}) => {

  const linkClassNames = classNames(styles.link, {
    [styles.active]: isActive,
  })

  return (
      <Link href={href} passHref>
        <a className={linkClassNames}>{text}</a>
      </Link>
  );
};

export default CustomLink;
