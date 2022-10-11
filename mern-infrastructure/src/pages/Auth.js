import SignUpForm from "../components/SignUpForm"

export default function Auth (props) {
  return (
    <main>
      <h1>Auth Page</h1>
      <SignUpForm setUser={props.setUser}/>
    </main>
  )
}