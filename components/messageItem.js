import Link from 'next/link';
function MessageItem(props) {

  
    return (
  <>
            <Link href="/panel/message/[id-message]" as={`/panel/message/${props.id}`}>
               <div  className="message-item">
                <div className="message-item__info">
                  <div className="head-color__item"> {props.name} </div>
                  <div className="paragraf-color__item">  {props.date}  </div>
                </div>
                {
                  (props.notification>=1) ? (
                    <div className="messsage-item__notification">
                  <span className="notification-show">{props.notification}</span>
                </div>
                    ) :    null
                }
                
                </div>
              </Link>
  </>
    );
  
  }
  
  export default MessageItem;