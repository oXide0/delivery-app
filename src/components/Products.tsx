import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

interface ProductsProps {
    prodcuts: Product[];
}

const Products = ({ prodcuts }: ProductsProps) => {
    const [value, setValue] = useState(0);

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', p: 5 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label='Burgers' sx={{ fontWeight: 700, fontSize: 20 }} />
                    <Tab label='Pizza' sx={{ fontWeight: 700, fontSize: 20 }} />
                    <Tab label='Drinks' sx={{ fontWeight: 700, fontSize: 20 }} />
                    <Tab label='Desserts' sx={{ fontWeight: 700, fontSize: 20 }} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                {prodcuts.map(
                    (prodcut) =>
                        prodcut.category.name === 'Burgers' && (
                            <ProductCard
                                key={prodcut.id}
                                title={prodcut.title}
                                img={prodcut.img}
                                price={prodcut.price}
                            />
                        )
                )}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                {prodcuts.map(
                    (prodcut) =>
                        prodcut.category.name === 'Pizza' && (
                            <ProductCard
                                key={prodcut.id}
                                title={prodcut.title}
                                img={prodcut.img}
                                price={prodcut.price}
                            />
                        )
                )}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                {prodcuts.map(
                    (prodcut) =>
                        prodcut.category.name === 'Drinks' && (
                            <ProductCard
                                key={prodcut.id}
                                title={prodcut.title}
                                img={prodcut.img}
                                price={prodcut.price}
                            />
                        )
                )}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                {prodcuts.map(
                    (prodcut) =>
                        prodcut.category.name === 'Desserts' && (
                            <ProductCard
                                key={prodcut.id}
                                title={prodcut.title}
                                img={prodcut.img}
                                price={prodcut.price}
                            />
                        )
                )}
            </CustomTabPanel>
        </Box>
    );
};

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component='div'>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default Products;
