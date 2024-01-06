import { useDispatch } from "react-redux";
import {scroll} from "../../features/layout/isScrollSlice"
import { useEffect } from "react";

const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(scroll());
    },[])
    return ( 
        <div>homepage</div>
     );
}
 
export default HomePage;