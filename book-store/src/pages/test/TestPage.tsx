import { useEffect } from "react";
import axios from "axios";
const TestPage = () => {

    const testRouter = async () => {
        try {
          const check = await axios.get('/api/check');
          console.log("check:", check.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
     }

    useEffect(() => {
        testRouter()

    },[])




    return ( 
        <div>check page</div>
     );
}
 
export default TestPage;