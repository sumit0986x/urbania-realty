import Feature from '@/components/projectDetails/Feature'
import FloorPlan from '@/components/projectDetails/FloorPlan'
import UniquePoints from '@/components/projectDetails/UniquePoints'
import LocationMap from '@/components/projectDetails/LocationMap'
import Gallery from '@/components/projectDetails/Gallery'
import Amenities from '@/components/projectDetails/Amenities'

import Banner from "@/components/ui/Banner";


export default function CompletedDetail() {
    return (
        <>
                    <Banner
                        title="Shivaji Project"
                        description="Where ideas meet innovation. Committed to excellence in all we do."
                        backgroundImage="/banner/redevelopment.png"
                    />
            <Feature/>
            <LocationMap/>

            <UniquePoints/>
            <Gallery/>
            <Amenities/>
            <FloorPlan/>

        </>
       
    )
}
