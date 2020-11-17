import {useState} from 'react';
import Toast from 'react-bootstrap/Toast'

function HashtagClose() {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
    return (
  <>

<a href="#">

        <Toast show={showA} onClose={toggleShowA}>
        <div className="hashtagh-close">
          <Toast.Header>
          </Toast.Header>
          <Toast.Body>
          
             تهران 
        
          </Toast.Body>
          </div>
        </Toast>
        
        </a>
    
    
        
    
  </>
    );
  
  }
  
  export default HashtagClose;
  