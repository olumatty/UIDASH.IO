import ContentMain from '../../Components/ContentMain/ContentMain';
import ContentTop from '../../Components/ContentTop/ContentTop';
import './Content.css'
const Content = () => {
    return (
      <div className="main-content">
        <ContentTop/>
        <ContentMain/>
      </div>
      )
}
 
export default Content;