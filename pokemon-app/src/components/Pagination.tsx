import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { setCurrentPageIndex } from '../store/reducers';
import { RootState } from '../store/store';
import { PaginationProps } from "../utils/types";
import styles from '../styles/main.module.scss';

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
    const dispatch = useDispatch();
    const currentPageIndex = useSelector((state: RootState) => state.pagination.currentPageIndex);

    const handlePageChange = (page: number) => {
        dispatch(setCurrentPageIndex(page));
    };

    return (
        <div className={styles.PaginationWrapper}>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <Button
                    key={page}
                    variant={currentPageIndex === page ? 'contained' : 'outlined'}
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </Button>
            ))}
        </div>
    );
};

export default Pagination;




