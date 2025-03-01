import AdditinolFeaturs from '@/Components/FrontEndComponents/AdditinolFeaturs/AdditinolFeaturs';
import DashboardPreview from '@/Components/FrontEndComponents/DashboardPreview/DashboardPreview';
import Features from '@/Components/FrontEndComponents/Features/Features';
import HeroSection from '@/Components/FrontEndComponents/HeroSection/HeroSection';
import LogoCloud from '@/Components/FrontEndComponents/LogoCloud/LogoCloud';
import Priceing from '@/Components/FrontEndComponents/Priceing/Priceing';
import React from 'react';

function FrontEndHomePage(props) {
    return (
        <div>
            <HeroSection/>
            <LogoCloud/>
            <DashboardPreview/>
            <Features/>
            <AdditinolFeaturs/>
            <Priceing/>
        </div>
    );
}

export default FrontEndHomePage;