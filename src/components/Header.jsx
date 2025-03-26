import {brainwave} from "../assets";
const Header = () => {
  return (
    <div className="fixed top-0 z-50 bg-n-8/90
    backdrop-blur-sm border-n-6 lg:bg-n-8/90lg:backdrop-blur-sm">

        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">

        <a className="block w-[12rem] xl:mr-8" href ="#hero">
            <img src={brainwave} width={190} height={40}
            alt="Brainwave" />
        </a>


        <nav className="hiddren fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:max-auto lg:bg-transparent">
        <div className="relative z-2 flex flex-col item-center jsutify-center m-auto lg:flex-row">
            1 2 3
        </div>
        </nav>
            </div>

        Header
    </div>
  )
}

export default Header