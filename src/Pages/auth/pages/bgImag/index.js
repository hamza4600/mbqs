import EditPageLayout from "page-componet/layout/editPage"

const RightSection = () => {
    return (
        <>
            <div>

                <p>d cbdbcvfbvfoivbidvf vf c f  f  xc</p>
                <p>d cbdbcvfbvfoivbidvf vf c f  f  xc</p>
                <p>d cbdbcvfbvfoivbidvf vf c f  f  xc</p>
                <p>d cbdbcvfbvfoivbidvf vf c f  f  xc</p>
                <p>d cbdbcvfbvfoivbidvf vf c f  f  xc</p>
                <p>d cbdbcvfbvfoivbidvf vf c f  f  xc</p>
            </div>
        </>
    )
}

const LeftSection = () => {
    return (
        <>
            <div>
                <p>cndicduidcbui</p>
                <p>cndicduidcbui</p>
                <p>cndicduidcbui</p>
                <p>cndicduidcbui</p>
                <p>cndicduidcbui</p>
            </div>
        </>
    )
}

const BackgroundImage = () => (
    <>
        <EditPageLayout
            rightChildren={<RightSection />}
            rightTitle={"Background Image"}
            leftChildren={<LeftSection />}
        />
    </>
)

export default BackgroundImage