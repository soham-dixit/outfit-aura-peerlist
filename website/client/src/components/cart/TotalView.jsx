import React from 'react'

import { useState, useEffect } from 'react';

import { Box, Typography, styled } from '@mui/material';


const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    borderBottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
    color: #878787;
`;

const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
`;

const Price = styled(Typography)`
    float: right;
`;

const TotalAmount = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    border-top: 1px dashed #e0e0e0;
    padding: 20px 0;
    border-bottom: 1px dashed #e0e0e0;
`;

const Discount = styled(Typography)`
    font-size: 16px; 
    color: green;
`

const TotalView = ({ cartItems }) => {

    const [price, setPrice] = useState(0);

    useEffect(() => {
        totalAmount();
    }, [cartItems])

    const totalAmount = () => {
        let price = 0, discount = 0;
        cartItems.map(item => {
            price += item?.price;
        })
        setPrice(price);
    }


    return (
        <Box>
            <Header>
                <Heading>PRICE DETAILS</Heading>
            </Header>
            <Container>
                <Typography>Price ({cartItems?.length} item)
                    <Price component="span">₹{price}</Price>
                </Typography>
                <Typography>Delivery Charges
                    <Price component="span">₹40</Price>
                </Typography>
                <TotalAmount>Total Amount
                    <Price>₹{price + 40}</Price>
                </TotalAmount>
            </Container>
        </Box>
    )
}

export default TotalView;