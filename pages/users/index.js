import CustomLink from "../../components/CustomLink/CustomLink";

const Index = ({users}) => (
    <div>
      <h1>
        Users
      </h1>
      <ul>
        {users.map((user) => (
                <li key={user.id}>
                  <CustomLink href={`/users/${user.id}`} text={user.name}/>
                </li>
            )
        )}
      </ul>
    </div>
);

export default Index;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return {
    props: {users}, // will be passed to the page component as props
  }
}