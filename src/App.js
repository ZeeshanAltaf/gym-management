import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
import Footer from './Components/Home/Footer/Footer';
import Home from './Components/Home/Home';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import Blog from './Components/Pages/Blog/Blog';
import Contact from './Components/Pages/Contact/Contact';
import CrossFit from './Components/Pages/CrossFit/CrossFit';
import Fitness from './Components/Pages/Fitness/Fitness';
import Shop from './Components/Pages/Shop/Shop';
import Testimonials from './Components/Pages/Testimonials/Testimonials';
import Trainers from './Components/Pages/Trainers/Trainers';
import FigmaLogin from './Components/Pages/Shared/FigmaLogin';
import Dashboard from './Dashboard/Dashboard';
import AccountsHome from './Dashboard/AdminDashboard/Home/AccountsHome';
import AccountsProfile from './Dashboard/AdminDashboard/Profile/AccountsProfile';
import Orders from './Dashboard/AdminDashboard/Orders/Orders';
import Salary from './Dashboard/AdminDashboard/Salary/Salary';
import ManageForm from './Dashboard/AdminDashboard/ManageForm/ManageForm';
import Incomes from './Dashboard/AdminDashboard/Incomes/Incomes';
import Expense from './Dashboard/AdminDashboard/Expense/Expense';
import UsersHome from './Dashboard/UserDashboard/UsersHome/UsersHome';
import Register from './Components/Pages/Shared/Register';
import NotFound from './Components/Pages/NotFound/NotFound';
import RequireAccounts from './hooks/UserRoleAuthenticate/RequireAccounts/RequireAccounts';
import RequireUser from './hooks/UserRoleAuthenticate/RequireUser/RequireUser';
import TrainersHome from './Dashboard/TrainerDashboard/TrainersHome/TrainersHome';
import StudentList from './Dashboard/TrainerDashboard/StudentList/StudentList';
import TrainerSettings from './Dashboard/TrainerDashboard/Settings/TrainerSettings';
import ProductDetails from './Components/Pages/Shop/ProductDetails';
import CartProduct from './Components/Pages/CartProduct/CartProduct';
import PaymentCard from './Components/Pages/PaymentCard/PaymentCard';
import TrainerPackages from './Dashboard/TrainerDashboard/TrainerPackages/TrainerPackages';
import UsersProfile from './Dashboard/UserDashboard/UsersProfile/UsersProfile';
import UsersWorkout from './Dashboard/UserDashboard/UsersWorkout/UsersWorkout';
import TrainerProfile from './Dashboard/TrainerDashboard/TrainerProfile/TrainerProfile';
import PackagePaymentCard from './Components/Pages/PaymentCard/PackagePaymentCard/PackagePaymentCard';
import AllSchedule from './Dashboard/TrainerDashboard/AllSchedule/AllSchedule';

function App() {
  // const [location, setLocation] = useState(window.location.pathname);

  // useEffect(() => {
  //   setLocation(window.location.pathname);
  // }, [location])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/crossFit' element={<CrossFit />} />
        <Route path='/programs' element={<Fitness />} />
        <Route path='/trainers' element={<Trainers />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<FigmaLogin />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<CartProduct />} />
        <Route path='/checkout' element={<PaymentCard />} />
        <Route path='/payment/:id' element={<PackagePaymentCard />} />
        <Route path='*' element={<NotFound />} />

        <Route path="/product/:productId" element={<ProductDetails />}></Route>

        <Route path="dashboard" element={<Dashboard />}>
          <Route path="accounts-home" element={<RequireAccounts><AccountsHome /></RequireAccounts>} />
          <Route path="accounts-profile" element={<RequireAccounts><AccountsProfile /></RequireAccounts>} />
          <Route path="accounts-salary" element={<RequireAccounts><Salary /></RequireAccounts>} />
          <Route path="manage-form" element={<RequireAccounts><ManageForm /></RequireAccounts>} />
          <Route path="manage-orders" element={<RequireAccounts><Orders /></RequireAccounts>} />
          <Route path="accounts-income" element={<RequireAccounts><Incomes /></RequireAccounts>} />
          <Route path="accounts-expense" element={<RequireAccounts><Expense /></RequireAccounts>} />
          <Route path="users-home" element={<RequireUser><UsersHome /></RequireUser>} />
          <Route path="user-profile" element={<RequireUser><UsersProfile /></RequireUser>} />
          <Route path="user-package" element={<RequireUser><UsersWorkout /></RequireUser>} />
          <Route path="trainers-home" element={<TrainersHome />} />
          <Route path="students" element={<StudentList />} />
          <Route path="trainer-settings" element={<TrainerSettings />} />
          <Route path="trainer-package" element={<TrainerPackages />} />
          <Route path="trainer-profile" element={<TrainerProfile />} />
          <Route path="all-schedule" element={<AllSchedule />} />
        </Route>

      </Routes>
      {/* {
        location === '/' || '/about' || '/crossFit' || '/programs' || '/trainers' || '/testimonials' || '/blog' || '/shop' || '/contact' ? <Footer /> : null
      } */}
      <Footer />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
