import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import FoodItemImg from '../assets/food-item.jfif';
import ProductCard from './ProductCard';
import ContentLayout from '../layout/ContentLayout';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const Products = () => {
    const [value, setValue] = useState(0);

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <ContentLayout>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label='Burgers' sx={{ fontWeight: 700, fontSize: 20 }} />
                    <Tab label='Pizzas' sx={{ fontWeight: 700, fontSize: 20 }} />
                    <Tab label='Drinks' sx={{ fontWeight: 700, fontSize: 20 }} />
                    <Tab label='Desserts' sx={{ fontWeight: 700, fontSize: 20 }} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <ProductCard id={1} img={FoodItemImg} price={100} title='Burger' category_id={1} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
        </ContentLayout>
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
