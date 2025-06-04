import Base from "../Atoms/Base";

export const Misson2_Header = () => {
    return (
        <>
            <div className="mission2-header">
                <div className="mission2-header-container">
                    <Base size="medium" color="secondary">メニュー</Base>
                    <Base size="medium" color="secondary">アイコン</Base>
                    <Base size="medium" color="secondary">サブタイトル</Base>
                </div>
                <div className="mission2-header-login">
                    <Base size="medium" color="secondary">ログイン</Base>
                </div>
            </div>
        </>
    );
};

export default Misson2_Header;