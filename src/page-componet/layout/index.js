import Footer from "components/footer";
import MakePage from "components/makepage"
import Spinner from "components/spinner/spinner";
import PageNavbar from "page-componet/pag_nav";
import { Suspense, lazy } from "react";

const PageSideBar = lazy(() => import("page-componet/sliders"));

const InterfaceLayout = (props) => {
    const { children, sidebar = true, blurnav } = props;

    return (
        <>
            <MakePage>
                <PageNavbar blure={blurnav} />
                <main>
                    {
                        sidebar && (
                            <Suspense fallback={<Spinner sizeKey="small" color="#fff" isVisable={true} />}>
                                <PageSideBar />
                            </Suspense>
                        )
                    }
                    <div className={sidebar ? "main-page" : null} >
                        {children}
                    </div>
                </main>
                <Footer />
            </MakePage>
        </>
    )
}

export default InterfaceLayout