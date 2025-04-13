// alx-react-app-props/App.jsx
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';
import userinf from './userinfo'
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
