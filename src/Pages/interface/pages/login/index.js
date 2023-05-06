import { Suspense, lazy, useCallback, useState } from "react";

import InterfaceLayout from "page-componet/layout";
import Model from "components/model";
import { DotShuttler, Grid, Lwrap, Rwrap } from "./structure";

import logo from "../../../../assits/modal.svg";

const LoginModelPart = lazy(() => import("./login"));
const RegesterModel = lazy(() => import("./regester"));
const OTP = lazy(() => import("./otp"));
const ResetPass = lazy(() => import("./resetPass"));

const Left = () => (
    <>
        <Lwrap>
            <img src={logo} alt="model for login" />
        </Lwrap>
    </>
);

const Right = (props) => {

    const [activeCompont, setActiveCompont] = useState(1);

    const ActiveCompt = useCallback(() => {
        switch (activeCompont) {
            case 1:
                return <LoginModelPart setActiveCompont={setActiveCompont} />;
            case 2:
                return <RegesterModel setActiveCompont={setActiveCompont} />;
            case 3:
                return <OTP setActiveCompont={setActiveCompont} />;
            case 4:
                return <ResetPass setActiveCompont={setActiveCompont} />;
            default:
                return <p>Error : No Match</p>;
        }
    }, [activeCompont]);

    return (
        <>
            <Rwrap id="margin">
                <Suspense fallback={<DotShuttler />}>
                    <ActiveCompt />
                </Suspense>
            </Rwrap>
        </>
    );
};

const LoginModel = () => (
    <>
        <Model.Outer>
            <Model.Inner>
                <Grid>
                    <Left />
                    <Right />
                </Grid>
            </Model.Inner>
        </Model.Outer>
    </>
);

const MainLoginPage = () => (
    <>
        <InterfaceLayout blurnav={true} sidebar={false}>
            <LoginModel />
        </InterfaceLayout>
    </>
);

export default MainLoginPage;
