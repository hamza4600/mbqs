import Footer from "components/footer";
import MakePage from "components/makepage"
import PageNavbar from "page-componet/pag_nav";
import PageSideBar from "page-componet/sliders";

const InterfaceLayout = (props) => {
    const { children, sidebar = true, blurnav } = props;

    return (
        <>
            <MakePage>
                <PageNavbar blure={blurnav} />
                <main>
                    {sidebar && <PageSideBar />}
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