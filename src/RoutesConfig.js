import Home from './pages/home/Home'
import User from './pages/user/User'


const RoutesConfig = 
[
  {
  path:"/",
component:Home,
exact:true
},
{
  path:"/user",
component:User,
exact:true
},
]

export default RoutesConfig;