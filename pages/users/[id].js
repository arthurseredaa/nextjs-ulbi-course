import React from 'react';
import {useRouter} from "next/router";

const UserProfile = ({user}) => {
  const router = useRouter();
  const {query: {id}} = router;

  const {name, email, phone, website} = user;

  return (
      <div>
        <h5>User with id: {id}</h5>
        <h1>name: {name}</h1>
        <p>email: {email}</p>
        <p>phone: {phone}</p>
        <p>website: {website}</p>
      </div>
  );
};

export default UserProfile;

export async function getServerSideProps({query}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${query.id}`);
  const user = await response.json();

  return {
    props: {user}, // will be passed to the page component as props
  }
}