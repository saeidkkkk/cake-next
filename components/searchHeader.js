import Form from 'react-bootstrap/Form'

function SearchHeader() {

  
    return (
  <>
  
  
    <div className="search-section">
        <div className="search-parent__item">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12"><input type="type" placeholder="جستجو" /></div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-12"> 
              <Form.Control as="select" className="sel-form" id="inlineFormCustomSelectPref" custom>
                <option value="0">شهر</option>
                <option value="1">تهران</option>
                <option value="2">قزوین</option>
                <option value="3">رشت</option>
              </Form.Control>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-12"><input type="submit" value="جستجو"></input></div>
          </div>  
              
        </div>
    </div>
     
  </>
    );
  
  }
  
  export default SearchHeader;
  