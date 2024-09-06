import Card from '../Cards/Card';
import Report from '../Report/Report';
import Transaction from '../Transaction/Transaction';
import './ContentMain.css'

const ContentMain = () => {
    return ( 
        <div className="main-content-holder">
            <div className="content-grid-one">
                <Card/>
                <Transaction/>
                <Report/>
            </div>

        </div>
     );
}
 
export default ContentMain;