import Footer from "components/footer";
import MakePage from "components/makepage"
import PageNavbar from "page-componet/pag_nav";

const InterfaceLayout = (props) => {
    const { children } = props;

    return (
        <>
            <MakePage>
                <PageNavbar />
                {children}
                <Footer />
            </MakePage>
        </>
    )
}

export default InterfaceLayout