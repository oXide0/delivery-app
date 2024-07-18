import { Box, Stack, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

interface ProductsProps {
    products: Product[];
    onAddToOrder: (productId: string) => void;
}

const Products = ({ products, onAddToOrder }: ProductsProps) => {
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
                <Stack direction='row' flexWrap='wrap' gap={3}>
                    {products.map(
                        (product) =>
                            product.category === 'burgers' && (
                                <ProductCard
                                    key={product.id}
                                    title={product.title}
                                    imgUrl={product.imgUrl}
                                    price={product.price}
                                    onAddToOrder={() => onAddToOrder(product.id)}
                                />
                            )
                    )}
                </Stack>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Stack direction='row' flexWrap='wrap' gap={3}>
                    {products.map(
                        (product) =>
                            product.category === 'pizzas' && (
                                <ProductCard
                                    key={product.id}
                                    title={product.title}
                                    imgUrl={product.imgUrl}
                                    price={product.price}
                                    onAddToOrder={() => onAddToOrder(product.id)}
                                />
                            )
                    )}
                </Stack>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Stack direction='row' flexWrap='wrap' gap={3}>
                    {products.map(
                        (product) =>
                            product.category === 'drinks' && (
                                <ProductCard
                                    key={product.id}
                                    title={product.title}
                                    imgUrl={product.imgUrl}
                                    price={product.price}
                                    onAddToOrder={() => onAddToOrder(product.id)}
                                />
                            )
                    )}
                </Stack>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <Stack direction='row' flexWrap='wrap' gap={3}>
                    {products.map(
                        (product) =>
                            product.category === 'desserts' && (
                                <ProductCard
                                    key={product.id}
                                    title={product.title}
                                    imgUrl={product.imgUrl}
                                    price={product.price}
                                    onAddToOrder={() => onAddToOrder(product.id)}
                                />
                            )
                    )}
                </Stack>
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
