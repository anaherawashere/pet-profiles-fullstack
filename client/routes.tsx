import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './App'
import NotFound from './components/NotFound404'
import Home from './pages/Home'
import Signup from './pages/Signup'
import PetForm from './components/forms/PetForm'
import ProfileList from './pages/ProfileList'
import Profile from './pages/Profile'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<NotFound />}>
    <Route index element={<Home />} />
    <Route path="signup" element={<Signup />}>
      <Route path="pet" element={<PetForm />} />
    </Route>
    <Route path="profiles" element={<ProfileList />} />
    <Route path="profiles/:profileName" element={<Profile />} />
  </Route>,
)

export const router = createBrowserRouter(routes)