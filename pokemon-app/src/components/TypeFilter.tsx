import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/main.module.scss';
import { fetchPokemonTypes } from '../utils/api';
import { RootState } from '../store/store';
import { setSelectedType } from '../store/reducers';
import { MenuItem, Select, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';
import {TypeFilterProps} from "../utils/types";

const TypeFilter: React.FC<TypeFilterProps> = ({ onTypeChange }) => {
    const dispatch = useDispatch();
    const selectedType = useSelector((state: RootState) => state.pagination.selectedType);
    const [types, setTypes] = useState<string[]>([]);

    useEffect(() => {
        const fetchTypes = async () => {
            try {
                const fetchedTypes = await fetchPokemonTypes();
                setTypes(fetchedTypes);
            } catch (error) {
                console.error('Error in TypeFilter component:', error);
            }
        };

        fetchTypes();
    }, []);

    const handleTypeChange = (event: SelectChangeEvent<string>) => {
        const type = event.target.value;
        dispatch(setSelectedType(type));
        const finalType = type.toUpperCase() === 'all types' ? 'all types' : type.toLowerCase();
        onTypeChange(finalType);
    };

    return (
        <div className={styles.TypeFilterWrapper}>
            <FormControl style={{ minWidth: 300 }} id="typeSelectFormControl">
                <InputLabel htmlFor="typeSelectFormControl">Select Type:</InputLabel>
                <Select
                    label="Select Type"
                    id="typeSelectFormControl"
                    value={selectedType}
                    onChange={handleTypeChange}
                >
                    {types.map((type, index) => (
                        <MenuItem key={index} value={type.toLowerCase()}>
                            {type}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

        </div>
    );
};

export default TypeFilter;




















