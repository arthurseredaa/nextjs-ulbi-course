import CustomLink from "../CustomLink/CustomLink";
import {useRouter} from "next/router";

import styles from './navbar.module.scss';

const Navbar = () => {
  const {pathname} = useRouter();
  const isUsersPage = pathname.split('/').includes('users');

  return (
      <nav className={styles.navbar}>
        <CustomLink href="/" text="Main Page" isActive={!isUsersPage}/>
        <CustomLink href="/users" text="Users" isActive={isUsersPage}/>
      </nav>
  );
};

export default Navbar;
