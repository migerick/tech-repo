import {JourneyList} from "../components/Journey/JourneyList/JourneyList";
import {TonnageByMaterial} from "../components/Journey/TonnageByMaterial/TonnageByMaterial";
import {TonnageByShift} from "../components/Journey/TonnageByShift/TonnageByShift";
import {TonnageDifference} from "../components/Journey/TonnageDifference/TonnageDifference";


export const JourneyListPage = () => {


    return (
        <div className="container__app">
            <JourneyList/>
            <TonnageByMaterial />
            <TonnageDifference />
            <TonnageByShift />
        </div>
    )
}