import { useNavigate } from "react-router-dom";
import Base from "../Atoms/Base";

// テーブルの型を用意する。
type BasicTableProps = {
    data: { id: number, name: string, prise: number, stock: number;} [];
    checkBox?: boolean;
};

export const BasicTable = ({data, checkBox = false,}: BasicTableProps) => { // 	props を分割代入して取り出す→	hasCheckbox にデフォルト値 false を設定→	Props 型であると明示する
    // useNavigateの関数
    const navigate = useNavigate();

    return (
        // テーブル作成
        // SCSSでテーブルの装飾をできるようにClasName設定→チェックボックスがtrueだった場合className設定（三項演算子）
        <table className={`basicTable ${checkBox ? "table-check" : ""}`}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Action</th>
                    <th>edit</th>
                </tr>
            </thead>
            <tbody>
                {data.map((data) => ( //dateの中の要素を順番に取り出す
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.prise}</td>
                        <td>{data.stock}</td>
                        <td>
                            {/* navigateを使ってボタンがクリックされたら詳細ページへ遷移する */}
                            <Base size="small" color="secondary" onClick={() => navigate(`/details`)}>詳細</Base>
                        </td>
                        <td>
                            <Base size="small" color="warning" onClick={() => navigate(`/edit`)}>編集</Base>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
export default BasicTable;


