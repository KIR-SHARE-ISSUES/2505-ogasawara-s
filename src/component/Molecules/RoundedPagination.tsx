import { PaginationAtoms } from "../Atoms/PaginationAtoms";

export const RoundedPagination = () => {
    return (
    <>
        <PaginationAtoms count={10} shape="rounded" /> 
        <PaginationAtoms count={10} shape="rounded" variant="outlined"/>
    </>
    );
};

export default RoundedPagination;