import React from 'react'
import GeneralNews from '../Components/GeneralNews'
import MainPage from '../Components/MainPage'
import ProductInfo from '../Components/ProductInfo'

export default function DashboardContainer() {
    return (
        <React.Fragment>
            <MainPage />
            <ProductInfo />
            <GeneralNews />
    </React.Fragment>
    )
}
