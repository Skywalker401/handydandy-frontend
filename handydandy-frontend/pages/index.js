import NavBar from "../components/NavBar";
import Dashboard from '../components/dashboard/Dashboard';
import { useUser } from "@auth0/nextjs-auth0";
import SideNav from "../components/SideNav";
import LandingPage from "../components/LandingPage";
import Footer from "../components/Footer";

export default function Home() {
    const { user } = useUser();

    return (
        <>


            {user ? <> <NavBar />
                <div className="min-h-full">
                    <div className="py-10">
                        <div
                            className="max-w-3xl mx-auto sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">

                            <SideNav />
                            <Dashboard />

                        </div>
                    </div>
                </div>
                <Footer />
            </>

                : <><NavBar /> <LandingPage /><Footer /></>

            }


        </>
    )
}
