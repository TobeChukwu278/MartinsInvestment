import Auth from "./components/Auth/Auth"
import Nav from "./components/Nav/Nav"
import Hero from "./components/Hero/Hero"
import Search from "./components/Search/Search"
import CategoriesFilter from "./components/CategoriesFilter/CategoriesFilter"
import Products from "./components/Products/Products"
import Cart from "./components/Cart/Cart"
import Account from "./components/Account/Account"
import { Footer } from "./components/Footer/Footer"
import { BackgroundGradientAnimation } from './components/ui/background-gradient-animation'

const App = () => {
  return (
    <div className="w-full min-h-screen relative bg-gray-700">
      {/* Background Animation - covers entire page height */}
      <BackgroundGradientAnimation
        className='fixed top-0 left-0 w-full h-full z-0'
      />

      {/* Main content - relative positioning to follow document flow */}
      <div className="absolute top-0 z-10 w-full">
        <Auth />
        {/* <Nav /> */}
        {/* <div className="px-3">
          <Hero />
          <Search />
          <CategoriesFilter />
          <Products />
        </div> */}
        {/* <Cart /> */}
        {/* <Account /> */}
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default App