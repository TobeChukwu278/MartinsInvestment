import Auth from "./components/auth/Auth"
import Nav from "./components/Nav/Nav"
import Hero from "./components/Hero/Hero"
import Search from "./components/Search/Search"
import CategoriesFilter from "./components/CategoriesFilter/CategoriesFilter"
import Products from "./components/Products/Products"
import { Footer } from "./components/Footer/Footer"

const App = () => {
  return (
    <div className="w-full min-h-screen bg-[#f6f6f8] text-[#161022]  dark:bg-[#161022] dark:text-[#f6f6f8] bg-animated-gradient">
      {/* <Auth /> */}
      <Nav />
      <div className="px-3">
        <Hero />
        <Search />
        <CategoriesFilter />
        <Products />
      </div>
      <Footer />
    </div>
  )
}

export default App