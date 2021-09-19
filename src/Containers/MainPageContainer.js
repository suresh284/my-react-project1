import React from 'react'
import HomePageContent from '../Components/HomePageContent'
import MainPage from '../Components/MainPage'

export default function MainPageContainer() {
    return (
        <React.Fragment>
            <MainPage /> 
            <HomePageContent /> 
        </React.Fragment>
    )
}
